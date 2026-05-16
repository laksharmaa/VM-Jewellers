/**
 * Hero Section Component
 * Landing section with call-to-action and image collage
 */
export default function Hero() {
  return (
    <section className="hero-bg pt-28 pb-20 px-4 sm:px-6 overflow-hidden" id="home">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="fade-up inline-flex items-center gap-2 bg-gold-100 text-gold-700 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ✦ Sadar Bazar's Trusted Wholesaler
          </div>
          <h1 className="fade-up delay-1 font-display text-5xl sm:text-6xl leading-[1.05] font-semibold text-gray-900 mb-6">
            Imitation<br />
            <span className="text-gold-500 italic">Jewellery</span>
            <br />
            Wholesale
          </h1>
          <p className="fade-up delay-2 text-gray-500 text-base leading-relaxed max-w-md mb-8">
            Bangles, necklaces, bridal sets & more — direct from Delhi's biggest wholesale market. Trusted by retailers across India.
          </p>
          <div className="fade-up delay-3 flex flex-wrap gap-3">
            <a href="#wholesale" className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm">
              Get Bulk Quote →
            </a>
            <a
              href="https://wa.me/919606422413"
              target="_blank"
              rel="noreferrer"
              className="border border-gold-300 text-gold-700 hover:bg-gold-50 font-medium px-7 py-3.5 rounded-full transition-colors text-sm flex items-center gap-2"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Stats row */}
          <div className="fade-up delay-4 flex gap-8 mt-12 pt-8 border-t border-gold-200">
            {[
              ["4.6★", "Justdial Rating"],
              ["33+", "Verified Reviews"],
              ["500+", "Designs"],
              ["PAN India", "Delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-gold-600">{n}</div>
                <div className="text-xs text-gray-400 mt-0.5 tracking-wide">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image collage */}
        <div className="relative h-[420px] hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=360&h=420&fit=crop"
            alt="Jewellery showcase"
            className="absolute top-0 right-0 w-60 h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=280&h=300&fit=crop"
            alt="Bangles collection"
            className="absolute bottom-0 left-0 w-52 h-56 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1630019852942-f89202989a59?w=240&h=220&fit=crop"
            alt="Earrings collection"
            className="absolute bottom-10 right-48 w-44 h-44 object-cover rounded-2xl shadow-lg border-4 border-white"
          />
          {/* Gold badge */}
          <div className="absolute top-4 left-8 bg-white rounded-xl shadow-lg px-4 py-3 border border-gold-100">
            <p className="text-xs text-gray-400">Justdial Rating</p>
            <p className="font-display text-xl font-semibold text-gold-500">4.6 ★★★★★</p>
          </div>
        </div>
      </div>
    </section>
  );
}
