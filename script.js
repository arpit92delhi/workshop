// Gallery carousel
const gallerySlides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');
let currentSlide = 0;

function showSlide(index) {
    gallerySlides.forEach(slide => slide.classList.remove('active'));
    gallerySlides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % gallerySlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-rotate gallery every 8.5 seconds
setInterval(nextSlide, 8500);

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
