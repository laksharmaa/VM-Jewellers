import { BRIDAL } from "../../data/constants";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function BridalCollection() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="bridal" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gold-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">For Your Special Day</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">Bridal Collection</h2>
          <div className="gold-line w-24 mx-auto mb-5" />
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Stunning imitation bridal jewellery that looks like the real thing — at a fraction of the price.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid md:grid-cols-3 gap-6">
          {BRIDAL.map((item) => (
            <div key={item.name} className="card-hover group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gold-100 shadow-sm">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gold-500 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-medium">
                  Bridal
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
                <a
                  href="https://wa.me/919606422413"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-600 text-sm font-medium hover:text-gold-700 flex items-center gap-1"
                >
                  Enquire on WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}