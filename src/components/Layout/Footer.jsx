import { NAV_LINKS } from "../../data/constants";
import { MapPinIcon, PhoneIcon, SparkleIcon } from "../Common/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0f0a03] text-gray-400 pt-14 pb-8 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SparkleIcon className="w-4 h-4 text-gold-400" />
              <span className="font-display text-2xl text-gold-400 font-semibold tracking-wide">VM Jewellers</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-500 max-w-[220px]">
              Sadar Bazar's trusted name in imitation jewellery since decades. Wholesale & retail both welcome.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold-500 font-medium mb-4">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-xs text-gray-400 hover:text-gold-400 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold-500 font-medium mb-4">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a href="tel:09606422413" className="flex items-center gap-2.5 text-xs text-gray-400 hover:text-gold-400 transition-colors">
                <PhoneIcon className="w-3.5 h-3.5 flex-shrink-0 text-gold-600" />
                09606422413
              </a>
              <div className="flex items-start gap-2.5 text-xs text-gray-400">
                <MapPinIcon className="w-3.5 h-3.5 flex-shrink-0 text-gold-600 mt-0.5" />
                <span>Hanuman Mandir, Rui Mandi,<br />Sadar Bazar, Delhi – 110006</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-gray-600">
          <p>© {new Date().getFullYear()} VM Jewellers. All rights reserved.</p>
          <p className="text-gold-700/60">Crafted with care · Sadar Bazar, Delhi</p>
        </div>
      </div>
    </footer>
  );
}
