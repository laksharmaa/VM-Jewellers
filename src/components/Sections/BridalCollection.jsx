import { BRIDAL } from "../../data/constants";
import { WhatsAppIcon, ArrowRightIcon } from "../Common/Icons";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function BridalCollection() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="bridal" className="py-24 px-5 sm:px-8 bg-gradient-to-br from-[#fdf7e8] to-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-gold-500 text-[11px] tracking-[0.22em] uppercase font-medium mb-3">For Your Special Day</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">Bridal Collection</h2>
          <div className="gold-line w-24 mx-auto mb-5" />
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Stunning imitation bridal jewellery that looks like the real thing — at a fraction of the price.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid md:grid-cols-3 gap-7">
          {BRIDAL.map((item) => (
            <div key={item.name} className="card-hover group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gold-100/80 shadow-sm">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-gold-200 text-gold-700 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold">
                  Bridal
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">{item.desc}</p>
                <a
                  href="https://wa.me/919606422413"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gold-600 text-sm font-medium hover:text-gold-700 group/link"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  Enquire on WhatsApp
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
