import { FEATURES } from "../../data/constants";
import { FeatureIcon } from "../Common/Icons";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function About() {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal();

  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div ref={imgRef} className="reveal relative">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=580&h=480&fit=crop"
              alt="VM Jewellers store"
              className="rounded-3xl w-full h-80 object-cover shadow-2xl"
            />
            {/* Decorative border frame */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold-200 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 bg-gold-500 rounded-2xl p-6 shadow-2xl text-white text-center hidden md:block">
              <div className="font-display text-4xl font-semibold">4.6</div>
              <div className="text-[10px] tracking-widest uppercase mt-1 opacity-90">Justdial Stars</div>
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef} className="reveal">
            <p className="text-gold-500 text-[11px] tracking-[0.22em] uppercase font-medium mb-3">Who We Are</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-5">
              Delhi's Trusted<br />
              Jewellery Name
            </h2>
            <div className="gold-line w-24 mb-6" />
            <p className="text-gray-500 leading-relaxed mb-4 text-base">
              VM Jewellers is one of Sadar Bazar's leading names in imitation jewellery — serving retailers, boutiques, and individual customers from
              across India with equal care and quality.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-base">
              Located at Hanuman Mandir, Rui Mandi — the heart of Delhi's wholesale market — we offer an unmatched selection of bangles, necklaces,
              bridal sets, earrings, and more. Both walk-in and bulk orders are warmly welcome.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="group bg-gold-50 hover:bg-gold-100 border border-gold-100 hover:border-gold-200 rounded-2xl p-4 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-gold-100 group-hover:bg-gold-200 flex items-center justify-center mb-3 transition-colors">
                    <FeatureIcon name={f.icon} className="w-5 h-5 text-gold-600" />
                  </div>
                  <div className="font-semibold text-sm text-gray-800 mb-0.5">{f.title}</div>
                  <div className="text-xs text-gray-400">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
