import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Avin India — Book a Free Finance Consultation" },
      {
        name: "description",
        content:
          "Talk to Avin India. Book a free 30-minute consultation with a senior finance partner in Bangalore. Email bangalore@avinindia.in or call +91 87928 86951.",
      },
      { property: "og:title", content: "Contact · Avin India" },
      { property: "og:description", content: "Book a free finance consultation with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-hero-gradient border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05]">
              Let's build your <span className="text-primary">finance function</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Book a free 30-minute consultation with a senior partner. No sales pitch — just a
              clear roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, k: "Visit us", v: "Indiranagar, Bangalore, India", sub: "By appointment" },
              { icon: Mail, k: "Email", v: "bangalore@avinindia.in", href: "mailto:bangalore@avinindia.in" },
              { icon: Phone, k: "Call", v: "+91 87928 86951", href: "tel:+918792886951" },
              { icon: MessageCircle, k: "WhatsApp", v: "Chat with our team", href: "https://wa.me/918792886951" },
              { icon: Calendar, k: "Book a slot", v: "Free 30-min consultation" },
            ].map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.k}
                  {...(c.href ? { href: c.href } : {})}
                  className="card-premium p-5 flex items-start gap-4 group"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      {c.k}
                    </p>
                    <p className="mt-1 font-display font-semibold text-navy">{c.v}</p>
                    {c.sub && <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>}
                  </div>
                </Comp>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="card-premium p-7 lg:p-9 space-y-5"
            >
              <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" placeholder="Your name" />
                <Field label="Company" placeholder="Company name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" type="email" placeholder="you@company.com" />
                <Field label="Phone" placeholder="+91" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">
                  Service of interest
                </label>
                <select className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all">
                  {[
                    "Virtual CFO",
                    "Outsourced Accounting",
                    "GST & Tax",
                    "Payroll",
                    "Financial Modelling",
                    "Valuation & DD",
                    "Automation",
                    "Something else",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and what you're looking for."
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                We reply within 1 business day. Your details stay confidential.
              </p>
            </form>

            <a
              href="https://maps.google.com/?q=Indiranagar,Bangalore,India"
              target="_blank"
              rel="noreferrer"
              aria-label="Open our Indiranagar office on Google Maps"
              className="mt-6 group relative block h-56 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(21,101,192,0.85), rgba(15,23,42,0.9)), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "auto, 32px 32px, 32px 32px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-center px-6">
                <div>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow)]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-display font-semibold text-white text-lg">Indiranagar, Bangalore</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/70">Open on Google Maps →</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
      />
    </div>
  );
}
