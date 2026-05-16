export const NAV_LINKS = [
  { label: "Collections", href: "#categories" },
  { label: "Bridal", href: "#bridal" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const CATEGORIES = [
  { name: "Necklaces", count: "100+ designs", img: "https://images.pexels.com/photos/31772511/pexels-photo-31772511.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
  { name: "Bangles", count: "200+ designs", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop" },
  { name: "Earrings", count: "150+ designs", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=300&fit=crop" },
  { name: "Pendant Sets", count: "70+ designs", img: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400&h=300&fit=crop" },
  { name: "Finger Rings", count: "80+ designs", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop" },
  { name: "Payal / Anklets", count: "40+ designs", img: "https://images.pexels.com/photos/36726168/pexels-photo-36726168.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
];

export const BRIDAL = [
  { name: "Kundan Bridal Set", desc: "Full necklace, earring & maang tikka set", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=380&fit=crop" },
  { name: "Polki Haar", desc: "Traditional gold-finish statement necklace", img: "https://images.pexels.com/photos/33547868/pexels-photo-33547868.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
  { name: "Choker Collection", desc: "Elegant chokers for all bridal looks", img: "https://images.pexels.com/photos/17298688/pexels-photo-17298688.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma", city: "Lajpat Nagar, Delhi", stars: 5, text: "Best wholesale rates in Sadar Bazar. Quality is consistent and the staff is very helpful. Been buying from VM Jewellers for 3 years now." },
  { name: "Rekha Gupta", city: "Jaipur, Rajasthan", stars: 5, text: "We order in bulk for our boutique. VM Jewellers' bridal sets are our bestsellers every wedding season. Always on time delivery." },
  { name: "Sunita Agarwal", city: "Lucknow, UP", stars: 4, text: "Great variety of bangles and necklaces. The price-to-quality ratio is unmatched. Highly recommend for resellers." },
];

export const FEATURES = [
  { icon: "trophy", title: "4.6★ on Justdial", desc: "33+ verified customer ratings" },
  { icon: "truck", title: "PAN India Delivery", desc: "Bulk orders shipped across India" },
  { icon: "tag", title: "Wholesale Prices", desc: "Direct from manufacturer to you" },
  { icon: "message", title: "WhatsApp Ordering", desc: "Catalogue on demand, instant quotes" },
];

// EmailJS Configuration
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const VM_WHATSAPP_NUMBER = import.meta.env.VITE_VM_WHATSAPP_NUMBER;

// Category options for form
export const CATEGORY_OPTIONS = ["Bangles", "Necklaces", "Earrings", "Bridal Sets", "Pendant Sets", "Finger Rings", "Mixed / All"];

// Contact info
export const CONTACT_INFO = {
  address: "Hanuman Mandir, Rui Mandi, Sadar Bazar, Delhi – 110006",
  phone: "09606422413",
  hours: "10:00 AM – 9:00 PM (Mon – Sat)",
  rating: "4.6 / 5 on Justdial · 33 verified reviews",
  justdialURL: "https://www.justdial.com/Delhi/V-M-Jewellers-Hanuman-Mandir-Rui-Mandi-Sadar-Bazar/011PXX11-XX11-231214110426-T9L9_BZDET",
};

// WhatsApp info
export const WHATSAPP_LINKS = {
  main: "https://wa.me/916350172713",
  personal: "https://wa.me/916350172713",
};
