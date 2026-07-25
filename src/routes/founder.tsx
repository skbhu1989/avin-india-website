import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  Linkedin,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { allFoundersSchema } from "@/lib/schema";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Meet Our Founders — Leadership at Avin India" },
      {
        name: "description",
        content:
          "Meet the four founders of Avin India — a multidisciplinary leadership team across finance, accounting, corporate governance and enterprise solutions.",
      },
      { property: "og:title", content: "Meet Our Founders | Avin India" },
      {
        property: "og:description",
        content:
          "Finance, accounting, corporate governance and enterprise expertise — the leadership team behind Avin India.",
      },
      { property: "og:url", content: "/founder" },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
  }),
  component: LeadershipPage,
});

const founders = [
  {
    name: "Sanjay Bhuwania",
    initials: "SB",
    role: "Founder & CEO",
    credentials: "Chartered Accountant | Fractional CFO",
    bio: "Sanjay leads Avin India's vision and CFO practice, partnering with founders to build finance functions that scale — from monthly reporting discipline to fundraise readiness.",
    expertise: ["Fractional CFO", "Fundraising Support", "Financial Strategy", "Business Advisory"],
    qualifications: ["CA — ICAI", "B.Com"],
  },
  {
    name: "Bishal Shaw",
    initials: "BS",
    role: "Founder & Director – Finance Advisory",
    credentials: "Chartered Accountant",
    bio: "Bishal heads finance advisory and controllership, ensuring clients close books faster with accurate, audit-ready reporting and strong internal financial controls.",
    expertise: ["Accounting & Controllership", "Audit Support", "MIS & Reporting", "Taxation"],
    qualifications: ["CA — ICAI", "B.Com"],
  },
  {
    name: "Nikita Aggarwal",
    initials: "NA",
    role: "Founder & Director – Enterprise Solutions",
    credentials: "MBA",
    bio: "Nikita drives enterprise solutions and finance automation, designing systems and processes that connect finance data with day-to-day business decision making.",
    expertise: ["Finance Automation", "ERP & Systems", "Process Design", "Client Success"],
    qualifications: ["MBA — Finance"],
  },
  {
    name: "Nibha Kedia",
    initials: "NK",
    role: "Founder & Director – Corporate Compliance",
    credentials: "Company Secretary",
    bio: "Nibha leads corporate governance and compliance, keeping companies secretarially sound across incorporation, ROC filings, board processes and regulatory matters.",
    expertise: ["Corporate Governance", "ROC & MCA Compliance", "Secretarial Audit", "FEMA Advisory"],
    qualifications: ["ACS — ICSI", "LL.B"],
  },
];

const strengths = [
  { icon: CalendarDays, k: "Established in 2019", v: "Building finance functions since day one." },
  { icon: Users, k: "25+ Active Clients", v: "Startups, SMEs and growth-stage businesses." },
  { icon: Award, k: "33+ Years Combined", v: "Leadership experience across the team." },
  { icon: ShieldCheck, k: "End-to-End Solutions", v: "Finance, accounting and compliance under one roof." },
];

function LeadershipPage() {
  return (
    <SiteLayout>
      {/* Person entities for all four founders — helps Google build people knowledge panels. */}
      <JsonLd data={allFoundersSchema()} />
      <PageHero
        eyebrow="Leadership"
        title="Meet Our Founders"
        description="A multidisciplinary leadership team combining finance, accounting, corporate governance and enterprise expertise to help businesses grow with confidence."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <article className="group card-premium h-full p-7 sm:p-8 flex flex-col">
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-primary via-primary/85 to-navy shadow-[var(--shadow-elevated)] overflow-hidden">
                        <div className="absolute inset-0 bg-grid opacity-20" />
                        <span className="relative font-display font-bold text-3xl text-white">
                          {f.initials}
                        </span>
                      </div>
                      <span className="absolute -bottom-2 -right-2 grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent border border-white">
                        <Building2 className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-navy leading-tight">
                        {f.name}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {f.credentials}
                      </p>
                      <a
                        href="#"
                        aria-label={`LinkedIn profile of ${f.name}`}
                        className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {f.bio}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy">
                      Areas of expertise
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {f.expertise.map((e) => (
                        <span
                          key={e}
                          className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy">
                      Qualifications
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {f.qualifications.join(" · ")}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-hero-gradient border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why it works"
            title="Our Combined Strength"
            description="Four founders, one integrated team — covering every financial and compliance need a growing business has."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.08}>
                <div className="card-premium h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display font-semibold text-navy text-lg leading-snug">
                    {s.k}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 sm:px-14 text-center">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-foreground leading-tight">
                  Partner with a leadership team committed to your business growth.
                </h2>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5"
                  >
                    Book a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:bangalore@avinindia.in"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm font-semibold text-navy-foreground transition-all hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" /> Contact Our Team
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
