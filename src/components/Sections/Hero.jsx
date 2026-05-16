import { WhatsAppIcon, SparkleIcon, ArrowRightIcon } from "../Common/Icons";

export default function Hero() {
  return (
    <section className="hero-bg pt-28 pb-20 px-5 sm:px-8 overflow-hidden relative" id="home">
      {/* Subtle decorative grain overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left */}
        <div>
          <div className="fade-up inline-flex items-center gap-2 border border-gold-200 bg-gold-50 text-gold-700 text-[11px] font-medium tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-7">
            <SparkleIcon className="w-3 h-3" />
            Sadar Bazar's Trusted Wholesaler
          </div>

          <h1 className="fade-up delay-1 font-display text-5xl sm:text-6xl leading-[1.05] font-semibold text-gray-900 mb-6">
            Imitation<br />
            <span className="text-gold-500 italic">Jewellery</span>
            <br />
            Wholesale
          </h1>

          <p className="fade-up delay-2 text-gray-500 text-base leading-relaxed max-w-md mb-9">
            Bangles, necklaces, bridal sets & more — direct from Delhi's biggest wholesale market. Trusted by retailers across India.
          </p>

          <div className="fade-up delay-3 flex flex-wrap gap-3">
            <a
              href="#wholesale"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm hover:shadow-lg hover:shadow-gold-200 hover:-translate-y-0.5"
            >
              Get Bulk Quote
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919606422413"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold-300 text-gold-700 hover:bg-gold-50 font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>

          {/* Stats row */}
          <div className="fade-up delay-4 flex gap-8 mt-12 pt-8 border-t border-gold-200/70">
            {[
              ["4.6★", "Justdial Rating"],
              ["33+", "Verified Reviews"],
              ["500+", "Designs"],
              ["PAN India", "Delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-gold-600">{n}</div>
                <div className="text-[11px] text-gray-400 mt-0.5 tracking-wide">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image collage */}
        <div className="relative h-[440px] hidden md:block">
          <img
            src="https://images.pexels.com/photos/7679657/pexels-photo-7679657.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Jewellery showcase"
            className="absolute top-0 right-0 w-60 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=280&h=300&fit=crop"
            alt="Bangles collection"
            className="absolute bottom-0 left-0 w-52 h-56 object-cover rounded-3xl shadow-2xl border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=240&h=220&fit=crop"
            alt="Earrings collection"
            className="absolute bottom-10 right-44 w-44 h-44 object-cover rounded-3xl shadow-xl border-4 border-white"
          />
          {/* Floating rating badge */}
          <div className="absolute top-4 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-4 py-3 border border-gold-100">
            <p className="text-[10px] text-gray-400 tracking-widest uppercase">Justdial Rating</p>
            <p className="font-display text-xl font-semibold text-gold-500 mt-0.5">4.6 ★★★★★</p>
          </div>
          {/* Floating badge bottom */}
          <div className="absolute bottom-28 right-2 bg-gold-500 text-white rounded-2xl shadow-lg px-3.5 py-2.5 text-center">
            <p className="font-display text-2xl font-bold leading-none">500+</p>
            <p className="text-[10px] tracking-widest uppercase opacity-90 mt-1">Designs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
