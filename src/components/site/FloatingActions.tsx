import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  const phone = "918792886951";
  const message = encodeURIComponent("Hi Avin India, I'd like to know more about your finance advisory services.");
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <Link
        to="/contact"
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground pl-4 pr-5 py-3 text-sm font-semibold shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
      >
        <Calendar className="h-4 w-4 text-accent" />
        Book Consultation
      </Link>
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.55)] hover:scale-105 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      </a>
    </div>
  );
}
