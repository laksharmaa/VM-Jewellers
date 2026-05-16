# VM Jewellers Website - Vite + React

A modern, organized React website for VM Jewellers built with **Vite**, **React**, and **Tailwind CSS**. This project demonstrates professional component organization, clean code structure, and maintained frontend animations.

## 🎯 Project Features

- ✅ **Modern Vite Setup** - Fast development experience with optimized build
- ✅ **Organized Component Architecture** - Structured components in logical folders
- ✅ **Separated Data Layer** - Constants extracted to dedicated data files
- ✅ **Tailwind CSS** - Built with utility-first CSS framework
- ✅ **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- ✅ **Smooth Animations** - All original animations preserved
- ✅ **EmailJS Integration** - Direct email notifications for enquiries
- ✅ **WhatsApp Integration** - One-click WhatsApp messaging

---

## 📂 Project Structure

```
vmjewellers/
├── public/
│   └── index.html          # Main HTML template (Vite entry point)
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx      # Navigation bar with mobile menu
│   │   │   └── Footer.jsx      # Footer with links
│   │   ├── Sections/
│   │   │   ├── Hero.jsx               # Landing hero section
│   │   │   ├── MarqueeStrip.jsx       # Animated marquee strip
│   │   │   ├── Categories.jsx        # Product categories grid
│   │   │   ├── BridalCollection.jsx  # Bridal collection showcase
│   │   │   ├── WholesaleForm.jsx     # Contact form with EmailJS
│   │   │   ├── About.jsx             # Company information
│   │   │   ├── Testimonials.jsx      # Customer reviews
│   │   │   └── Contact.jsx           # Contact information & map
│   │   └── Common/
│   │       └── WhatsAppFloat.jsx     # Floating WhatsApp button
│   ├── data/
│   │   └── constants.js        # All data (nav, categories, testimonials, etc)
│   ├── App.jsx                 # Root component (composes all sections)
│   ├── index.js                # Vite entry point
│   └── index.css               # Global styles, animations, Tailwind import
├── .gitignore
├── package.json
├── postcss.config.js           # PostCSS config for Tailwind
├── tailwind.config.js          # Tailwind configuration with gold theme
├── vite.config.js              # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# Opens http://localhost:3000 in browser

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📦 Dependencies

### Production
- **react** ^18.2.0 - UI library
- **react-dom** ^18.2.0 - React DOM rendering

### Development
- **vite** ^4.4.5 - Build tool & dev server
- **@vitejs/plugin-react** ^4.0.0 - React plugin for Vite
- **tailwindcss** ^3.3.2 - Utility-first CSS framework
- **postcss** ^8.4.24 - CSS transformation
- **autoprefixer** ^10.4.14 - Vendor prefix handling

---

## 🎨 Styling & Theme

### Tailwind Configuration
- **Gold Color Palette**: Custom gold colors (50-900) for brand consistency
- **Font Families**: 
  - `font-display`: Cormorant Garamond (serif) - Headlines
  - `font-body`: Jost (sans-serif) - Body text
- **Custom Utilities**: `.card-hover`, `.gold-line`, `.hero-bg`, etc.

### Global Styles (`index.css`)
- Fade-up animations with staggered delays
- Marquee scrolling animation
- WhatsApp button pulse animation
- Custom focus states for form inputs
- Scrollbar styling

---

## 🔧 Key Components

### Layout Components
- **Navbar** - Fixed navigation with mobile menu toggle
- **Footer** - Company info and navigation links

### Section Components
- **Hero** - Landing section with call-to-action
- **MarqueeStrip** - Animated product categories strip
- **Categories** - Grid of product categories with hover effects
- **BridalCollection** - Bridal jewellery showcase
- **WholesaleForm** - Contact form with EmailJS & WhatsApp integration
- **About** - Company story and features
- **Testimonials** - Customer reviews from Justdial
- **Contact** - Store info and embedded Google Map

### Common Components
- **WhatsAppFloat** - Floating WhatsApp contact button with pulse animation

---

## 📊 Data Structure

All static data is centralized in `src/data/constants.js`:

```javascript
export const NAV_LINKS          // Navigation menu items
export const CATEGORIES         // Product categories
export const BRIDAL             // Bridal collection items
export const TESTIMONIALS       // Customer reviews
export const FEATURES           // Company features/stats
export const EMAILJS_SERVICE_ID // EmailJS config
export const CATEGORY_OPTIONS   // Form dropdown options
export const CONTACT_INFO       // Store contact details
export const WHATSAPP_LINKS     // WhatsApp URLs
```

---

## 📧 EmailJS Integration

The wholesale form sends emails via **EmailJS**. To use:

1. Create account at [emailjs.com](https://www.emailjs.com)
2. Update credentials in `src/data/constants.js`:
   ```javascript
   export const EMAILJS_SERVICE_ID  = "your_service_id"
   export const EMAILJS_TEMPLATE_ID = "your_template_id"
   export const EMAILJS_PUBLIC_KEY  = "your_public_key"
   ```

---

## 🎬 Animations

All animations are preserved with smooth transitions:

- **Fade-up**: Elements fade in and slide up on page load
- **Delay Classes**: `.delay-1`, `.delay-2`, `.delay-3`, `.delay-4` for staggered animations
- **Card Hover**: `.card-hover` - Scale and shadow on hover
- **Marquee**: Continuous scrolling animation
- **WhatsApp Pulse**: Pulsing shadow effect on floating button

---

## 🔄 Component Communication

### State Management
- Local component state for form inputs and menu toggling
- Scroll listener for navbar styling
- No external state management (kept simple for maintainability)

### Data Flow
- Constants imported from `data/constants.js`
- Props passed down from parent components
- Event handlers for form submissions and navigation

---

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Development Tips

### Adding a New Section
1. Create component in `src/components/Sections/YourSection.jsx`
2. Import in `App.jsx`
3. Add to component composition order
4. Add data to `src/data/constants.js` if needed

### Styling
- Use Tailwind utility classes for styling
- Add custom animations to `src/index.css`
- Reference gold color: `bg-gold-500`, `text-gold-600`, etc.
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, etc.

### Performance
- Vite handles code splitting automatically
- Images are optimized by Vite
- CSS is purged of unused classes in production build

---

## 🛠️ Build & Deployment

### Build for Production
```bash
npm run build
```
Generates optimized build in `dist/` folder

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
- Connect your Git repository to Netlify
- Build command: `npm run build`
- Publish directory: `dist`

---

## 📄 License

This project is private and created for VM Jewellers.

---

## 👨‍💻 Development

Created with modern React development practices:
- Component-based architecture
- Separation of concerns
- DRY (Don't Repeat Yourself) principles
- Clean, readable code
- Responsive design patterns

---

## 📞 Support

For questions or issues with the website, contact VM Jewellers:
- **Phone**: 09606422413
- **WhatsApp**: +91 9606422413
- **Address**: Hanuman Mandir, Rui Mandi, Sadar Bazar, Delhi
