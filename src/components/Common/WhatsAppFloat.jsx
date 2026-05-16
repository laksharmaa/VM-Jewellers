import { WHATSAPP_LINKS } from "../../data/constants";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINKS.main}
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
      className="wa-float fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform hover:shadow-2xl"
    >
      <WhatsAppIcon className="w-7 h-7 fill-white text-white" />
    </a>
  );
}
