import { CATEGORIES } from "../../data/constants";

/**
 * Categories Section Component
 * Shop by category grid display
 */
export default function Categories() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">Our Collections</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">Shop by Category</h2>
          <div className="gold-line w-24 mx-auto mb-5" />
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Available in gold-finish, silver-finish & oxidised styles. Wholesale & retail both welcome.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="card-hover group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="relative h-44 overflow-hidden">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-semibold text-base">{cat.name}</span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-400">{cat.count}</span>
                <span className="text-gold-500 text-xs font-medium">View All →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
