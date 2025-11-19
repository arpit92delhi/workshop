// Thumbnail Gallery - Click to Update Main Image
const thumbnails = document.querySelectorAll('.thumbnail');
const mainGalleryImage = document.getElementById('mainGalleryImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Get the image src from data attribute
        const imageSrc = thumbnail.getAttribute('data-src');

        // Update main gallery image
        mainGalleryImage.src = imageSrc;

        // Update active state
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');

        // Smooth scroll thumbnail into view
        thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
});

// Itinerary Collapsible
const dayToggles = document.querySelectorAll('.day-toggle');

dayToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const day = toggle.parentElement;
        day.classList.toggle('active');
    });
});

// FAQ Collapsible
document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const faqItem = this.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('active');
            }
        });
    });
});

// Pricing "Book Now" button - open Google Form in new tab
const bookNowBtn = document.getElementById('bookNowBtn');
const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfyRGaZweRPNQWHU3jAglRaaprRmqM7UTYkhUeCuFWxApG-ag/viewform';

if (bookNowBtn) {
    bookNowBtn.addEventListener('click', () => {
        window.open(googleFormUrl, '_blank');
    });
}

// Mobile menu toggle (for future use if needed)
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Add mobile menu logic here if needed
    });
}

console.log('Varanasi Photo Walk - Website Loaded');
