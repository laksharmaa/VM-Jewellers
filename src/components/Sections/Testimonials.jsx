import { TESTIMONIALS, CONTACT_INFO } from "../../data/constants";
import { StarIcon, ArrowRightIcon } from "../Common/Icons";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Testimonials() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 px-5 sm:px-8 bg-[#faf7f0]">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-gold-500 text-[11px] tracking-[0.22em] uppercase font-medium mb-3">What Customers Say</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Trusted by Retailers<br />
            Across India
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </div>

        <div ref={cardsRef} className="reveal-stagger grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gold-100 card-hover flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className={`w-4 h-4 ${i < t.stars ? "text-gold-400" : "text-gray-200"}`} filled={i < t.stars} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-200 to-gold-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={CONTACT_INFO.justdialURL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 text-sm font-medium border border-gold-300 px-6 py-3 rounded-full hover:bg-gold-50 transition-all duration-200 group"
          >
            View All Reviews on Justdial
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
