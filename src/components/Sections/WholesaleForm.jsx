import { useState } from "react";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, VM_WHATSAPP_NUMBER, CATEGORY_OPTIONS } from "../../data/constants";

/**
 * Wholesale Form Section Component
 * Contact form for wholesale enquiries with EmailJS and WhatsApp integration
 */
export default function WholesaleForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", category: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value) => {
    const cleaned = value.replace(/[\s\-().+]/g, "");
    const indian = /^(?:91)?[6-9]\d{9}$/.test(cleaned);
    return indian;
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setForm({ ...form, phone: val });
    if (val && !validatePhone(val)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number (starting with 6–9)");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(form.phone)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number (starting with 6–9)");
      return;
    }
    setStatus("sending");

    // ── 1. Build WhatsApp message ──────────────────────────────────────────
    const waText = encodeURIComponent(
      `🛍️ *New Enquiry from Website*\n\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phone}\n` +
        `*City:* ${form.city}\n` +
        `*Category:* ${form.category}\n` +
        `*Message:* ${form.message || "—"}\n\n` +
        `_Sent from vmjewellers.in_`
    );
    const waURL = `https://wa.me/${VM_WHATSAPP_NUMBER}?text=${waText}`;

    // ── 2. Send email via EmailJS ──────────────────────────────────────────
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_phone: form.phone,
            from_city: form.city,
            category: form.category,
            message: form.message || "—",
          },
        }),
      });

      if (!res.ok) throw new Error("EmailJS failed");

      // ── 3. Both succeeded — open WhatsApp & show success ────────────────
      setStatus("success");
      window.open(waURL, "_blank");
    } catch (err) {
      // EmailJS failed — still open WhatsApp so enquiry isn't lost
      console.error("EmailJS error:", err);
      setStatus("error");
      window.open(waURL, "_blank");
    }
  };

  return (
    <section id="wholesale" className="py-20 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left info */}
        <div>
          <p className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-3">For Resellers & Retailers</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-5">
            Wholesale
            <br />
            Enquiry
          </h2>
          <div className="h-px bg-gradient-to-r from-gold-500 to-transparent w-24 mb-6" />
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            We supply to boutiques, retailers, and resellers across India. Get our full catalogue on WhatsApp and place your first order today.
          </p>

          <ul className="space-y-5">
            {[
              ["💰", "Manufacturer-direct pricing — no middlemen"],
              ["📲", "Full catalogue available on WhatsApp"],
              ["📦", "Custom orders and bulk discounts available"],
              ["🕐", "Open 10:00 AM – 9:00 PM, Mon–Sat"],
              ["📍", "Hanuman Mandir, Rui Mandi, Sadar Bazar"],
            ].map(([icon, text]) => (
              <li key={text} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919606422413"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Right form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          {/* ── SUCCESS ── */}
          {status === "success" && (
            <div className="text-center py-12">
              <div className="text-5xl mb-5">✅</div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">Enquiry Sent!</h3>
              <p className="text-gray-400 text-sm mb-1">WhatsApp has opened with your message.</p>
              <p className="text-gray-500 text-xs">A confirmation email has also been sent to VM Jewellers.</p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", phone: "", city: "", category: "", message: "" });
                }}
                className="mt-6 text-gold-400 text-sm hover:text-gold-300"
              >
                Submit another →
              </button>
            </div>
          )}

          {/* ── ERROR (WhatsApp still opened) ── */}
          {status === "error" && (
            <div className="text-center py-12">
              <div className="text-5xl mb-5">⚠️</div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">WhatsApp Opened!</h3>
              <p className="text-gray-400 text-sm mb-1">Your message was sent to VM Jewellers on WhatsApp.</p>
              <p className="text-gray-500 text-xs">(Email confirmation had an issue — but your enquiry is safe.)</p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", phone: "", city: "", category: "", message: "" });
                }}
                className="mt-6 text-gold-400 text-sm hover:text-gold-300"
              >
                Go back →
              </button>
            </div>
          )}

          {/* ── FORM (idle or sending) ── */}
          {(status === "idle" || status === "sending") && (
            <>
              <h3 className="font-display text-2xl text-white font-semibold mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Your Name / Business Name", type: "text", placeholder: "e.g. Sharma Boutique" },
                  { id: "city", label: "City & State", type: "text", placeholder: "e.g. Jaipur, Rajasthan" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.id]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      disabled={status === "sending"}
                      className="w-full border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 transition-all disabled:opacity-50"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    />
                  </div>
                ))}

                {/* Phone field with Indian number validation */}
                <div>
                  <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={form.phone}
                    onChange={handlePhoneChange}
                    disabled={status === "sending"}
                    className={`w-full border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 transition-all disabled:opacity-50 ${
                      phoneError ? "border-red-400 focus:border-red-400" : "border-white/15"
                    }`}
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                  {phoneError && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {phoneError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">Category Interested In</label>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    disabled={status === "sending"}
                    className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm transition-all disabled:opacity-50"
                    style={{ background: "rgba(255,255,255,0.06)", color: form.category ? "white" : "#6b7280" }}
                  >
                    <option value="" disabled>
                      Select category...
                    </option>
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c} value={c} style={{ background: "#1f2937", color: "white" }}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">Message / Quantity</label>
                  <textarea
                    placeholder="Approx. quantity needed, specific designs, budget range..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={status === "sending"}
                    rows={3}
                    className="w-full border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 resize-none transition-all disabled:opacity-50"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded-xl text-sm transition-colors mt-2 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry →"
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center pt-1">WhatsApp will open automatically after submitting</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}