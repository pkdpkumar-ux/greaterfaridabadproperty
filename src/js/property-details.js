// Property Details Page JavaScript

class PropertyDetailsManager {
    constructor() {
        this.currentProperty = null;
        this.currentImageIndex = 0;
        this.propertyType = 'sale'; // 'sale' or 'rent'
        this.init();
    }

    init() {
        // Get property ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = parseInt(urlParams.get('id'));
        this.propertyType = urlParams.get('type') || 'buy';

        console.log('Property Details Loading:', { propertyId, propertyType: this.propertyType });

        // Get property data
        if (this.propertyType === 'rent') {
            this.currentProperty = rentalPropertiesData.find(p => p.id === propertyId);
        } else {
            // For 'buy' or 'sale' type, use buyPropertiesData or propertiesData
            this.currentProperty = propertiesData.find(p => p.id === propertyId);
        }

        console.log('Found Property:', this.currentProperty);

        if (!this.currentProperty) {
            document.body.innerHTML = '<div class="container"><h2>Property not found</h2></div>';
            return;
        }

        this.render();
    }

    render() {
        this.renderGallery();
        this.renderDetails();
        this.renderEnquiryForm();
        this.renderRelatedProperties();
    }

    renderGallery() {
        const mainImage = document.getElementById('mainImage');
        const thumbnailsContainer = document.getElementById('thumbnailsContainer');
        const propertyTitle = document.getElementById('propertyTitle');

        // Set main image
        if (mainImage && this.currentProperty.images && this.currentProperty.images[0]) {
            mainImage.src = this.currentProperty.images[0];
            mainImage.alt = this.currentProperty.title;
        }

        // Set page title
        if (propertyTitle) {
            propertyTitle.textContent = this.currentProperty.title;
        }

        // Create thumbnails
        if (thumbnailsContainer && this.currentProperty.images) {
            thumbnailsContainer.innerHTML = this.currentProperty.images.map((image, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="propertyManager.selectImage(${index})">
                    <img src="${image}" alt="Property image ${index + 1}">
                </div>
            `).join('');
        }
    }

    selectImage(index) {
        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumbnail');

        this.currentImageIndex = index;
        mainImage.src = this.currentProperty.images[index];

        // Update active thumbnail
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    changeImage(direction) {
        let newIndex = this.currentImageIndex + direction;
        if (newIndex < 0) {
            newIndex = this.currentProperty.images.length - 1;
        } else if (newIndex >= this.currentProperty.images.length) {
            newIndex = 0;
        }
        this.selectImage(newIndex);
    }

    renderDetails() {
        // Title and Price
        document.getElementById('detailTitle').textContent = this.currentProperty.title;
        
        const priceDisplay = this.propertyType === 'rent' 
            ? `₹${(this.currentProperty.monthlyRent / 1000).toFixed(0)}K/month`
            : this.currentProperty.priceDisplay;
        document.getElementById('detailPrice').textContent = priceDisplay;

        // Type Badge
        const typeBadge = document.getElementById('detailTypeBadge');
        const typeText = this.currentProperty.type.charAt(0).toUpperCase() + this.currentProperty.type.slice(1);
        typeBadge.textContent = typeText;
        if (this.propertyType === 'rent') {
            typeBadge.style.background = '#4caf50';
        }

        // Location
        document.getElementById('detailLocation').textContent = this.currentProperty.location;

        // Meta information
        if (this.currentProperty.bhk) {
            document.getElementById('detailBhk').textContent = this.currentProperty.bhk;
        }
        document.getElementById('detailSize').textContent = this.currentProperty.size;
        
        if (this.currentProperty.floor) {
            document.getElementById('detailFloor').textContent = this.currentProperty.floor;
        }
        
        if (document.getElementById('detailAge')) {
            document.getElementById('detailAge').textContent = this.currentProperty.propertyAge || 'N/A';
        }

        // Features
        const featuresContainer = document.getElementById('detailFeatures');
        if (featuresContainer && this.currentProperty.features) {
            featuresContainer.innerHTML = this.currentProperty.features.map(feature => `
                <div class="feature-item">${feature}</div>
            `).join('');
        }

        // Amenities
        const amenitiesContainer = document.getElementById('detailAmenities');
        if (amenitiesContainer && this.currentProperty.amenities) {
            amenitiesContainer.innerHTML = this.currentProperty.amenities.map(amenity => {
                const iconClass = amenitiesIconMap[amenity] || 'fa-check';
                return `
                    <div class="amenity-badge">
                        <i class="fas ${iconClass}"></i>
                        <span>${amenity.charAt(0).toUpperCase() + amenity.slice(1)}</span>
                    </div>
                `;
            }).join('');
        }

        // Description
        const descriptionElement = document.getElementById('detailDescription');
        if (descriptionElement) {
            descriptionElement.textContent = this.currentProperty.description || 'No description available.';
        }

        // Map
        if (this.currentProperty.mapLink) {
            const mapFrame = document.getElementById('mapFrame');
            if (mapFrame) {
                mapFrame.src = this.currentProperty.mapLink;
            }
        }
    }

    renderEnquiryForm() {
        const form = document.getElementById('propertyEnquiryForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitEnquiry(form);
            });
        }
    }

    submitEnquiry(form) {
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Create WhatsApp message
        const whatsappMessage = `Hello! I'm interested in the property: ${this.currentProperty.title}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/919999098553?text=${encodeURIComponent(whatsappMessage)}`;

        // Show confirmation and redirect
        alert('Thank you for your interest! Redirecting to WhatsApp...');
        window.open(whatsappUrl, '_blank');

        // Reset form
        form.reset();
    }

    renderRelatedProperties() {
        const relatedGrid = document.getElementById('relatedPropertiesGrid');
        if (!relatedGrid) return;

        let allProperties = this.propertyType === 'rent' ? rentalPropertiesData : propertiesData;
        
        // Get related properties (same type, different properties, max 3)
        const related = allProperties
            .filter(p => p.id !== this.currentProperty.id && p.type === this.currentProperty.type)
            .slice(0, 3);

        relatedGrid.innerHTML = related.map(property => {
            const priceDisplay = this.propertyType === 'rent'
                ? `₹${(property.monthlyRent / 1000).toFixed(0)}K/month`
                : property.priceDisplay;

            return `
                <div class="property-card">
                    <div class="property-image">
                        <img src="${property.images[0]}" alt="${property.title}">
                        <span class="property-badge ${this.propertyType === 'rent' ? 'rent-badge' : ''}">
                            ${this.propertyType === 'rent' ? 'FOR RENT' : 'FOR SALE'}
                        </span>
                    </div>
                    <div class="property-content">
                        <h3 class="property-title">${property.title}</h3>
                        <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                        <div class="property-meta">
                            ${property.bhk ? `<span><i class="fas fa-bed"></i> ${property.bhk} BHK</span>` : ''}
                            <span><i class="fas fa-ruler-combined"></i> ${property.size} sq ft</span>
                        </div>
                        <div class="property-price-section">
                            <span class="property-price">${priceDisplay}</span>
                        </div>
                        <a href="./property-details.html?id=${property.id}&type=${this.propertyType}" class="btn btn-primary btn-small">View Details</a>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Initialize when DOM is loaded
let propertyManager;
document.addEventListener('DOMContentLoaded', () => {
    propertyManager = new PropertyDetailsManager();

    // Make changeImage globally accessible for HTML onclick
    window.changeImage = (direction) => propertyManager.changeImage(direction);
});

function initializePropertyDetails() {
    // Legacy function for backward compatibility
}

function displayPropertyDetails(property) {
    // Legacy function - kept for compatibility
}

function initializeGallery(property) {
    // Legacy function - kept for compatibility  
}

function selectImage(index) {
    // Legacy function - kept for compatibility
}

function changeImage(direction) {
    // Legacy function - kept for compatibility
}

function displayRelatedProperties(property) {
    // Legacy function - kept for compatibility
}

function createPropertyCard(property) {
    // Legacy function - kept for compatibility
    return '';
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

function getPropertyById(id) {
    return propertiesData.find(property => property.id === parseInt(id));
}

function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function contactProperty(propertyId) {
    const phone = '919999098553';
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
