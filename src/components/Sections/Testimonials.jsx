import { TESTIMONIALS, CONTACT_INFO } from "../../data/constants";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Testimonials() {
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 bg-gold-50">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">What Customers Say</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Trusted by Retailers
            <br />
            Across India
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </div>

        <div ref={cardsRef} className="reveal-stagger grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gold-100 card-hover">
              <div className="flex mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-gold-400 text-base">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 font-semibold text-sm">
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
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 text-sm font-medium border border-gold-300 px-6 py-2.5 rounded-full hover:bg-gold-50 transition-colors"
          >
            View All Reviews on Justdial →
          </a>
        </div>
      </div>
    </section>
  );
}