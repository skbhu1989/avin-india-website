import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — Finance, CFO & Compliance | Avin India" },
      {
        name: "description",
        content:
          "Practical insights on Virtual CFO, fundraising, GST, compliance, financial modelling and finance automation for growing businesses.",
      },
      { property: "og:title", content: "Insights · Avin India" },
      { property: "og:description", content: "Playbooks and insights from the Avin India finance desk." },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

const posts = [
  { tag: "CFO Playbook", title: "5 Metrics Every SaaS Founder Must Track Before Series A", date: "Jul 18, 2026", read: "6 min" },
  { tag: "Compliance", title: "GST 2.0: What Growing Businesses Need to Prepare For", date: "Jul 09, 2026", read: "5 min" },
  { tag: "Automation", title: "Finance Automation Stack for a 50-Person Company", date: "Jun 27, 2026", read: "7 min" },
  { tag: "Fundraising", title: "Building an Investor-Ready Financial Model in 7 Days", date: "Jun 12, 2026", read: "8 min" },
  { tag: "Valuation", title: "How to Value an Early-Stage Startup in 2026", date: "May 30, 2026", read: "6 min" },
  { tag: "FEMA", title: "ODI & FDI: A Founder's Guide to Cross-Border Structures", date: "May 18, 2026", read: "9 min" },
];

const gradients = [
  "linear-gradient(135deg,#1565C0,#0F172A)",
  "linear-gradient(135deg,#F57C00,#1565C0)",
  "linear-gradient(135deg,#0F172A,#1565C0)",
  "linear-gradient(135deg,#1565C0,#F57C00)",
  "linear-gradient(135deg,#0F172A,#F57C00)",
  "linear-gradient(135deg,#1565C0,#0F172A)",
];

function BlogsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title={<>From the <span className="text-primary">finance desk</span>.</>}
        description="Practical, no-fluff writing on CFO strategy, compliance, fundraising, valuation and finance automation."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={p.title} className="card-premium overflow-hidden group flex flex-col">
              <div
                className="aspect-[16/10] relative"
                style={{ background: gradients[i % gradients.length] }}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground">{p.date} · {p.read} read</p>
                <h3 className="mt-3 font-display font-semibold text-lg text-navy leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avin Editorial</span>
                  <ArrowUpRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
