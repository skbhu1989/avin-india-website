import { createFileRoute } from "@tanstack/react-router";
import { Bot, Cloud, Database, LineChart, Lock, Workflow } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Finance Technology & Automation | Avin India" },
      {
        name: "description",
        content:
          "Modern finance-tech stack: Zoho, QuickBooks, Tally, RPA, real-time dashboards and automation for growing businesses.",
      },
      { property: "og:title", content: "Technology · Avin India" },
      { property: "og:description", content: "Automation and modern finance-tech implementation." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechPage,
});

const pillars = [
  { icon: Cloud, title: "Cloud Accounting", desc: "Zoho Books, QuickBooks Online, Xero — implemented and operated end-to-end." },
  { icon: Bot, title: "Robotic Process Automation", desc: "Automate reconciliations, uploads, invoicing and month-end close." },
  { icon: LineChart, title: "Real-time Dashboards", desc: "Power BI, Looker Studio and Metabase dashboards wired to your books." },
  { icon: Workflow, title: "Workflow Automation", desc: "Approval flows, expense automation and vendor onboarding pipelines." },
  { icon: Database, title: "Data & Integrations", desc: "APIs across ERP, CRM, payroll, banking and payment gateways." },
  { icon: Lock, title: "Controls & Security", desc: "Role-based access, audit trails and SOX-style controls built-in." },
];

const stack = ["Zoho", "QuickBooks", "Tally Prime", "Xero", "Razorpay", "Stripe", "SAP B1", "NetSuite", "Power BI", "Looker", "n8n", "Zapier"];

function TechPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Technology"
        title={<>A modern finance <span className="text-primary">operating system</span>.</>}
        description="We combine the right tools, automation and data plumbing so your finance function runs like software — not spreadsheets."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="card-premium p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Stack"
            title={<>Tools we implement <span className="text-primary">every day</span>.</>}
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-[var(--shadow-soft)] hover:border-primary hover:text-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
