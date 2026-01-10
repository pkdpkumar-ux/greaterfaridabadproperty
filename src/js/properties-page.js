// Properties Page JavaScript

let filteredProperties = [];
let currentSort = 'newest';

document.addEventListener('DOMContentLoaded', function() {
    initializePropertiesPage();
});

function initializePropertiesPage() {
    // Initialize filteredProperties with all data
    if (filteredProperties.length === 0) {
        filteredProperties = [...propertiesData];
    }
    
    // Handle URL query parameters for search filters
    applySearchQueryFilters();
    displayProperties();
    setupFilterEventListeners();
    setupSortListener();
    updateResultsCount();
}

/**
 * Apply filters from URL query parameters (location, type, budget)
 */
function applySearchQueryFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');
    const type = urlParams.get('type');
    const budget = urlParams.get('budget');
    
    console.log('=== SEARCH FILTERS ===');
    console.log('Location:', location);
    console.log('Type:', type);
    console.log('Budget:', budget);
    console.log('Total properties available:', propertiesData.length);
    
    // If no search params, show all properties
    if (!location && !type && !budget) {
        filteredProperties = [...propertiesData];
        console.log('No filters applied, showing all:', filteredProperties.length);
        return;
    }
    
    filteredProperties = propertiesData.filter(property => {
        // Location filter - match sector number or location text
        if (location && location.trim()) {
            const locationTrimmed = location.trim();
            const locationLower = locationTrimmed.toLowerCase();
            
            // Extract sector number from input (e.g., "Sector 86" -> "86")
            const sectorMatch = locationTrimmed.match(/\d+/);
            const sectorNumber = sectorMatch ? sectorMatch[0] : null;
            
            // Try multiple matching strategies
            const matchesBySectorNumber = sectorNumber && String(property.sector) === sectorNumber;
            const matchesByFullText = property.location.toLowerCase().includes(locationLower);
            const matchesLocation = matchesBySectorNumber || matchesByFullText;
            
            console.log(`Checking ${property.title}: sector=${property.sector}, location="${property.location}" | input="${location}" | matches=${matchesLocation}`);
            
            if (!matchesLocation) return false;
        }
        
        // Type filter - skip if type is empty
        if (type && type.trim()) {
            if (property.type !== type.trim()) {
                console.log(`Type filter rejected: ${property.type} !== ${type}`);
                return false;
            }
        }
        
        // Budget filter - skip if budget is empty
        if (budget && budget.trim()) {
            const budgetRange = CONFIG.VALIDATION.PRICE_RANGES.find(r => r.value === budget.trim());
            if (budgetRange) {
                if (property.price < budgetRange.min || property.price > budgetRange.max) {
                    console.log(`Budget filter rejected: ${property.price} not in range ${budgetRange.value}`);
                    return false;
                }
            }
        }
        
        return true;
    });
    
    console.log('=== FILTERED RESULTS ===');
    console.log('Matched properties:', filteredProperties.length);
    filteredProperties.forEach(p => console.log(`  - ${p.title} (Sector ${p.sector})`));
}

function displayProperties() {
    const grid = document.getElementById('propertiesGrid');
    
    if (!grid) return;
    
    // Check if any properties match the filters
    if (filteredProperties.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 48px; color: #d4a574; margin-bottom: 20px;"></i>
                <h3 style="color: #2d5a3d; margin-bottom: 10px;">No Properties Found</h3>
                <p style="color: #666;">Try adjusting your search filters or browse all properties</p>
            </div>
        `;
        return;
    }
    
    // Sort properties
    let sorted = [...filteredProperties];
    sorted.sort((a, b) => {
        switch(currentSort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });
    
    grid.innerHTML = sorted.map(property => createPropertyCard(property)).join('');
    
    // Add click handlers
    grid.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-property-id');
            window.location.href = `./property-details.html?id=${propertyId}`;
        });
    });
}

function setupFilterEventListeners() {
    // Type filters
    document.querySelectorAll('.filter-type').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Price filters
    document.querySelectorAll('.filter-price').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // BHK filters
    document.querySelectorAll('.filter-bhk').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Amenity filters
    document.querySelectorAll('.filter-amenity').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Reset filters
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

function applyFilters() {
    const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(cb => cb.value);
    const selectedPrices = Array.from(document.querySelectorAll('.filter-price:checked')).map(cb => cb.value);
    const selectedBhks = Array.from(document.querySelectorAll('.filter-bhk:checked')).map(cb => cb.value);
    const selectedAmenities = Array.from(document.querySelectorAll('.filter-amenity:checked')).map(cb => cb.value);
    
    filteredProperties = propertiesData.filter(property => {
        // Type filter
        if (selectedTypes.length > 0 && !selectedTypes.includes(property.type)) {
            return false;
        }
        
        // Price filter
        if (selectedPrices.length > 0) {
            const priceMatch = selectedPrices.some(priceRange => {
                const range = CONFIG.VALIDATION.PRICE_RANGES.find(r => r.value === priceRange);
                if (range) {
                    return property.price >= range.min && property.price <= range.max;
                }
                return false;
            });
            if (!priceMatch) return false;
        }
        
        // BHK filter
        if (selectedBhks.length > 0 && property.bhk) {
            const bhkMatch = selectedBhks.some(bhk => {
                if (bhk === '4+') {
                    return property.bhk >= 4;
                }
                return property.bhk === parseInt(bhk);
            });
            if (!bhkMatch) return false;
        }
        
        // Amenities filter
        if (selectedAmenities.length > 0) {
            const hasAllAmenities = selectedAmenities.every(amenity =>
                property.amenities.includes(amenity)
            );
            if (!hasAllAmenities) return false;
        }
        
        return true;
    });
    
    displayProperties();
    updateResultsCount();
}

function resetFilters() {
    // Clear all checkboxes
    document.querySelectorAll('.filter-type, .filter-price, .filter-bhk, .filter-amenity').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset filtered properties
    filteredProperties = [...propertiesData];
    
    // Refresh display
    displayProperties();
    updateResultsCount();
}

function setupSortListener() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            displayProperties();
        });
    }
}

function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filteredProperties.length} properties`;
    }
}

// Create property card function (from main.js, duplicated for this page)
function createPropertyCard(property) {
    const priceDisplay = formatCurrency(property.price);
    const amenitiesHtml = property.amenities.map(amenity =>
        `<i class="fas ${getAmenityIcon(amenity)}" title="${amenity}"></i>`
    ).join('');

    return `
        <div class="property-card" data-property-id="${property.id}">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                <span class="property-badge">${property.type === 'residential' ? 'Residential' : property.type === 'commercial' ? 'Commercial' : 'Plot'}</span>
            </div>
            <div class="property-content">
                <span class="property-type-badge">${property.sector ? 'Sector ' + property.sector : 'Plot'}</span>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location}</span>
                </div>
                <div class="property-specs">
                    <div class="property-spec">
                        <span class="property-spec-label">${property.bhk ? 'BHK' : 'Size'}</span>
                        <span class="property-spec-value">${property.bhk || property.size + ' sqft'}</span>
                    </div>
                    <div class="property-spec">
                        <span class="property-spec-label">Size</span>
                        <span class="property-spec-value">${property.size} sqft</span>
                    </div>
                </div>
                <div class="property-price">${priceDisplay}</div>
                <div class="property-actions">
                    <button class="btn btn-primary" onclick="contactProperty(${property.id})">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    <button class="btn btn-secondary" onclick="shareProperty(${property.id})">
                        <i class="fab fa-whatsapp"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `;
}

function formatCurrency(price) {
    if (price >= 10000000) {
        return '₹' + (price / 10000000).toFixed(1) + ' Cr';
    } else if (price >= 100000) {
        return '₹' + (price / 100000).toFixed(0) + ' Lakh';
    }
    return '₹' + price;
}

function getAmenityIcon(amenityId) {
    const amenity = CONFIG.AMENITIES.find(a => a.id === amenityId);
    return amenity ? amenity.icon : 'fa-check';
}

function contactProperty(propertyId) {
    const phone = CONFIG.WHATSAPP;
    const property = getPropertyById(propertyId);
    const message = encodeURIComponent(`Hi, I'm interested in the property: ${property.title}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

function shareProperty(propertyId) {
    const property = getPropertyById(propertyId);
    const url = `${window.location.origin}/pages/property-details.html?id=${propertyId}`;
    const message = encodeURIComponent(`Check out this amazing ${property.type} property in ${property.location} for ${property.priceDisplay}: ${url}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function getPropertyById(id) {
    return propertiesData.find(property => property.id === parseInt(id));
}
