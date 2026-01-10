// Sector-wise Properties Page JavaScript

let filteredSectorProperties = [];
let selectedSector = null;
let currentSectorSort = 'newest';

document.addEventListener('DOMContentLoaded', function() {
    initializeSectorPage();
});

function initializeSectorPage() {
    // Initialize filteredSectorProperties with all data
    if (filteredSectorProperties.length === 0) {
        filteredSectorProperties = [...propertiesData];
    }
    
    displaySectorButtons();
    displayProperties();
    setupFilterEventListeners();
    setupSortListener();
    updateResultsCount();
}

function displaySectorButtons() {
    const buttonsContainer = document.getElementById('sectorButtons');
    
    if (!buttonsContainer) return;
    
    const sectors = [...new Set(propertiesData.map(p => p.sector))].filter(Boolean).sort();
    
    const html = sectors.map(sector => `
        <button class="sector-btn" onclick="filterBySector('${sector}')">
            Sector ${sector}
        </button>
    `).join('');
    
    buttonsContainer.innerHTML = html;
}

function filterBySector(sector) {
    selectedSector = selectedSector === sector ? null : sector;
    
    // Update active button
    document.querySelectorAll('.sector-btn').forEach(btn => {
        const btnText = btn.textContent;
        const btnSector = btnText.replace('Sector ', '');
        btn.classList.toggle('active', btnText === `Sector ${sector}` && selectedSector === sector);
    });
    
    // Filter properties
    applyFilters();
}

function displayProperties() {
    const grid = document.getElementById('sectorPropertiesGrid');
    
    if (!grid) return;
    
    // Sort properties
    let sorted = [...filteredSectorProperties];
    sorted.sort((a, b) => {
        switch(currentSectorSort) {
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
    document.querySelectorAll('.sector-filter-type').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Price filters
    document.querySelectorAll('.sector-filter-price').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // BHK filters
    document.querySelectorAll('.sector-filter-bhk').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Reset filters
    const resetBtn = document.getElementById('resetSectorFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

function applyFilters() {
    const selectedTypes = Array.from(document.querySelectorAll('.sector-filter-type:checked')).map(cb => cb.value);
    const selectedPrices = Array.from(document.querySelectorAll('.sector-filter-price:checked')).map(cb => cb.value);
    const selectedBhks = Array.from(document.querySelectorAll('.sector-filter-bhk:checked')).map(cb => cb.value);
    
    filteredSectorProperties = propertiesData.filter(property => {
        // Sector filter
        if (selectedSector && property.sector !== selectedSector) {
            return false;
        }
        
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
        
        return true;
    });
    
    displayProperties();
    updateResultsCount();
}

function resetFilters() {
    // Clear all checkboxes
    document.querySelectorAll('.sector-filter-type, .sector-filter-price, .sector-filter-bhk').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset sector
    selectedSector = null;
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset filtered properties
    filteredSectorProperties = [...propertiesData];
    
    // Refresh display
    displayProperties();
    updateResultsCount();
}

function setupSortListener() {
    const sortSelect = document.getElementById('sectorSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSectorSort = this.value;
            displayProperties();
        });
    }
}

function updateResultsCount() {
    const resultsCount = document.getElementById('sectorResultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filteredSectorProperties.length} properties`;
    }
}

function createPropertyCard(property) {
    const priceDisplay = formatCurrency(property.price);

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

function contactProperty(propertyId) {
    const phone = CONFIG.WHATSAPP;
    const property = getPropertyById(propertyId);
    const message = encodeURIComponent(`Hi, I'm interested in the property: ${property.title}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

function shareProperty(propertyId) {
    const property = getPropertyById(propertyId);
    const url = `${window.location.origin}/pages/property-details.html?id=${propertyId}`;
    const message = encodeURIComponent(`Check out this amazing ${property.type} property in ${property.location}: ${url}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function getPropertyById(id) {
    return propertiesData.find(property => property.id === parseInt(id));
}
