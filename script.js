/* ==========================================================================
   Custom JavaScript for Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking any link inside it
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Set Current Year in Footer Automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Smooth Header Background Blur on Scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                header.classList.remove('shadow-lg', 'shadow-black/20');
            }
        });
    }

    // 4. Language Switcher (Ar / En Toggle)
    const langBtn = document.getElementById('lang-btn');
    const langLabel = document.getElementById('lang-label');
    const htmlTag = document.documentElement;

    let currentLang = 'en'; // Default language

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // Toggle language
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            
            // Update Page Direction and Language Attribute
            if (currentLang === 'ar') {
                htmlTag.setAttribute('lang', 'ar');
                htmlTag.setAttribute('dir', 'rtl');
                if (langLabel) langLabel.textContent = 'English';
            } else {
                htmlTag.setAttribute('lang', 'en');
                htmlTag.setAttribute('dir', 'ltr');
                if (langLabel) langLabel.textContent = 'عربي';
            }

            // Swap all texts with data-ar and data-en attributes
            const elementsToTranslate = document.querySelectorAll('[data-ar][data-en]');
            elementsToTranslate.forEach(el => {
                el.textContent = el.getAttribute(`data-${currentLang}`);
            });
        });
    }
});