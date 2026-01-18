// Configuration and Constants

const CONFIG = {
    // API Endpoints
    API_BASE_URL: 'http://localhost:3001',
    
    // Contact Information
    PHONE: '+91-9999098553',
    EMAIL: 'greaterfaridabadproperty@gmail.com',
    WHATSAPP: '+91-9999098553',
    
    // Email Configuration - Using Backend API (proxies to FormSubmit.co)
    EMAIL_SERVICE: 'Backend', // Backend proxies to FormSubmit.co
    SEND_EMAIL_ENDPOINT: 'http://localhost:3001/api/send-email',
    FORMSUBMIT_ENDPOINT: 'https://formsubmit.co/greaterfaridabadproperty@gmail.com',
    
    // Form Validation Rules
    VALIDATION: {
        NAME_MIN_LENGTH: 3,
        NAME_MAX_LENGTH: 100,
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        PHONE_REGEX: /^(\+91)?[6789]\d{9}$/,
        PRICE_RANGES: [
            { value: '0-25', label: 'Below 25 Lakh', min: 0, max: 2500000 },
            { value: '25-50', label: '25-50 Lakh', min: 2500000, max: 5000000 },
            { value: '50-100', label: '50 Lakh - 1 Cr', min: 5000000, max: 10000000 },
            { value: '100+', label: 'Above 1 Cr', min: 10000000, max: Infinity }
        ]
    },
    
    // Property Types
    PROPERTY_TYPES: [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'plot', label: 'Plot' }
    ],
    
    // BHK Options
    BHK_OPTIONS: [1, 2, 3, 4],
    
    // Amenities
    AMENITIES: [
        { id: 'gym', label: 'Gym', icon: 'fa-dumbbell' },
        { id: 'pool', label: 'Swimming Pool', icon: 'fa-water' },
        { id: 'parking', label: 'Parking', icon: 'fa-car' },
        { id: 'security', label: '24/7 Security', icon: 'fa-shield' },
        { id: 'garden', label: 'Garden', icon: 'fa-tree' },
        { id: 'concierge', label: 'Concierge', icon: 'fa-person' }
    ],
    
    // Animation Timing
    ANIMATION: {
        FAST: 200,
        NORMAL: 300,
        SLOW: 500
    },
    
    // Pagination
    ITEMS_PER_PAGE: 12,
    
    // Local Storage Keys
    STORAGE_KEYS: {
        FAVORITES: 'gfp_favorites',
        SEARCH_HISTORY: 'gfp_search_history',
        USER_PREFERENCES: 'gfp_preferences'
    }
};

// Utility Functions

/**
 * Format currency to Indian format
 */
function formatCurrency(amount) {
    if (!amount) return '₹0';
    
    if (amount >= 10000000) {
        return '₹' + (amount / 10000000).toFixed(1) + ' Cr';
    } else if (amount >= 100000) {
        return '₹' + (amount / 100000).toFixed(0) + ' Lakh';
    } else if (amount >= 1000) {
        return '₹' + (amount / 1000).toFixed(0) + 'K';
    }
    return '₹' + amount;
}

/**
 * Validate email
 */
function validateEmail(email) {
    return CONFIG.VALIDATION.EMAIL_REGEX.test(email);
}

/**
 * Validate phone number
 */
function validatePhone(phone) {
    return CONFIG.VALIDATION.PHONE_REGEX.test(phone);
}

/**
 * Validate form data
 */
function validateFormData(data) {
    const errors = {};
    
    if (!data.fullName || data.fullName.trim().length < CONFIG.VALIDATION.NAME_MIN_LENGTH) {
        errors.fullName = 'Name must be at least 3 characters';
    }
    
    if (!validateEmail(data.email)) {
        errors.email = 'Please enter a valid email';
    }
    
    if (!validatePhone(data.phone)) {
        errors.phone = 'Please enter a valid phone number';
    }
    
    if (data.message && data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

/**
 * Show notification toast
 */
function showToast(message, type = 'success', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2d5a3d' : type === 'error' ? '#d32f2f' : '#1976d2'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInUp 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/**
 * Get price range from filter value
 */
function getPriceRange(rangeValue) {
    return CONFIG.VALIDATION.PRICE_RANGES.find(r => r.value === rangeValue);
}

/**
 * Get amenity icon class
 */
function getAmenityIcon(amenityId) {
    const amenity = CONFIG.AMENITIES.find(a => a.id === amenityId);
    return amenity ? amenity.icon : 'fa-check';
}

/**
 * Save to local storage
 */
function saveToStorage(key, data) {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS[key], JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage error:', e);
        return false;
    }
}

/**
 * Get from local storage
 */
function getFromStorage(key) {
    try {
        const data = localStorage.getItem(CONFIG.STORAGE_KEYS[key]);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Storage error:', e);
        return null;
    }
}

/**
 * Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Close modal
 */
function closeModal(modalElement) {
    if (modalElement) {
        modalElement.classList.remove('active');
    }
}

/**
 * Open modal
 */
function openModal(modalElement) {
    if (modalElement) {
        modalElement.classList.add('active');
    }
}

/**
 * Format date
 */
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Scroll to element
 */
function scrollToElement(element, offset = 80) {
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }
}

/**
 * Get query parameter
 */
function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

/**
 * Set query parameter
 */
function setQueryParam(param, value) {
    const params = new URLSearchParams(window.location.search);
    if (value) {
        params.set(param, value);
    } else {
        params.delete(param);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
}

/**
 * Make API request with error handling
 */
async function makeApiRequest(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}
