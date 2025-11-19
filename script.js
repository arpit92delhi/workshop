// Thumbnail Gallery Carousel
const thumbnailSlides = document.querySelectorAll('.thumbnail-slide');
const thumbnailContainer = document.querySelector('.thumbnails-container');
const prevCarouselBtn = document.querySelector('.carousel-prev');
const nextCarouselBtn = document.querySelector('.carousel-next');

if (prevCarouselBtn && nextCarouselBtn) {
    prevCarouselBtn.addEventListener('click', () => {
        thumbnailContainer.scrollLeft -= 150;
    });

    nextCarouselBtn.addEventListener('click', () => {
        thumbnailContainer.scrollLeft += 150;
    });
}

// Click to select thumbnail
thumbnailSlides.forEach(slide => {
    slide.addEventListener('click', () => {
        thumbnailSlides.forEach(s => s.classList.remove('active'));
        slide.classList.add('active');
        slide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
