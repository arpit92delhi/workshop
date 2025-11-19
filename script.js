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

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will contact you shortly with payment details.');
        bookingForm.reset();
    });
}

// Pricing Card "Book Now" buttons - scroll to booking form
const bookButtons = document.querySelectorAll('.btn-book');
bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bookingForm = document.getElementById('bookingForm');
        bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        bookingForm.querySelector('input[type="text"]').focus();
    });
});

// Mobile menu toggle (for future use if needed)
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Add mobile menu logic here if needed
    });
}

console.log('Varanasi Photo Walk - Website Loaded');
