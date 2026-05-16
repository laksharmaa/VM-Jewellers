import { NAV_LINKS } from "../../data/constants";

/**
 * Footer Component
 * Page footer with links and copyright info
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-display text-xl text-gold-400 font-semibold">VM Jewellers</span>
          <p className="text-xs mt-1">Hanuman Mandir, Rui Mandi, Sadar Bazar, Delhi</p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-gold-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-xs">© 2025 VM Jewellers. All rights reserved.</p>
      </div>
    </footer>
  );
}
