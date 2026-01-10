// Greater Faridabad Property - Rent Page JavaScript

class RentPageManager {
    constructor() {
        this.allProperties = [];
        this.filteredProperties = [];
        this.currentSort = 'newest';
        this.init();
    }

    init() {
        console.log('RentPageManager init() called');
        console.log('rentalPropertiesData defined?', typeof rentalPropertiesData !== 'undefined');
        
        // Try to load data
        if (typeof rentalPropertiesData !== 'undefined') {
            // Data is already loaded globally from properties.js
            console.log('Using global rentalPropertiesData');
            this.loadProperties(rentalPropertiesData);
        } else {
            // Load from JSON file as fallback
            console.log('Loading properties from JSON file...');
            fetch('../src/data/rental-properties.json')
                .then(response => response.json())
                .then(data => {
                    console.log('Loaded ' + data.length + ' properties from JSON');
                    this.loadProperties(data);
                })
                .catch(error => {
                    console.error('Error loading properties:', error);
                    // Show error on page
                    setTimeout(() => {
                        const grid = document.getElementById('propertiesGrid');
                        if (grid) {
                            grid.innerHTML = '<div class="no-results"><p style="color:red;">Error loading properties. Please refresh the page.</p></div>';
                        }
                    }, 100);
                });
        }
    }

    loadProperties(propertyData) {
        // Wait a moment for DOM to be ready
        setTimeout(() => {
            console.log('Loading ' + (propertyData ? propertyData.length : 0) + ' properties...');
            
            // Get rental properties
            this.allProperties = propertyData || [];
            
            if (this.allProperties.length > 0) {
                console.log('First property:', this.allProperties[0].title);
            }
            
            this.filteredProperties = [...this.allProperties];
            this.render();
            this.setupEventListeners();
        }, 50);
    }

    getRentalProperties() {
        // This method is no longer used as we load data in init() instead
        // Keeping for backwards compatibility if needed
        if (typeof rentalPropertiesData !== 'undefined') {
            return rentalPropertiesData;
        }
        return [];
    }

    setupEventListeners() {
        // Filter checkboxes
        document.querySelectorAll('.filter-type').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.applyFilters());
        });

        document.querySelectorAll('.filter-price').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.applyFilters());
        });

        document.querySelectorAll('.filter-bhk').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.applyFilters());
        });

        document.querySelectorAll('.filter-furnishing').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.applyFilters());
        });

        document.querySelectorAll('.filter-amenity').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.applyFilters());
        });

        // Reset button
        document.getElementById('resetFilters').addEventListener('click', () => this.resetFilters());

        // Sort select
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.applySort();
            this.render();
        });
    }

    applyFilters() {
        const selectedTypes = Array.from(document.querySelectorAll('.filter-type:checked')).map(c => c.value);
        const selectedPrices = Array.from(document.querySelectorAll('.filter-price:checked')).map(c => c.value);
        const selectedBhk = Array.from(document.querySelectorAll('.filter-bhk:checked')).map(c => c.value);
        const selectedFurnishing = Array.from(document.querySelectorAll('.filter-furnishing:checked')).map(c => c.value);
        const selectedAmenities = Array.from(document.querySelectorAll('.filter-amenity:checked')).map(c => c.value);

        this.filteredProperties = this.allProperties.filter(property => {
            // Type filter
            if (selectedTypes.length > 0 && !selectedTypes.includes(property.type)) return false;

            // Price filter (monthly rent)
            if (selectedPrices.length > 0) {
                const rent = property.monthlyRent;
                const matchesPrice = selectedPrices.some(range => {
                    if (range === '0-10') return rent < 10000;
                    if (range === '10-25') return rent >= 10000 && rent < 25000;
                    if (range === '25-50') return rent >= 25000 && rent < 50000;
                    if (range === '50+') return rent >= 50000;
                    return false;
                });
                if (!matchesPrice) return false;
            }

            // BHK filter
            if (selectedBhk.length > 0) {
                const bhk = property.bhk ? property.bhk.toString() : null;
                const matchesBhk = selectedBhk.some(b => {
                    if (b === '4+') return property.bhk >= 4;
                    return bhk === b;
                });
                if (!matchesBhk) return false;
            }

            // Furnishing filter
            if (selectedFurnishing.length > 0 && !selectedFurnishing.includes(property.furnishing)) return false;

            // Amenities filter
            if (selectedAmenities.length > 0) {
                const hasAmenities = selectedAmenities.every(amenity => 
                    property.amenities.includes(amenity)
                );
                if (!hasAmenities) return false;
            }

            return true;
        });

        this.applySort();
        this.render();
    }

    applySort() {
        switch(this.currentSort) {
            case 'newest':
                this.filteredProperties.sort((a, b) => (b.dateAdded || 0) - (a.dateAdded || 0));
                break;
            case 'price-low':
                this.filteredProperties.sort((a, b) => a.monthlyRent - b.monthlyRent);
                break;
            case 'price-high':
                this.filteredProperties.sort((a, b) => b.monthlyRent - a.monthlyRent);
                break;
            case 'popular':
                this.filteredProperties.sort((a, b) => (b.views || 0) - (a.views || 0));
                break;
        }
    }

    resetFilters() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        this.filteredProperties = [...this.allProperties];
        this.applySort();
        this.render();
    }

    render() {
        console.log('render() called with', this.filteredProperties.length, 'properties');
        
        const grid = document.getElementById('propertiesGrid');
        const resultsCount = document.getElementById('resultsCount');

        if (!grid) {
            console.error('ERROR: #propertiesGrid element not found!');
            return;
        }
        if (!resultsCount) {
            console.error('ERROR: #resultsCount element not found!');
            return;
        }

        resultsCount.textContent = `Showing ${this.filteredProperties.length} rental ${this.filteredProperties.length !== 1 ? 'properties' : 'property'}`;

        if (this.filteredProperties.length === 0) {
            console.warn('No properties to display - showing "No properties found" message');
            grid.innerHTML = '<div class="no-results"><p>No properties found matching your criteria.</p></div>';
            return;
        }

        console.log('Rendering property cards...');
        grid.innerHTML = this.filteredProperties.map(property => `
            <div class="property-card">
                <div class="property-image">
                    <img src="${property.images[0]}" alt="${property.title}">
                    <span class="property-badge rent-badge">FOR RENT</span>
                    <span class="property-type-badge">${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                </div>
                <div class="property-content">
                    <h3 class="property-title">${property.title}</h3>
                    <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                    <div class="property-meta">
                        ${property.bhk ? `<span><i class="fas fa-bed"></i> ${property.bhk} BHK</span>` : ''}
                        <span><i class="fas fa-ruler-combined"></i> ${property.size} sq ft</span>
                        ${property.furnishing ? `<span><i class="fas fa-couch"></i> ${property.furnishing.charAt(0).toUpperCase() + property.furnishing.slice(1).replace('-', ' ')}</span>` : ''}
                    </div>
                    <div class="property-price-section">
                        <span class="property-price">₹${(property.monthlyRent / 1000).toFixed(0)}K/month</span>
                        ${property.securityDeposit ? `<span class="property-deposit">Deposit: ₹${(property.securityDeposit / 100000).toFixed(1)}L</span>` : ''}
                    </div>
                    <div class="property-amenities">
                        ${property.amenities.slice(0, 3).map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                        ${property.amenities.length > 3 ? `<span class="amenity-tag">+${property.amenities.length - 3}</span>` : ''}
                    </div>
                    <a href="./property-details.html?id=${property.id}&type=rent" class="btn btn-primary btn-small">View Details</a>
                </div>
            </div>
        `).join('');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOMContentLoaded fired');
        new RentPageManager();
    } catch(error) {
        console.error('Error initializing RentPageManager:', error);
        console.error('Stack:', error.stack);
        
        // Show error on page
        const grid = document.getElementById('propertiesGrid');
        if (grid) {
            grid.innerHTML = '<div style="color:red; padding: 20px; background: #fee;"><strong>ERROR:</strong><br>' + error.message + '<br><pre>' + error.stack + '</pre></div>';
        }
    }
});
