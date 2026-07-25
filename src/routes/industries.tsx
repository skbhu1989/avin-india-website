import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Cpu,
  HeartPulse,
  Landmark,
  Rocket,
  Sparkles,
  Wallet,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Startups, FinTech, SaaS, Manufacturing | Avin India" },
      {
        name: "description",
        content:
          "Domain-expert finance advisory across startups, FinTech, manufacturing, gaming, healthcare, technology, construction and real estate.",
      },
      { property: "og:title", content: "Industries · Avin India" },
      { property: "og:description", content: "Deep sector expertise across high-growth industries." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Rocket, label: "Startup", slug: "startups", desc: "Seed to Series C — fundraise readiness, cap table, unit economics and board reporting." },
  { icon: Wallet, label: "FinTech", slug: "fintech", desc: "RBI compliance, escrow, PA/PG licensing, reconciliation-grade finance ops." },
  { icon: Wrench, label: "Manufacturing", slug: "manufacturing", desc: "Costing, inventory, GST on works contracts, plant-level MIS." },
  { icon: Sparkles, label: "Gaming", slug: "gaming", desc: "GST on gaming, TDS 194BA, RMG compliance and platform-level accounting." },
  { icon: HeartPulse, label: "Healthcare", slug: "healthcare", desc: "Multi-location accounting, insurance receivables, doctor-payout models." },
  { icon: Cpu, label: "Technology / SaaS", slug: "technology", desc: "ARR, MRR, cohort revenue recognition, transfer pricing and ESOPs." },
  { icon: Building2, label: "Construction", slug: "construction", desc: "Project accounting, RERA compliance, POC method and vendor management." },
  { icon: Landmark, label: "Real Estate", slug: "real-estate", desc: "SPV structures, RERA & GST, JV accounting and investor waterfalls." },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={<>Deep expertise across <span className="text-primary">high-growth sectors</span>.</>}
        description="We don't do generic. Every engagement is tailored to your industry's unit economics, compliance and reporting realities."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.label}
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="card-premium p-7 group block"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <ind.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display font-semibold text-xl text-navy flex items-center gap-1.5">
                  {ind.label}
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
