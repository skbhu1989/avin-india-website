import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/technology", label: "Technology" },
  { to: "/founder", label: "Leadership" },
  { to: "/blogs", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-[0_4px_24px_-12px_rgb(15_23_42/0.18)]"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative px-3 py-2 text-[13px] font-medium text-navy/70 hover:text-navy transition-colors"
              activeProps={{ className: "!text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://wa.me/918792886951"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-navy/70 hover:text-primary hover:border-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
          >
            Book Consultation
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-white text-navy transition-colors hover:border-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl animate-fade-up">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm font-medium text-navy/80 hover:bg-primary-soft hover:text-primary transition-colors"
                activeProps={{ className: "bg-primary-soft !text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <a
                href="https://wa.me/918792886951"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-navy"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
