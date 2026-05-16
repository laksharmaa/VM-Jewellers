# VM Jewellers Project - Quick Reference Guide

## 🚀 Quick Commands

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm run preview    # Preview production build
npm install        # Install dependencies
```

---

## 📁 File Structure at a Glance

```
vmjewellers/
├── 📄 index.html              # Main HTML template
├── 📄 vite.config.js          # Vite build configuration
├── 📄 tailwind.config.js      # Tailwind CSS theme config
├── 📄 postcss.config.js       # CSS processing
├── 📄 package.json            # Dependencies & scripts
├── 📄 README.md               # Project documentation
├── 📄 DEVELOPMENT.md          # Development guide
│
└── src/
    ├── 📄 index.js            # Vite entry point
    ├── 📄 index.css           # Global styles & animations
    ├── 📄 App.jsx             # Root component (page layout)
    │
    ├── 📁 components/         # All React components
    │   ├── 📁 Layout/
    │   │   ├── Navbar.jsx     # Fixed navigation bar
    │   │   └── Footer.jsx     # Page footer
    │   │
    │   ├── 📁 Sections/       # Page sections (in order)
    │   │   ├── Hero.jsx              # Landing section
    │   │   ├── MarqueeStrip.jsx      # Animated scrolling strip
    │   │   ├── Categories.jsx        # Product categories
    │   │   ├── BridalCollection.jsx  # Bridal showcase
    │   │   ├── WholesaleForm.jsx     # Contact form
    │   │   ├── About.jsx             # Company info
    │   │   ├── Testimonials.jsx      # Customer reviews
    │   │   └── Contact.jsx           # Contact info
    │   │
    │   └── 📁 Common/
    │       └── WhatsAppFloat.jsx     # Floating button
    │
    └── 📁 data/
        └── constants.js       # All static data
```

---

## 🎨 Color Palette

| Color | Class | Use |
|-------|-------|-----|
| Gold 50 | `bg-gold-50` | Light backgrounds |
| Gold 100 | `bg-gold-100` | Very light |
| Gold 500 | `bg-gold-500` | Primary buttons |
| Gold 600 | `bg-gold-600` | Button hover |
| Gold 700 | `bg-gold-700` | Dark accents |

Usage: `bg-gold-500`, `text-gold-600`, `border-gold-300`

---

## 🔤 Font Classes

- **Headlines**: `font-display` (Cormorant Garamond, serif)
- **Body**: `font-body` (Jost, sans-serif)

---

## ✨ Animation Classes

| Class | Effect | Duration |
|-------|--------|----------|
| `.fade-up` | Fade + slide up | 0.7s |
| `.delay-1` | +0.15s delay | - |
| `.delay-2` | +0.3s delay | - |
| `.delay-3` | +0.45s delay | - |
| `.delay-4` | +0.6s delay | - |
| `.card-hover` | Scale & shadow | 0.25s |
| `.marquee-track` | Scroll animation | 22s loop |
| `.wa-float` | Pulse animation | 2.4s loop |

### Usage
```jsx
<div className="fade-up delay-2">Content fades in with 0.3s delay</div>
```

---

## 📊 Data Constants Location

All data is in `src/data/constants.js`:

```javascript
NAV_LINKS           // Navigation items
CATEGORIES          // Product categories
BRIDAL              // Bridal collection items
TESTIMONIALS        // Customer reviews
FEATURES            // Feature boxes
CATEGORY_OPTIONS    // Form dropdown options
CONTACT_INFO        // Store details
WHATSAPP_LINKS      // WhatsApp URLs
EMAILJS_*           // Email service config
```

---

## 🔧 Component Props & State

### Navbar
- Props: `scrolled` (boolean) - styling based on scroll position
- State: `menuOpen` - mobile menu toggle

### WholesaleForm
- State: `form` (object) - input values
- State: `status` - "idle", "sending", "success", "error"

---

## 🎯 Common Tasks

### Change Company Info
→ Edit `src/data/constants.js` > `CONTACT_INFO`

### Add Product Category
→ Add item to `CATEGORIES` array in `constants.js`

### Update Testimonial
→ Edit `TESTIMONIALS` array in `constants.js`

### Change Colors
→ Modify `tailwind.config.js` > `colors.gold`

### Add Animation
→ Add `@keyframes` to `src/index.css`, create `.class-name`

### Modify Form Fields
→ Update form in `src/components/Sections/WholesaleForm.jsx`

---

## 🔗 Important Links

- WhatsApp: `https://wa.me/919606422413`
- Phone: `tel:09606422413`
- Justdial: Link in `CONTACT_INFO` object
- Google Maps: Embedded in Contact section

---

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (640px+), `md:` (768px+)
- **Desktop**: `lg:` (1024px+), `xl:` (1280px+)

### Example
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
</div>
```

---

## 🛠️ Tailwind Utilities Cheat Sheet

```jsx
// Layout
className="flex items-center justify-between gap-4"

// Colors
className="bg-gold-500 text-white border-gold-300"

// Spacing
className="px-4 py-2 my-6"  // padding/margin

// Sizing
className="w-full h-12 max-w-md"

// Typography
className="text-lg font-semibold tracking-wide"

// Rounded
className="rounded-lg rounded-full rounded-2xl"

// Transitions
className="transition-colors duration-300 hover:bg-gold-600"

// Absolute/Fixed
className="absolute top-0 right-0 fixed bottom-6 right-6"

// Display
className="hidden md:block flex items-center"
```

---

## 🧪 Testing Components

```jsx
// In a component, add console for debugging
useEffect(() => {
  console.log('Component mounted', form);
}, [form]);

// Check browser DevTools:
// - Console for errors
// - Network for API calls
// - Performance for animations
```

---

## 📦 Installation Recap

```bash
# Start fresh
npm install

# Development
npm run dev

# Production
npm run build
npm run preview
```

---

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Run `npm run dev -- --port 3001` |
| Styles not loading | Clear browser cache, rebuild CSS |
| Form not working | Check EmailJS config in constants.js |
| Mobile menu stuck | Check menuOpen state logic in Navbar |
| Animations jerky | Use `transform` + `opacity` only |

---

## 💡 Pro Tips

1. **Use React DevTools** - Install browser extension to inspect components
2. **Check Network Tab** - See API calls and asset sizes
3. **Inspect Elements** - Right-click > Inspect to debug styles
4. **Vite Fast Refresh** - Edit files, browser updates instantly
5. **Tailwind IntelliSense** - Install VS Code extension for autocomplete

---

## 📞 Contact Info (For Reference)

- **Phone**: 09606422413
- **WhatsApp**: +91 9606422413
- **Address**: Hanuman Mandir, Rui Mandi, Sadar Bazar, Delhi
- **Justdial**: 4.6★ with 33+ reviews

---

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev)
- [React Hooks Guide](https://react.dev/reference/react)
- [Tailwind CSS Classes](https://tailwindcss.com/docs/utility-first)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

---

**Last Updated**: May 2026  
**Project Version**: 1.0.0  
**Built with**: Vite + React + Tailwind CSS
