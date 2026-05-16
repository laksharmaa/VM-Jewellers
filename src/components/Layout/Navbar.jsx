import { useState } from "react";
import { NAV_LINKS } from "../../data/constants";

/**
 * Navbar Component
 * Responsive navigation bar with mobile menu toggle
 */
export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-gold-100" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div>
          <span className="font-display text-2xl font-semibold text-gold-600 tracking-wide">VM Jewellers</span>
          <p className="text-[10px] tracking-[0.15em] uppercase text-gray-400 leading-none mt-0.5">Sadar Bazar · Delhi</p>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 hover:text-gold-600 transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:09606422413"
            className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            📞 Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gold-100 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-gold-600"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:09606422413" className="bg-gold-500 text-white text-sm font-medium px-5 py-2.5 rounded-full text-center">
            📞 Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
