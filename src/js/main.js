// Main JavaScript File for Greater Faridabad Property Website

// ============================================
// Initialize on Document Ready
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFeaturedProperties();
    initializeTestimonials();
    initializeModals();
    initializeFormHandling();
    initializeEventListeners();
});

// ============================================
// Navigation
// ============================================

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Reset menu state on page load
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (hamburger) {
        hamburger.classList.remove('active');
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked (without changing active state)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(e) {
        if (navMenu && hamburger) {
            const isClickInsideNav = navMenu.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
}

// ============================================
// Featured Properties
// ============================================

function initializeFeaturedProperties() {
    const grid = document.getElementById('featuredPropertiesGrid');
    
    if (grid && typeof propertiesData !== 'undefined') {
        const featured = propertiesData.slice(0, 6);
        grid.innerHTML = featured.map(property => createPropertyCard(property)).join('');
        
        // Add click handlers
        grid.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('click', function() {
                const propertyId = this.getAttribute('data-property-id');
                window.location.href = `pages/property-details.html?id=${propertyId}`;
            });
        });
    }
}

/**
 * Create property card HTML
 */
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

// ============================================
// Testimonials
// ============================================

function initializeTestimonials() {
    const grid = document.getElementById('testimonialsList');
    
    if (grid && typeof testimonialsData !== 'undefined') {
        grid.innerHTML = testimonialsData.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-rating">
                    ${getStarRating(testimonial.rating)}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <p class="testimonial-author">${testimonial.name}</p>
                <p class="testimonial-role">${testimonial.title}</p>
            </div>
        `).join('');
    }
}

// ============================================
// Modal Handling
// ============================================

function initializeModals() {
    const enquiryModal = document.getElementById('enquiryModal');
    const modals = document.querySelectorAll('.modal');
    
    // Open modal buttons
    document.querySelectorAll('[data-modal="enquiry"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(enquiryModal);
        });
    });
    
    // Close modal buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
}

// ============================================
// Form Handling
// ============================================

function initializeFormHandling() {
    // Search Form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
    
    // Enquiry Form
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', handleEnquiry);
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Property Enquiry Form
    const propertyEnquiryForm = document.getElementById('propertyEnquiryForm');
    if (propertyEnquiryForm) {
        propertyEnquiryForm.addEventListener('submit', handlePropertyEnquiry);
    }
}

/**
 * Handle search form submission
 */
function handleSearch(e) {
    e.preventDefault();
    
    const location = document.getElementById('searchLocation').value;
    const type = document.getElementById('searchType').value;
    const budget = document.getElementById('searchBudget').value;
    
    // Build query string
    let query = './pages/properties.html?';
    if (location) query += `location=${encodeURIComponent(location)}&`;
    if (type) query += `type=${type}&`;
    if (budget) query += `budget=${budget}&`;
    
    window.location.href = query;
}

/**
 * Handle enquiry form submission
 */
function handleEnquiry(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.querySelector('[name="fullName"]').value,
        email: document.querySelector('[name="email"]').value,
        phone: document.querySelector('[name="phone"]').value,
        propertyType: document.querySelector('[name="propertyType"]').value,
        message: document.querySelector('[name="message"]').value
    };
    
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
        showToast('Please fill all required fields correctly', 'error');
        return;
    }
    
    sendEnquiry(formData);
}

/**
 * Handle contact form submission
 */
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.querySelector('[name="fullName"]').value,
        email: document.querySelector('[name="email"]').value,
        phone: document.querySelector('[name="phone"]').value,
        subject: document.querySelector('[name="subject"]').value,
        propertyType: document.querySelector('[name="propertyType"]').value,
        message: document.querySelector('[name="message"]').value
    };
    
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
        showToast('Please fill all required fields correctly', 'error');
        return;
    }
    
    sendContactMessage(formData);
}

/**
 * Handle property enquiry form submission
 */
function handlePropertyEnquiry(e) {
    e.preventDefault();
    
    const propertyId = getQueryParam('id');
    const property = getPropertyById(propertyId);
    
    const formData = {
        name: document.querySelector('[name="name"]').value,
        email: document.querySelector('[name="email"]').value,
        phone: document.querySelector('[name="phone"]').value,
        message: document.querySelector('[name="message"]').value,
        propertyTitle: property ? property.title : 'Property Enquiry'
    };
    
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
        showToast('Please fill all required fields correctly', 'error');
        return;
    }
    
    sendPropertyEnquiry(formData);
}

// ============================================
// Form Submission Handlers
// ============================================

/**
 * Send enquiry email
 */
async function sendEnquiry(data) {
    try {
        showToast('Sending your enquiry...', 'info');
        
        // Prepare data for Formspree
        const formData = new FormData();
        formData.append('name', data.fullName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('propertyType', data.propertyType);
        formData.append('message', data.message);
        formData.append('_subject', `New Property Enquiry from ${data.fullName}`);
        formData.append('_reply_to', data.email);
        
        // Send via Formspree
        const response = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showToast('Thank you! We will contact you soon.', 'success');
            closeModal(document.getElementById('enquiryModal'));
            document.getElementById('enquiryForm').reset();
        } else {
            showToast('Error sending enquiry. Please try again.', 'error');
        }
    } catch (error) {
        showToast('Error sending enquiry. Please try again.', 'error');
        console.error(error);
    }
}

/**
 * Send contact message
 */
async function sendContactMessage(data) {
    try {
        showToast('Sending your message...', 'info');
        
        // Prepare data for Formspree
        const formData = new FormData();
        formData.append('fullName', data.fullName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('subject', data.subject);
        formData.append('propertyType', data.propertyType);
        formData.append('message', data.message);
        formData.append('_subject', `New Contact Message: ${data.subject}`);
        formData.append('_reply_to', data.email);
        
        // Send via Formspree
        const response = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showToast('Thank you! We will get back to you soon.', 'success');
            document.getElementById('contactForm').reset();
        } else {
            showToast('Error sending message. Please try again.', 'error');
        }
        
        // In production, send via API
        // await makeApiRequest(`${CONFIG.API_BASE_URL}/contact`, {
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // });
    } catch (error) {
        showToast('Error sending message. Please try again.', 'error');
        console.error(error);
    }
}

/**
 * Send property enquiry
 */
async function sendPropertyEnquiry(data) {
    try {
        showToast('Sending enquiry for ' + data.propertyTitle + '...', 'info');
        
        // Prepare data for Formspree
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('propertyTitle', data.propertyTitle);
        formData.append('message', data.message);
        formData.append('_subject', `Property Enquiry: ${data.propertyTitle}`);
        formData.append('_reply_to', data.email);
        
        // Send via Formspree
        const response = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showToast('Your enquiry has been sent! We will contact you soon.', 'success');
            document.getElementById('propertyEnquiryForm').reset();
            closeModal(document.getElementById('propertyEnquiryModal'));
        } else {
            showToast('Error sending enquiry. Please try again.', 'error');
        }
    } catch (error) {
        showToast('Error sending enquiry. Please try again.', 'error');
        console.error(error);
    }
}

// ============================================
// Property Actions
// ============================================

/**
 * Contact property
 */
function contactProperty(propertyId) {
    const phone = CONFIG.WHATSAPP;
    const property = getPropertyById(propertyId);
    const message = encodeURIComponent(`Hi, I'm interested in the property: ${property.title}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

/**
 * Share property on WhatsApp
 */
function shareProperty(propertyId) {
    const property = getPropertyById(propertyId);
    const url = `${window.location.origin}/pages/property-details.html?id=${propertyId}`;
    const message = encodeURIComponent(`Check out this amazing ${property.type} property in ${property.location} for ${property.priceDisplay}: ${url}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

// ============================================
// Event Listeners
// ============================================

function initializeEventListeners() {
    // CTA Buttons
    const ctaCallBtn = document.getElementById('ctaCallBtn');
    const ctaWhatsappBtn = document.getElementById('ctaWhatsappBtn');
    
    if (ctaCallBtn) {
        ctaCallBtn.addEventListener('click', function() {
            window.location.href = `tel:${CONFIG.PHONE}`;
        });
    }
    
    if (ctaWhatsappBtn) {
        ctaWhatsappBtn.addEventListener('click', function() {
            window.open(`https://wa.me/${CONFIG.WHATSAPP}`, '_blank');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    scrollToElement(target);
                }
            }
        });
    });
}

// ============================================
// Utility Functions
// ============================================

/**
 * Get star rating HTML
 */
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

/**
 * Format currency
 */
function formatCurrency(price) {
    if (price >= 10000000) {
        return '₹' + (price / 10000000).toFixed(1) + ' Cr';
    } else if (price >= 100000) {
        return '₹' + (price / 100000).toFixed(0) + ' Lakh';
    }
    return '₹' + price;
}

// ============================================
// Initialize on page load
// ============================================

window.addEventListener('load', function() {
    // Add any additional initialization here
    console.log('Greater Faridabad Property Website Loaded');
});
