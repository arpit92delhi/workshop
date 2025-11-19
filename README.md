# Varanasi Photo Walk - Landing Page

A beautiful, modern landing page for the Varanasi Photography Workshop led by Arpit Narain Saxena (January 10-11, 2026).

## Features

✨ **Modern Design**
- Dark elegant theme with golden accent colors
- Responsive design that works on all devices
- Smooth animations and transitions
- Professional gradient backgrounds

📱 **Mobile Responsive**
- Mobile hamburger menu
- Optimized for smartphones, tablets, and desktops
- Touch-friendly buttons and navigation

📋 **Complete Sections**
- Hero section with eye-catching banner
- Workshop overview & quick facts
- Detailed 2-day itinerary
- Photographer profile (Arpit Narain Saxena)
- What's included & excluded
- Accommodation options (single & shared occupancy)
- How to reach Varanasi
- Pricing & booking form
- Comprehensive FAQs
- Important policies
- Contact information

🔧 **Interactive Elements**
- Mobile navigation toggle
- FAQ accordion
- Booking form with validation
- Sticky booking card
- Scroll-to-top button
- Smooth scrolling
- Success message on form submission

## File Structure

```
arpit website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript interactivity
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling, gradients, animations, flexbox, grid
- **Vanilla JavaScript** - No frameworks required
- **Responsive Design** - Mobile-first approach

## Setup Instructions

### For Local Testing

1. **Download all files** to a single folder
2. **Open `index.html`** in any web browser
3. No server or build tools required!

### For Cloudflare Hosting

1. Create a new folder in your Cloudflare Pages project
2. Upload all three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Configure the build settings in Cloudflare (if needed)
4. Deploy and your site is live!

**Note:** This is a pure HTML/CSS/JavaScript site with no build dependencies, making it perfect for Cloudflare's free hosting.

## Customization Guide

### Update Contact Information

Open `index.html` and find the Contact section (~line 450) to update:
- Email address
- Phone number
- WhatsApp link
- Instagram handle

### Modify Pricing

Update prices in:
1. **Booking Card** (~line 128): `<span class="price">₹18,000</span>`
2. **Accommodation Cards** (~line 420): Adjust prices for single/shared
3. **Pricing Table** (~line 500): Update the table rows

### Change Colors

Open `styles.css` and modify the color variables (~line 9-17):
```css
:root {
    --primary-color: #d4745f;      /* Main coral/orange */
    --secondary-color: #f5a962;    /* Golden/light orange */
    --accent-gold: #c9a961;        /* Accent gold */
    /* ... other colors ... */
}
```

### Add Photography Images

Replace the photo placeholder (~line 320) with actual images:
```html
<img src="path/to/arpit-photo.jpg" alt="Arpit Narain Saxena">
```

### Update Photographer Bio

Find the photographer section (~line 305) and update:
- Bio text
- Portfolio links
- Specializations

### Modify Itinerary

Update Day 1 and Day 2 details in the timeline section (~line 205).

## Features in Detail

### Booking Form
- Collects: Name, Email, Phone, Accommodation type, Photography experience
- Validation for email and phone
- Shows success message on submission
- Form data logged to browser console (implement backend integration as needed)

### Mobile Menu
- Hamburger toggle on small screens
- Closes automatically when a link is clicked
- Animated icon transformation

### Accessibility
- Semantic HTML structure
- ARIA-friendly form labels
- Keyboard navigation support
- Color contrast optimized

### Performance
- No external dependencies
- Lightweight CSS with no framework overhead
- Minimal JavaScript (vanilla)
- Fast loading on all connections
- Optimized for Cloudflare's fast delivery

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Form Integration (Future Enhancement)

Currently, the form displays a success message and logs data to the browser console. To send emails/store data, you can:

1. **Use Formspree** (easiest): Add form action
2. **Use Netlify Forms**: Simple integration
3. **Build custom backend**: Node.js, Python, etc.

## Tips for Better Results

1. **Add real images** of Varanasi and Arpit's photography
2. **Update all placeholder links** (WhatsApp, Instagram, Behance)
3. **Consider adding testimonials** from previous participants
4. **Add a gallery section** showcasing past workshop photos
5. **Set up email notifications** for form submissions
6. **Add a simple backend** to handle payments and bookings

## Support & Help

- Review the inline CSS comments for styling details
- Check the inline JavaScript comments for function explanations
- All section IDs are clearly marked for easy navigation
- Mobile breakpoints: 768px (tablet) and 480px (mobile)

## License

This landing page is created for the Varanasi Photo Walk workshop. Feel free to modify and deploy.

---

**Built with ❤️ for Arpit Narain Saxena's Photography Workshop**

Hosted proudly on Cloudflare Pages 🚀
