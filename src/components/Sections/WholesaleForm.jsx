import { useState } from "react";
import {
  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY,
  VM_WHATSAPP_NUMBER, CATEGORY_OPTIONS
} from "../../data/constants";
import {
  WhatsAppIcon, TagIcon, PhoneIcon, MapPinIcon, ClockIcon,
  TruckIcon, ArrowRightIcon
} from "../Common/Icons";

// SVG icons for the bullet list
function CurrencyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function CatalogueIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}
function BoxIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

// Success checkmark icon
function CheckCircleIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// Warning icon
function AlertIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

const BULLETS = [
  { Icon: CurrencyIcon,  text: "Manufacturer-direct pricing — no middlemen" },
  { Icon: CatalogueIcon, text: "Full catalogue available on WhatsApp" },
  { Icon: BoxIcon,       text: "Custom orders and bulk discounts available" },
  { Icon: ClockIcon,     text: "Open 10:00 AM – 9:00 PM, Mon–Sat" },
  { Icon: MapPinIcon,    text: "Hanuman Mandir, Rui Mandi, Sadar Bazar" },
];

export default function WholesaleForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", category: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value) => {
    const cleaned = value.replace(/[\s\-().+]/g, "");
    return /^(?:91)?[6-9]\d{9}$/.test(cleaned);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setForm({ ...form, phone: val });
    setPhoneError(val && !validatePhone(val)
      ? "Enter a valid 10-digit Indian mobile number (starting with 6–9)"
      : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(form.phone)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number (starting with 6–9)");
      return;
    }
    setStatus("sending");

    const waText = encodeURIComponent(
      `New Enquiry from Website\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\n` +
      `Category: ${form.category}\nMessage: ${form.message || "—"}\n\n` +
      `Sent from vmjewellers.in`
    );
    const waURL = `https://wa.me/${VM_WHATSAPP_NUMBER}?text=${waText}`;

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name, from_phone: form.phone,
            from_city: form.city, category: form.category,
            message: form.message || "—",
          },
        }),
      });
      if (!res.ok) throw new Error("EmailJS failed");
      setStatus("success");
      window.open(waURL, "_blank");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      window.open(waURL, "_blank");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setForm({ name: "", phone: "", city: "", category: "", message: "" });
  };

  const inputBase =
    "w-full border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 transition-all duration-200 focus:ring-0 disabled:opacity-50";
  const inputStyle = { background: "rgba(255,255,255,0.06)" };

  return (
    <section id="wholesale" className="py-24 px-5 sm:px-8 bg-[#0f0a03] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">

        {/* ── Left info panel ── */}
        <div>
          <p className="text-gold-400 text-[11px] tracking-[0.22em] uppercase font-medium mb-3">
            For Resellers & Retailers
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-5">
            Wholesale<br />Enquiry
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-500 to-transparent w-24 mb-6" />
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            We supply to boutiques, retailers, and resellers across India. Get our full catalogue on WhatsApp and place your first order today.
          </p>

          <ul className="space-y-5 mb-10">
            {BULLETS.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-gold-400" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919606422413"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 text-sm hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* ── Right form panel ── */}
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">

          {/* SUCCESS */}
          {status === "success" && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircleIcon className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-2">Enquiry Sent!</h3>
              <p className="text-gray-400 text-sm mb-1">WhatsApp has opened with your message.</p>
              <p className="text-gray-500 text-xs">A confirmation email has also been sent to VM Jewellers.</p>
              <button
                onClick={resetForm}
                className="mt-7 inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm transition-colors group"
              >
                Submit another
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          )}

          {/* ERROR */}
          {status === "error" && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-5">
                <AlertIcon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-2">WhatsApp Opened!</h3>
              <p className="text-gray-400 text-sm mb-1">Your message was sent to VM Jewellers on WhatsApp.</p>
              <p className="text-gray-500 text-xs">(Email confirmation had an issue — but your enquiry is safe.)</p>
              <button
                onClick={resetForm}
                className="mt-7 inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm transition-colors group"
              >
                Go back
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          )}

          {/* FORM */}
          {(status === "idle" || status === "sending") && (
            <>
              <h3 className="font-display text-2xl text-white font-semibold mb-7">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-[10px] text-gray-400 tracking-[0.18em] uppercase mb-2">
                    Your Name / Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sharma Boutique"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    disabled={status === "sending"}
                    className={`${inputBase} border-white/15 focus:border-gold-500/60`}
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] text-gray-400 tracking-[0.18em] uppercase mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <PhoneIcon className="w-3.5 h-3.5 text-gray-500" />
                    </span>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={form.phone}
                      onChange={handlePhoneChange}
                      disabled={status === "sending"}
                      className={`${inputBase} pl-9 ${
                        phoneError
                          ? "border-red-500/60 focus:border-red-400"
                          : "border-white/15 focus:border-gold-500/60"
                      }`}
                      style={inputStyle}
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-400/90 text-xs mt-1.5 flex items-center gap-1.5">
                      <AlertIcon className="w-3.5 h-3.5 flex-shrink-0" />
                      {phoneError}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-[10px] text-gray-400 tracking-[0.18em] uppercase mb-2">
                    City & State
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <MapPinIcon className="w-3.5 h-3.5 text-gray-500" />
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur, Rajasthan"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      disabled={status === "sending"}
                      className={`${inputBase} pl-9 border-white/15 focus:border-gold-500/60`}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-[10px] text-gray-400 tracking-[0.18em] uppercase mb-2">
                    Category Interested In
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <TagIcon className="w-3.5 h-3.5 text-gray-500" />
                    </span>
                    <select
                      required
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      disabled={status === "sending"}
                      className={`${inputBase} pl-9 border-white/15 focus:border-gold-500/60 appearance-none`}
                      style={{ ...inputStyle, color: form.category ? "white" : "#6b7280" }}
                    >
                      <option value="" disabled>Select category…</option>
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c} value={c} style={{ background: "#1a1208", color: "white" }}>{c}</option>
                      ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] text-gray-400 tracking-[0.18em] uppercase mb-2">
                    Message / Quantity
                  </label>
                  <textarea
                    placeholder="Approx. quantity needed, specific designs, budget range…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={status === "sending"}
                    rows={3}
                    className={`${inputBase} border-white/15 focus:border-gold-500/60 resize-none`}
                    style={inputStyle}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold-500 hover:bg-gold-400 active:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-200 mt-1 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-900/40 hover:-translate-y-px"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center pt-1">
                  WhatsApp will open automatically after submitting
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}