// Builder Properties Page JavaScript

let filteredBuilderProperties = [...propertiesData];
let selectedBuilder = null;
let currentBuilderSort = 'newest';

document.addEventListener('DOMContentLoaded', function() {
    initializeBuilderPage();
});

function initializeBuilderPage() {
    displayBuilderButtons();
    displayProperties();
    setupFilterEventListeners();
    setupSortListener();
    updateResultsCount();
}

function displayBuilderButtons() {
    const buttonsContainer = document.getElementById('builderButtons');
    
    if (!buttonsContainer) return;
    
    const builders = [...new Set(propertiesData.map(p => p.builder))].sort();
    
    const html = builders.map(builder => `
        <button class="builder-btn" onclick="filterByBuilder('${builder}')">
            ${builder}
        </button>
    `).join('');
    
    buttonsContainer.innerHTML = html;
}

function filterByBuilder(builder) {
    selectedBuilder = selectedBuilder === builder ? null : builder;
    
    // Update active button
    document.querySelectorAll('.builder-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === builder && selectedBuilder === builder);
    });
    
    // Filter properties
    applyFilters();
}

function displayProperties() {
    const grid = document.getElementById('builderPropertiesGrid');
    
    if (!grid) return;
    
    // Sort properties
    let sorted = [...filteredBuilderProperties];
    sorted.sort((a, b) => {
        switch(currentBuilderSort) {
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
    document.querySelectorAll('.builder-filter-type').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Price filters
    document.querySelectorAll('.builder-filter-price').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // BHK filters
    document.querySelectorAll('.builder-filter-bhk').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Reset filters
    const resetBtn = document.getElementById('resetBuilderFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

function applyFilters() {
    const selectedTypes = Array.from(document.querySelectorAll('.builder-filter-type:checked')).map(cb => cb.value);
    const selectedPrices = Array.from(document.querySelectorAll('.builder-filter-price:checked')).map(cb => cb.value);
    const selectedBhks = Array.from(document.querySelectorAll('.builder-filter-bhk:checked')).map(cb => cb.value);
    
    filteredBuilderProperties = propertiesData.filter(property => {
        // Builder filter
        if (selectedBuilder && property.builder !== selectedBuilder) {
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
    document.querySelectorAll('.builder-filter-type, .builder-filter-price, .builder-filter-bhk').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset builder
    selectedBuilder = null;
    document.querySelectorAll('.builder-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset filtered properties
    filteredBuilderProperties = [...propertiesData];
    
    // Refresh display
    displayProperties();
    updateResultsCount();
}

function setupSortListener() {
    const sortSelect = document.getElementById('builderSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentBuilderSort = this.value;
            displayProperties();
        });
    }
}

function updateResultsCount() {
    const resultsCount = document.getElementById('builderResultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filteredBuilderProperties.length} properties`;
    }
}

function createPropertyCard(property) {
    const priceDisplay = formatCurrency(property.price);

    return `
        <div class="property-card" data-property-id="${property.id}">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
                <span class="property-badge">${property.type === 'residential' ? 'Residential' : 'Commercial'}</span>
            </div>
            <div class="property-content">
                <span class="property-type-badge">${property.builder}</span>
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
    const message = encodeURIComponent(`Check out this amazing property in ${property.location}: ${url}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function getPropertyById(id) {
    return propertiesData.find(property => property.id === parseInt(id));
}
