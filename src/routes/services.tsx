import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SOLUTIONS } from "@/lib/solutions-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Solutions — Finance Operations, CFO, Compliance & Automation | Avin India" },
      {
        name: "description",
        content:
          "Four integrated finance solutions for growing businesses: Finance Operations, CFO Office, Compliance & Governance, and Finance Transformation — one accountable team.",
      },
      { property: "og:title", content: "Solutions · Avin India" },
      { property: "og:description", content: "One operating system for your finance function." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: SolutionsPage,
});

// Individual capabilities mapped to their parent solution for the detail grid
const capabilityMap: Record<string, string[]> = {
  "finance-operations": ["Accounting", "Bookkeeping", "Payroll", "Accounts Payable", "Accounts Receivable", "Bank Reconciliation"],
  "cfo-office": ["Virtual CFO", "Budgeting & FP&A", "Cash-Flow Forecasting", "MIS Reporting", "Investor Reporting", "Fundraise Readiness"],
  "compliance-governance": ["GST", "Income Tax", "ROC & MCA", "Secretarial", "Internal Audit", "FEMA"],
  "finance-transformation": ["Automation", "OCR", "Live Dashboards", "Finance-Tech", "AI Workflows", "Process Improvement"],
};

function SolutionsPage() {
  return (
    <SiteLayout>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Solutions"
        title={<>Four solutions. One <span className="text-primary">operating system</span> for your finance function.</>}
        description="Engage one, or engage all four — every solution is delivered by the same integrated team, so nothing falls between vendors."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="card-premium block p-8 lg:p-10 group"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {s.eyebrow}
                    </span>
                    <h2 className="mt-3 font-display text-2xl lg:text-3xl font-bold text-navy">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Explore {s.title} <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {(capabilityMap[s.slug] ?? []).map((cap) => (
                        <span
                          key={cap}
                          className="rounded-lg bg-muted px-3 py-2 text-xs font-medium text-navy/80 text-center"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[var(--shadow-glow)]">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Not sure which solution you need?
              </h3>
              <p className="mt-2 text-white/80">Talk to a founder — free 30-min consultation.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
