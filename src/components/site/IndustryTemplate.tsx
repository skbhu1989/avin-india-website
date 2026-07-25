import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import type { IndustryContent } from "@/lib/industries-content";
import { INDUSTRIES } from "@/lib/industries-content";

export function IndustryTemplate({ data }: { data: IndustryContent }) {
  const others = INDUSTRIES.filter((i) => i.slug !== data.slug).slice(0, 4);

  return (
    <SiteLayout>
      <JsonLd
        data={[
          faqSchema(data.faqs.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: data.label, path: `/industries/${data.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Industries · ${data.label}`}
        title={<>Finance for <span className="text-primary">{data.label}</span>.</>}
        description={data.heroLead}
      />

      {/* Challenges */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Realities"
            title={<>What makes {data.label} finance different.</>}
            description="We don't do generic. Every engagement is built around your sector's specific realities."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.challenges.map((c) => (
              <Reveal key={c.title}>
                <div className="card-premium p-7 h-full">
                  <h3 className="font-display font-semibold text-lg text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach + highlights */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Approach" title={<>How we serve {data.label}.</>} />
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {data.approach}
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-all"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal>
            <div className="card-premium p-8">
              <h3 className="font-display font-semibold text-navy">What we deliver</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-navy/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title={<>{data.label} finance — common questions.</>} />
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

      {/* Other industries */}
      <section className="py-16 lg:py-20 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Explore" title={<>Other industries we serve.</>} />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((i) => (
              <Link
                key={i.slug}
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="card-premium p-5 group flex items-center justify-between"
              >
                <span className="font-display font-semibold text-navy text-sm">{i.label}</span>
                <ArrowUpRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[var(--shadow-glow)]">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Building a {data.label.toLowerCase()} business?
              </h3>
              <p className="mt-2 text-white/80 max-w-xl">
                Talk to a founder about the finance function your sector actually needs.
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
