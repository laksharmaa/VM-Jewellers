import { CONTACT_INFO } from "../../data/constants";
import { MapPinIcon, PhoneIcon, ClockIcon, StarIcon, WhatsAppIcon, ArrowRightIcon } from "../Common/Icons";
import useScrollReveal from "../../hooks/useScrollReveal";

const contactRows = [
  { Icon: MapPinIcon, label: "Address", key: "address" },
  { Icon: PhoneIcon, label: "Phone", key: "phone" },
  { Icon: ClockIcon, label: "Hours", key: "hours" },
  { Icon: StarIcon, label: "Rating", key: "rating" },
];

export default function Contact() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-gold-500 text-[11px] tracking-[0.22em] uppercase font-medium mb-3">Find Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">Visit the Store</h2>
          <div className="gold-line w-24 mx-auto" />
        </div>

        <div ref={contentRef} className="reveal grid md:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="bg-gradient-to-br from-[#fefbf0] to-[#fdf5d6] border border-gold-100 rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-7">VM Jewellers</h3>

            <div className="space-y-5 mb-8">
              {contactRows.map(({ Icon, label, key }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold-600" filled={false} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-0.5">{label}</div>
                    <div className="text-sm text-gray-700 leading-relaxed">{CONTACT_INFO[key]}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:09606422413"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md group"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919606422413"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-full min-h-[340px]">
            <iframe
              title="VM Jewellers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.9861083025216!2d77.2093030791063!3d28.660134612864027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdedada1890f%3A0xa095ba07c172e15d!2sV.M%20Jewellers%20-%20India&#39;s%20%231%20Wholesaler%20%26%20Manufacturer%20Of%20Imitation%20Jewellery%20Store!5e0!3m2!1sen!2sin!4v1778920766613!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
