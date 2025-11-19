# Customization Guide - Update Your Details

This guide shows you exactly where to find and update all the key information on your landing page.

---

## 1. Contact Information

### Find these lines in `index.html` (around line 845-860):

**Current:**
```html
<a href="mailto:info@varanasiphotowalks.com">info@varanasiphotowalks.com</a>
<a href="https://wa.me/919876543210" target="_blank">+91 98765 43210</a>
<a href="https://instagram.com/arpit92saxdc70" target="_blank">@arpit92saxdc70</a>
```

**To Update:**
- Replace `info@varanasiphotowalks.com` with your email
- Replace `919876543210` with your WhatsApp number (include country code)
- Replace `arpit92saxdc70` with your Instagram handle

---

## 2. Pricing

### Single Occupancy Price
- **Line 129** in `index.html` - Booking card: `<span class="price">₹18,000</span>`
- **Line 420** in `index.html` - Accommodation card: `<p class="price">₹20,000</p>`
- **Line 508** in `index.html` - Pricing table: `<td>₹20,000</td>`

### Shared Occupancy Price
- **Line 434** in `index.html` - Accommodation card: `<p class="price">₹18,000</p>`
- **Line 509** in `index.html` - Pricing table: `<td>₹18,000</td>`

**How to update:**
1. Find and replace all instances of `₹20,000` with your single price
2. Find and replace all instances of `₹18,000` with your shared price

---

## 3. Photographer Information

### In `index.html` around line 290-320:

**Current:**
```html
<h2>Your Guide: Arpit Narain Saxena</h2>
<p>Arpit Narain Saxena is a talented visual artist and photographer...</p>
<p><strong>Portfolio:</strong> <a href="https://www.behance.net/arpit92saxdc70" target="_blank">View on Behance →</a></p>
```

**To Update:**
- Change the heading and all references to photographer name
- Update the biography text
- Update portfolio links
- Change specializations list

---

## 4. Dates and Duration

### In `index.html`:

**Current:**
- Line 37: `<title>Varanasi Photo Walk - Jan 10-11, 2026</title>`
- Line 84: `<p class="hero-subtitle">A 2-Day Photography Workshop | January 10-11, 2026</p>`
- Line 156: `<p>2 Days / 2 Nights</p>`
- Line 164: `<p>January 10-11, 2026</p>`

**Important Notes:**
- Keep the format consistent
- Update in all places where dates appear
- Update hero section, quick info, FAQs

---

## 5. Location and Venue

### In `index.html` around line 160-163:

**Current:**
```html
<div class="info-card">
    <h3>📍 Location</h3>
    <p>Varanasi, Uttar Pradesh</p>
</div>
```

**If changing location:**
- Update location text
- Update all mentions in itinerary
- Update transportation section (How to Reach)

---

## 6. Accommodation Details

### Room Features - In `index.html` around line 426-432:

**Current Single Occupancy:**
```html
<li>Private room with en-suite bathroom</li>
<li>Window view with Ganges proximity</li>
<li>Air-conditioned room</li>
<li>Daily housekeeping</li>
<li>24/7 availability</li>
```

**Current Shared Occupancy:**
```html
<li>Shared room with en-suite bathroom</li>
<li>Window view with Ganges proximity</li>
<li>Air-conditioned room</li>
<li>Daily housekeeping</li>
<li>Safe & secure environment</li>
```

---

## 7. Inclusions & Exclusions

### Inclusions - Line 384-396:

```html
<li>2 nights accommodation with choice of single or shared occupancy</li>
<li>All meals (breakfast, lunch, dinner) - vegetarian & non-vegetarian options</li>
<li>Expert photography guidance from Arpit Narain Saxena</li>
<!-- ... more items ... -->
```

### Exclusions - Line 405-417:

```html
<li>Travel to/from Varanasi (flight or train)</li>
<li>Personal photography equipment (DSLR, mirrorless, etc.)</li>
<!-- ... more items ... -->
```

---

## 8. Itinerary Details

### Day 1 - Line 202-213:

```html
<div class="timeline-marker">
    <span>Day 1</span>
</div>
<div class="timeline-content">
    <h3>Arrival & Golden Hour at Ganges Ghats</h3>
    <p><strong>Morning:</strong> Participants arrive...</p>
    <!-- Update descriptions here -->
</div>
```

### Day 2 - Line 215-229:

Similar structure - update time and activities.

---

## 9. How to Reach Section

### In `index.html` around line 475-509:

**By Air:**
```html
<h3>✈️ By Air</h3>
<p><strong>Lal Bahadur Shastri International Airport</strong></p>
<p>Varanasi's main airport is well-connected...</p>
```

**By Train, Road, Coordination** - similar structure.

---

## 10. Cancellation Policy

### In `index.html` around line 620-626:

**Current:**
```html
<li><strong>Before Dec 15:</strong> 90% refund</li>
<li><strong>Dec 15 - Dec 31:</strong> 75% refund</li>
<li><strong>Jan 1 - Jan 9:</strong> 50% refund</li>
<li><strong>Jan 10 onwards:</strong> No refund</li>
```

Also update in **FAQs section** around line 575-580.

---

## 11. Form Field Labels

### In `index.html` around line 521-570:

Labels are user-friendly as-is, but you can customize:
- "Photography Experience Level" options
- Form field placeholders
- Additional questions

---

## 12. Social Media Links

### In `index.html`:

**Footer section (Line 875-880):**
```html
<a href="https://instagram.com" target="_blank">Instagram</a>
<a href="https://facebook.com" target="_blank">Facebook</a>
<a href="https://behance.net/arpit92saxdc70" target="_blank">Behance</a>
```

Update all social media URLs.

---

## 13. Color Scheme (Advanced)

### In `styles.css` around line 9-17:

```css
:root {
    --primary-color: #d4745f;      /* Main coral/orange */
    --primary-dark: #a85039;
    --primary-light: #e8a99e;
    --secondary-color: #f5a962;    /* Golden/light orange */
    --accent-gold: #c9a961;        /* Accent gold */
    --dark-bg: #1a1a1a;
    --light-text: #f0f0f0;
    --medium-text: #b0b0b0;
    --border-color: #333;
    --success-color: #4caf50;
}
```

Hex color codes:
- Warm orange: `#f5a962`
- Deep red: `#d4745f`
- Gold: `#c9a961`
- Dark: `#1a1a1a`

---

## 14. Adding Images

### Hero Background
Currently uses gradient. To add image:

In `styles.css` (~line 258):
```css
background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%),
            url('your-image-path.jpg');
```

### Photographer Photo
In `index.html` (~line 318):
```html
<div class="photo-placeholder">
    <!-- Replace with: -->
    <img src="path/to/arpit-photo.jpg" alt="Arpit Narain Saxena" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
</div>
```

---

## 15. Text Content Updates

### Mission Statement (Overview section)
**Line 109-111** - Update the workshop description:
```html
<p>Experience Varanasi, one of the world's most photogenic cities...</p>
```

### About Photographer Bio
**Line 324-331** - Full biography section

---

## Quick Find-Replace Commands

If using a code editor like VS Code:

1. **Replace all emails:**
   - Find: `info@varanasiphotowalks.com`
   - Replace with: your email

2. **Replace all phone numbers:**
   - Find: `919876543210`
   - Replace with: your number

3. **Replace photographer name:**
   - Find: `Arpit Narain Saxena`
   - Replace with: new name

---

## Testing Your Changes

After updating:

1. **Save the file** (Ctrl+S or Cmd+S)
2. **Refresh browser** (F5 or Cmd+R)
3. **Clear cache** if changes don't show (Ctrl+Shift+Delete)
4. **Test on mobile** - resize browser window
5. **Check all links** - make sure they work

---

## Before Going Live

- [ ] Updated all contact info
- [ ] Verified pricing is correct
- [ ] Checked all dates
- [ ] Tested form submission
- [ ] Updated social media links
- [ ] Added/updated images
- [ ] Tested on mobile
- [ ] Spell-checked all text
- [ ] Tested all external links

---

## Need Help?

- **HTML Structure**: Look for `<section id="section-name">`
- **Styling**: Check `styles.css` with matching class names
- **Functionality**: Check `script.js` for JavaScript
- **Colors**: Update in CSS variables at top of `styles.css`

---

**Your customization is ready! Deploy with confidence! 🚀**
