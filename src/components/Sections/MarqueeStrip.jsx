/**
 * Marquee Strip Component
 * Animated scrolling product categories strip
 */
export default function MarqueeStrip() {
  const items = ["Necklaces", "Bangles", "Earrings", "Bridal Sets", "Pendant Sets", "Payal", "Finger Rings", "Fashion Jewellery", "Bulk Orders Welcome"];
  const repeated = [...items, ...items];

  return (
    <div className="bg-gold-500 py-3 overflow-hidden">
      <div className="marquee-track whitespace-nowrap inline-block">
        {repeated.map((item, i) => (
          <span key={i} className="inline-block text-white text-xs font-medium tracking-widest uppercase mx-6">
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
