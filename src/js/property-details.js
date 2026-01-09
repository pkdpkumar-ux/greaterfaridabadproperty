// Property Details Page JavaScript

let currentPropertyId;
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    initializePropertyDetails();
});

function initializePropertyDetails() {
    const propertyId = getQueryParam('id');
    
    if (!propertyId) {
        window.location.href = './properties.html';
        return;
    }
    
    currentPropertyId = parseInt(propertyId);
    const property = getPropertyById(currentPropertyId);
    
    if (!property) {
        window.location.href = './properties.html';
        return;
    }
    
    displayPropertyDetails(property);
    initializeGallery(property);
    displayRelatedProperties(property);
}

function displayPropertyDetails(property) {
    // Update page title and heading
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('detailTitle').textContent = property.title;
    document.getElementById('detailPrice').textContent = formatCurrency(property.price);
    document.getElementById('detailTypeBadge').textContent = property.type.charAt(0).toUpperCase() + property.type.slice(1);
    document.getElementById('detailLocation').textContent = property.location;
    
    // Update property meta
    if (property.bhk) {
        document.getElementById('detailBhk').textContent = property.bhk;
    }
    document.getElementById('detailSize').textContent = property.size;
    if (property.floor) {
        document.getElementById('detailFloor').textContent = property.floor;
    }
    document.getElementById('detailAge').textContent = property.propertyAge;
    
    // Features
    const featuresHtml = property.features.map(feature => `
        <div class="feature-item">
            <i class="fas fa-check-circle"></i>
            <span>${feature}</span>
        </div>
    `).join('');
    document.getElementById('detailFeatures').innerHTML = featuresHtml;
    
    // Amenities
    const amenitiesHtml = property.amenities.map(amenity => `
        <div class="amenity-item">
            <i class="fas ${getAmenityIcon(amenity)}"></i>
            <span>${amenity.charAt(0).toUpperCase() + amenity.slice(1)}</span>
        </div>
    `).join('');
    document.getElementById('detailAmenities').innerHTML = amenitiesHtml;
    
    // Description
    document.getElementById('detailDescription').textContent = property.description;
    
    // Update map embed
    const mapFrame = document.getElementById('mapFrame');
    if (mapFrame && property.mapLink) {
        mapFrame.src = property.mapLink;
    }
}

function initializeGallery(property) {
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    
    if (mainImage) {
        mainImage.src = property.images[0];
    }
    
    // Create thumbnails
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = property.images.map((image, index) => `
            <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index})">
                <img src="${image}" alt="Gallery ${index + 1}">
            </div>
        `).join('');
    }
}

function selectImage(index) {
    currentImageIndex = index;
    const property = getPropertyById(currentPropertyId);
    
    if (property && property.images[index]) {
        document.getElementById('mainImage').src = property.images[index];
        
        // Update active thumbnail
        document.querySelectorAll('.gallery-thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
}

function changeImage(direction) {
    const property = getPropertyById(currentPropertyId);
    
    if (!property) return;
    
    let newIndex = currentImageIndex + direction;
    
    if (newIndex < 0) {
        newIndex = property.images.length - 1;
    } else if (newIndex >= property.images.length) {
        newIndex = 0;
    }
    
    selectImage(newIndex);
}

function displayRelatedProperties(property) {
    const grid = document.getElementById('relatedPropertiesGrid');
    
    if (!grid) return;
    
    // Get related properties (same type or sector)
    const related = propertiesData.filter(p =>
        p.id !== property.id &&
        (p.type === property.type || p.sector === property.sector)
    ).slice(0, 3);
    
    grid.innerHTML = related.map(prop => createPropertyCard(prop)).join('');
    
    // Add click handlers
    grid.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-property-id');
            window.location.href = `./property-details.html?id=${propertyId}`;
        });
    });
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
