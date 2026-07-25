import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowRight, Send } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/founder", label: "Leadership" },
      { to: "/industries", label: "Industries" },
      { to: "/technology", label: "Technology" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Virtual CFO" },
      { to: "/services", label: "Accounting & Bookkeeping" },
      { to: "/services", label: "GST & Compliance" },
      { to: "/services", label: "Payroll" },
      { to: "/services", label: "MIS & Investor Reporting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blogs", label: "Insights" },
      { to: "/blogs", label: "CFO Playbooks" },
      { to: "/blogs", label: "Compliance Updates" },
      { to: "/contact", label: "Free Consultation" },
      { to: "/technology", label: "Tech Stack" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-12">
          {/* Brand + newsletter + socials */}
          <div className="lg:col-span-4">
            <div className="[&_a>span:last-child_span]:!text-white [&_a>span:last-child_span:last-child]:!text-white/60">
              <Logo variant="light" />
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Finance. Compliance. Growth. One partner for every financial solution — built for
              startups, SMEs and growing enterprises.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-full bg-white/10 p-1.5 pl-4 max-w-sm"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 outline-none min-w-0"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground hover:scale-105 transition-transform"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/avin-india"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-[#0A66C2] transition-colors px-3.5 py-2 text-xs font-semibold"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://wa.me/918792886951"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors px-3.5 py-2 text-xs font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-white font-display font-semibold text-sm uppercase tracking-widest">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link to={l.to} className="hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + map */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Indiranagar, Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:bangalore@avinindia.in" className="hover:text-accent break-all">
                  bangalore@avinindia.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:+918792886951" className="hover:text-accent">
                  +91 87928 86951
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a
                  href="https://wa.me/918792886951"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=Indiranagar,Bangalore,India"
              target="_blank"
              rel="noreferrer"
              className="mt-5 group relative block h-32 overflow-hidden rounded-2xl border border-white/10"
              aria-label="View office on Google Maps"
            >
              <div
                className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(21,101,192,0.55), rgba(15,23,42,0.85)), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "auto, 24px 24px, 24px 24px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white">
                    View on Maps
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Avin India Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>Established 2019 · Bangalore, India</span>
            <Link to="/contact" className="inline-flex items-center gap-1 hover:text-accent">
              Get in touch <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
