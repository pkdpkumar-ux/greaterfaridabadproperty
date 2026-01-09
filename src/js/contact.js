// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeContactPage();
});

function initializeContactPage() {
    setupContactForm();
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.querySelector('[name="fullName"]').value,
        email: document.querySelector('[name="email"]').value,
        phone: document.querySelector('[name="phone"]').value,
        subject: document.querySelector('[name="subject"]').value,
        propertyType: document.querySelector('[name="propertyType"]').value,
        message: document.querySelector('[name="message"]').value,
        agreedToTerms: document.querySelector('[name="agreedToTerms"]').checked
    };
    
    // Validate form
    const validation = validateFormData(formData);
    
    if (!validation.isValid) {
        Object.keys(validation.errors).forEach(field => {
            showToast(validation.errors[field], 'error');
        });
        return;
    }
    
    if (!formData.agreedToTerms) {
        showToast('Please agree to the terms and conditions', 'error');
        return;
    }
    
    // Send form
    sendContactForm(formData);
}

async function sendContactForm(data) {
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
            showToast('Thank you for contacting us! We will get back to you soon.', 'success');
            document.getElementById('contactForm').reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            showToast('Error sending message. Please try again.', 'error');
        }
        
    } catch (error) {
        showToast('Error sending message. Please try again.', 'error');
        console.error(error);
    }
}

// Utility function: Validate Form Data
function validateFormData(data) {
    const errors = {};
    
    if (!data.fullName || data.fullName.trim().length < 3) {
        errors.fullName = 'Name must be at least 3 characters';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email';
    }
    
    const phoneRegex = /^(\+91)?[6789]\d{9}$/;
    if (!phoneRegex.test(data.phone)) {
        errors.phone = 'Please enter a valid phone number';
    }
    
    if (!data.subject) {
        errors.subject = 'Please select a subject';
    }
    
    if (data.message && data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

// Utility function: Show Toast
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
