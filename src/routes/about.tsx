import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Target,
  Heart,
  Trophy,
  ShieldCheck,
  Sparkles,
  Users,
  Rocket,
  Building2,
  Landmark,
  Cpu,
  Gamepad2,
  Stethoscope,
  Factory,
  Home,
  Briefcase,
  PhoneCall,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Avin India — Finance, Compliance & Growth Partner" },
      {
        name: "description",
        content:
          "Learn about Avin India Private Limited — a Bangalore-based finance transformation firm helping startups, SMEs and growing businesses build world-class finance functions.",
      },
      { property: "og:title", content: "About Avin India" },
      {
        property: "og:description",
        content: "Finance transformation & advisory built for growing businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do what's right — always. Governance and confidentiality are non-negotiable." },
  { icon: Heart, title: "Ownership", desc: "We treat every client's business like our own and take pride in the outcome." },
  { icon: Target, title: "Accuracy", desc: "Precision in every number, every report, every deliverable — no shortcuts." },
  { icon: Sparkles, title: "Innovation", desc: "Modern tooling, automation and AI embedded across every engagement." },
  { icon: Compass, title: "Transparency", desc: "Clear scope, honest communication and no surprises — ever." },
  { icon: Trophy, title: "Client Success", desc: "Your growth is the measure of our work. We win when you win." },
];

const whyUs = [
  { icon: Users, title: "CA-led Leadership", desc: "Senior chartered accountants leading every engagement end-to-end." },
  { icon: Briefcase, title: "Dedicated Finance Team", desc: "A named partner and pod who know your business inside-out." },
  { icon: Cpu, title: "Technology-enabled Processes", desc: "Cloud accounting, OCR and dashboards built into the workflow." },
  { icon: Rocket, title: "Scalable Engagement Model", desc: "Finance operations that grow with you — from seed to scale." },
  { icon: ShieldCheck, title: "Transparent Communication", desc: "Clear scope, fixed fees and predictable, responsive delivery." },
  { icon: Trophy, title: "Business-first Approach", desc: "We align finance with strategy — outcomes over activity." },
];

const industries = [
  { icon: Rocket, label: "Startups" },
  { icon: Landmark, label: "FinTech" },
  { icon: Cpu, label: "Technology" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Construction" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Home, label: "Real Estate" },
];


function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Avin India"
        title={
          <>
            About <span className="text-gradient-hero">Avin India</span>
          </>
        }
        description="Building finance functions that empower businesses to grow with confidence."
      />


      {/* Company Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Built in Bangalore. Designed for India's next generation of businesses.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 2019, Avin India Private Limited was established with a simple
              vision — to help businesses build strong, reliable and scalable finance
              functions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We observed that many startups and growing businesses struggled with
              fragmented finance operations, delayed reporting, compliance risks and the
              high cost of building in-house finance teams.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Avin India bridges this gap by becoming an extension of our clients'
              businesses. From accounting and compliance to CFO advisory, financial
              reporting, automation and strategic planning, we provide end-to-end finance
              solutions under one roof.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we proudly support businesses across multiple industries with
              practical financial expertise, technology-driven processes and a commitment
              to long-term partnerships.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all"
            >
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 bg-hero-gradient rounded-[2rem] blur-xl opacity-70" />
              <div className="relative card-premium p-8 grid grid-cols-2 gap-4">
                {[
                  { k: "2019", v: "Established" },
                  { k: "Bangalore", v: "Headquartered" },
                  { k: "15+", v: "Service lines" },
                  { k: "8+", v: "Industries served" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-muted/60 p-5">
                    <div className="font-display text-2xl font-bold text-primary">{s.k}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                  </div>
                ))}
                <div className="col-span-2 rounded-2xl bg-navy text-navy-foreground p-5 flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold">Indiranagar, Bangalore</p>
                    <p className="text-sm text-white/60">Serving clients across India & globally</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mission & Vision"
            title={<>The purpose behind <span className="text-primary">everything we build</span>.</>}
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card-premium p-8 h-full">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">Our Mission</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To simplify finance for growing businesses through technology, expertise
                  and strategic financial leadership.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card-premium p-8 h-full">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Compass className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">Our Vision</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To become India's most trusted finance transformation partner for
                  startups, SMEs and global businesses.
                </p>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title={<>What guides <span className="text-primary">everything we do</span>.</>}
            description="Principles that shape how we hire, how we work and how we show up for every client."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-premium p-7 h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-lg text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Avin India */}
      <section className="py-20 sm:py-28 bg-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Businesses Choose Avin India"
            title={<>Big-firm rigor. <span className="text-primary">Modern delivery</span>.</>}
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="card-premium p-7 h-full group">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-navy text-primary-foreground group-hover:from-primary group-hover:to-accent transition-colors">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-lg text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title={<>Deep expertise across <span className="text-primary">high-growth sectors</span>.</>}
            description="We bring sector-specific finance and compliance experience to every engagement."
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.label} delay={i * 0.04}>
                <div className="card-premium p-6 flex flex-col items-start gap-4 h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <p className="font-display font-semibold text-navy">{ind.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Explore all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 sm:py-28 bg-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 bg-hero-gradient rounded-[2rem] blur-xl opacity-70" />
              <div className="relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-primary via-navy to-navy overflow-hidden shadow-[var(--shadow-elevated)]">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center text-white/90 px-8">
                    <div className="mx-auto h-28 w-28 rounded-full bg-white/10 grid place-items-center font-display text-3xl font-bold">
                      SB
                    </div>
                    <p className="mt-5 font-display text-xl font-semibold">Sanjay Bhuwania</p>
                    <p className="text-sm text-white/70">Founder & CEO</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Meet Our Founder
            </h2>
            <p className="mt-5 font-display text-2xl font-semibold text-navy">
              Sanjay Bhuwania
            </p>
            <p className="mt-1 text-sm font-semibold text-primary uppercase tracking-wider">
              Founder & CEO
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Chartered Accountant · Fractional CFO
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A seasoned finance leader helping founders and growing businesses build
              world-class finance functions — combining deep CA expertise with a modern,
              technology-first approach to CFO advisory.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Chartered Accountant", "Fractional CFO", "Finance Strategist"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-navy/80"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/founder"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all"
            >
              View Leadership <ArrowRight className="h-4 w-4" />
            </Link>

          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy text-navy-foreground px-8 sm:px-14 py-16 sm:py-20">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob" />
            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Let's build together
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-5xl font-bold leading-[1.05]">
                Let's Build a Stronger Finance Function Together.
              </h2>

              <p className="mt-5 text-white/70 text-lg max-w-2xl">
                Partner with a team that combines CA-led expertise, modern technology and
                CFO thinking to build finance operations that scale with your ambitions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all"
                >
                  Book a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <PhoneCall className="h-4 w-4" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
