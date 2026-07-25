import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import type { SolutionContent } from "@/lib/solutions-content";
import { SOLUTIONS } from "@/lib/solutions-content";

export function SolutionTemplate({ data }: { data: SolutionContent }) {
  const others = SOLUTIONS.filter((s) => s.slug !== data.slug);

  return (
    <SiteLayout>
      {/* SEO: Service + FAQ + breadcrumb structured data for this solution */}
      <JsonLd
        data={[
          serviceSchema({
            name: `${data.title} — Avin India`,
            description: data.seoDescription,
            path: `/solutions/${data.slug}`,
            serviceType: data.serviceType,
          }),
          faqSchema(data.faqs.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/services" },
            { name: data.title, path: `/solutions/${data.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={data.eyebrow}
        title={<>{data.title}.</>}
        description={data.heroLead}
      />

      {/* CTA bar directly under hero */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <p className="text-sm font-medium text-navy">{data.tagline}</p>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all"
            >
              Book Consultation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://wa.me/918792886951"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-navy hover:bg-muted transition-all"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Problem / why-now */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The Challenge
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-[1.15]">
              {data.problem.heading}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {data.problem.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title={<>Everything under {data.title}.</>}
            description="One integrated team delivers all of it — so nothing falls between vendors."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.capabilities.map((c) => (
              <Reveal key={c.name}>
                <div className="card-premium p-7 h-full flex flex-col">
                  <h3 className="font-display font-semibold text-lg text-navy">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes + Best for */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="The Outcome"
              title={<>What you actually get.</>}
            />
            <ul className="mt-8 space-y-4">
              {data.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-navy/90">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl bg-navy text-white p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold">Best suited for</h3>
              <p className="mt-3 text-white/80 leading-relaxed">{data.bestFor}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-all"
              >
                Talk to a founder <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title={<>Common questions.</>} />
          <div className="mt-10 space-y-4">
            {data.faqs.map((f) => (
              <div key={f.q} className="card-premium p-6">
                <h3 className="font-display font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore other solutions */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Explore" title={<>Our other solutions.</>} />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="card-premium p-7 group flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {s.eyebrow.split("·")[1]?.trim() ?? "Solution"}
                </span>
                <h3 className="mt-2 font-display font-semibold text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[var(--shadow-glow)]">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Talk to a founder — not a sales team.
              </h3>
              <p className="mt-2 text-white/80 max-w-xl">
                Every engagement begins with a conversation with one of our four founders. Tell us
                where your finance function stands, and we'll tell you what it needs next.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
