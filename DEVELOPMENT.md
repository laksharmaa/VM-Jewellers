# VM Jewellers Development Guide

## Quick Start

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

---

## Project Architecture

### Folder Organization

```
src/
├── components/          # All React components
│   ├── Layout/         # Page structure (Navbar, Footer)
│   ├── Sections/       # Page sections (Hero, About, etc)
│   └── Common/         # Shared components (WhatsAppFloat)
├── data/               # Constants and static data
├── App.jsx             # Root component
├── index.css           # Global styles & animations
└── index.js            # Entry point
```

### Component Structure

Each component:
- Is self-contained in its own file
- Has JSDoc comments explaining its purpose
- Imports only what it needs
- Is reusable and maintainable

Example:
```jsx
/**
 * Example Section Component
 * Description of what this component does
 */
export default function ExampleSection() {
  return (
    <section id="example" className="py-20">
      {/* Component content */}
    </section>
  );
}
```

---

## Common Tasks

### Adding a New Product Category

1. Open `src/data/constants.js`
2. Add to `CATEGORIES` array:
```javascript
{
  name: "New Category",
  count: "50+ designs",
  emoji: "💎",
  img: "https://images.unsplash.com/..."
}
```
3. The grid will automatically update!

### Changing the Gold Theme Color

1. Open `tailwind.config.js`
2. Modify the `gold` color palette
3. Tailwind regenerates all `.gold-*` utilities

### Adding an Animation

1. Add keyframes to `src/index.css`
2. Create utility class
3. Apply to component with className

Example:
```css
@keyframes customAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.custom-fade {
  animation: customAnimation 0.5s ease;
}
```

### Adding a New Section

1. Create `src/components/Sections/NewSection.jsx`
2. Import components and data you need
3. Export default function component
4. Import in `App.jsx` and add to layout
5. Add to `NAV_LINKS` if it needs navigation

---

## Styling Best Practices

### Using Tailwind

```jsx
// Good ✅
<div className="bg-gold-500 text-white px-4 py-2 rounded-lg">

// Avoid ❌
<div style={{ backgroundColor: '#C9952A', color: 'white' }}>
```

### Responsive Design

```jsx
// Mobile-first approach
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
```

### Custom Styles

Only add to `index.css` when Tailwind can't handle it:
```css
.custom-gradient {
  background: linear-gradient(135deg, #fff 0%, #fefbf0 100%);
}
```

---

## Form Integration

### EmailJS Setup

1. Go to [emailjs.com](https://www.emailjs.com)
2. Create account and service
3. Create email template
4. Copy credentials
5. Update `src/data/constants.js`

### WhatsApp Link Format

- Phone: `+91 XXXXXXXXXX` (with country code)
- Format: `https://wa.me/XXXXXXXXXXXX?text=encoded_message`

---

## Performance Tips

### Image Optimization

Use Unsplash/Pixabay with URL parameters:
```
https://images.unsplash.com/photo-id?w=400&h=300&fit=crop
```

### Code Splitting

Vite automatically handles this - no configuration needed!

### Build Size

Check bundle size:
```bash
npm run build
# Check dist/ folder size
```

---

## Debugging

### Development Server

```bash
npm run dev
```
- Automatic reload on file changes
- Source maps for debugging
- Error overlay in browser

### Console Errors

- Check browser console for React errors
- Check terminal for Vite errors
- ESLint warnings may appear in console

### Form Submission

The wholesale form:
1. Collects input
2. Sends via EmailJS
3. Opens WhatsApp automatically
4. WhatsApp acts as backup if email fails

---

## Deployment Checklist

Before deploying:
- [ ] Update EmailJS credentials
- [ ] Test all forms
- [ ] Check responsive design on mobile
- [ ] Verify animations smooth
- [ ] Update company info if needed
- [ ] Test WhatsApp link
- [ ] Test phone call link
- [ ] Check all external links work

### Deploy Command

```bash
npm run build
# Deploy the dist/ folder to your hosting
```

---

## File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.jsx`)
- **Files**: PascalCase for components, lowercase for config
- **Classes**: kebab-case with Tailwind (e.g., `bg-gold-500`)
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `NAV_LINKS`)

---

## Useful Resources

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs)

---

## Troubleshooting

### Port 3000 already in use

```bash
# Kill process on port 3000 or use different port
npm run dev -- --port 3001
```

### Tailwind classes not showing

- Make sure files are in `content` array in `tailwind.config.js`
- Rebuild CSS if needed
- Check for typos in class names

### Form not sending

- Check EmailJS credentials in `constants.js`
- Verify email template exists
- Check browser console for errors
- WhatsApp should still open as fallback

### Animations not smooth

- Check browser performance (DevTools > Performance)
- Reduce animation complexity
- Use `transform` and `opacity` for best performance

---

## Next Steps

1. Customize the gold color theme to your brand
2. Add more product categories
3. Update testimonials with real reviews
4. Set up EmailJS integration
5. Deploy to production

Happy coding! 🎨✨
