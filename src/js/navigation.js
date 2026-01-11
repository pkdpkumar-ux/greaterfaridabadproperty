// Shared Navigation Module for All Pages
// Handles mobile menu toggle and interaction on all pages

/**
 * Initialize Navigation - Call this on every page
 * This function handles:
 * - Mobile hamburger menu toggle
 * - Close menu on link click
 * - Close menu on outside click
 */
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
    
    // Hamburger click event
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked
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

// Auto-initialize on DOM ready if called as a standalone module
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if not already initialized by another script
    if (typeof window.navigationInitialized === 'undefined') {
        initializeNavigation();
        window.navigationInitialized = true;
    }
});
