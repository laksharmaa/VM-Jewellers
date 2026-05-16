import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/constants";
import { PhoneIcon } from "../Common/Icons";

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,149,42,0.15)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-display text-[1.6rem] font-semibold text-gold-600 tracking-wide group-hover:text-gold-700 transition-colors">
            VM Jewellers
          </span>
          <span className="text-[9px] tracking-[0.22em] uppercase text-gold-400 font-medium mt-0.5">
            Sadar Bazar · Delhi
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-[13px] text-gray-500 hover:text-gold-600 transition-colors tracking-wide font-medium group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="tel:09606422413"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-gold-200"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gold-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-white/98 border-t border-gold-100 px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-gold-600 font-medium py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:09606422413"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white text-sm font-medium px-5 py-3 rounded-full mt-1"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
