import { FEATURES } from "../../data/constants";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function About() {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div ref={imgRef} className="reveal relative">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=580&h=480&fit=crop"
              alt="VM Jewellers store"
              className="rounded-2xl w-full h-80 object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold-500 rounded-2xl p-6 shadow-xl text-white text-center hidden md:block">
              <div className="font-display text-4xl font-semibold">4.6</div>
              <div className="text-xs tracking-widest uppercase mt-1 opacity-90">Justdial Stars</div>
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef} className="reveal">
            <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">Who We Are</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-5">
              Delhi's Trusted
              <br />
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
                <div key={f.title} className="bg-gold-50 border border-gold-100 rounded-xl p-4">
                  <div className="text-2xl mb-2">{f.icon}</div>
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