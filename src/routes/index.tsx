import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  FileSpreadsheet,
  Gauge,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  PieChart,
  Play,
  Presentation,
  Quote,
  Receipt,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avin India — Finance Transformation & CFO Advisory in Bangalore" },
      {
        name: "description",
        content:
          "Avin India is a modern finance partner for startups & SMEs — Virtual CFO, accounting, compliance, automation, payroll and investor reporting under one roof.",
      },
      { property: "og:title", content: "Avin India — Finance. Compliance. Growth." },
      {
        property: "og:description",
        content: "One partner for every financial solution. CFO advisory, accounting, compliance & automation for growing businesses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Briefcase, title: "Virtual CFO", desc: "Strategic finance leadership on demand." },
  { icon: Calculator, title: "Outsourced Accounting", desc: "End-to-end books managed by experts." },
  { icon: FileSpreadsheet, title: "Bookkeeping", desc: "Clean, timely and audit-ready records." },
  { icon: Wallet, title: "Payroll", desc: "Accurate payroll & statutory compliance." },
  { icon: Receipt, title: "GST", desc: "Registrations, returns & advisory." },
  { icon: Landmark, title: "Income Tax", desc: "Planning, filings & representation." },
  { icon: ClipboardCheck, title: "ROC Compliance", desc: "MCA, secretarial & annual filings." },
  { icon: LineChart, title: "Investor Reporting", desc: "Board & investor-grade dashboards." },
  { icon: BarChart3, title: "MIS Reporting", desc: "Decision-ready monthly insights." },
  { icon: TrendingUp, title: "Financial Modelling", desc: "Fundraise & scenario models." },
  { icon: Gauge, title: "Business Valuation", desc: "Independent, defensible valuations." },
  { icon: Search, title: "Due Diligence", desc: "Buy-side & sell-side DD support." },
  { icon: Cpu, title: "Automation", desc: "Modern finance-tech implementation." },
  { icon: ShieldCheck, title: "Internal Audit", desc: "Risk, controls and process reviews." },
  { icon: Globe2, title: "FEMA", desc: "Cross-border compliance & advisory." },
];

const whyUs = [
  { icon: Users, title: "CA-Led Expertise", desc: "Chartered Accountants, industry CFOs and finance-tech specialists on every engagement." },
  { icon: Cpu, title: "Technology Driven", desc: "Modern stack — Zoho, QuickBooks, Tally, RPA and analytics-grade dashboards." },
  { icon: Handshake, title: "Dedicated Finance Team", desc: "A named partner and pod that scale seamlessly with your business." },
  { icon: Zap, title: "Fast Turnaround", desc: "Committed SLAs on closes, filings, MIS and board reporting." },
  { icon: Scale, title: "Transparent Engagement", desc: "Clear scope, predictable retainers and no surprise invoices." },
  { icon: Rocket, title: "Scalable Finance Solutions", desc: "Purpose-built for seed to Series C — and every stage beyond." },
];


const whyCeos = [
  {
    icon: Presentation,
    title: "Investor Ready Reporting",
    desc: "Board decks, MIS packs and KPI dashboards your investors will actually trust — closed on time, every month.",
    from: "from-[#1565C0]",
    to: "to-[#0F172A]",
  },
  {
    icon: PieChart,
    title: "Better Cash Flow Visibility",
    desc: "Live cash runway, burn and receivables — always know exactly where you stand and where you're heading.",
    from: "from-[#F57C00]",
    to: "to-[#1565C0]",
  },
  {
    icon: Workflow,
    title: "Finance Automation",
    desc: "Zoho, QuickBooks, Tally and RPA workflows eliminate manual work and unlock finance velocity.",
    from: "from-[#1565C0]",
    to: "to-[#1E88E5]",
  },
  {
    icon: BarChart3,
    title: "Monthly MIS",
    desc: "Consistent monthly management reports covering revenue, margins, cohorts, cash and unit economics.",
    from: "from-[#0F172A]",
    to: "to-[#1565C0]",
  },
  {
    icon: ShieldCheck,
    title: "Risk Reduction",
    desc: "Internal controls, statutory compliance and audit-ready processes that de-risk scale.",
    from: "from-[#0F172A]",
    to: "to-[#F57C00]",
  },
  {
    icon: Briefcase,
    title: "Strategic CFO Guidance",
    desc: "Fractional CFO leadership for fundraising, pricing, unit economics and long-range strategy.",
    from: "from-[#1565C0]",
    to: "to-[#F57C00]",
  },
];


const industries = [
  { icon: Rocket, label: "Startup" },
  { icon: Wallet, label: "FinTech" },
  { icon: Wrench, label: "Manufacturing" },
  { icon: Sparkles, label: "Gaming" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Cpu, label: "Technology" },
  { icon: Building2, label: "Construction" },
  { icon: Landmark, label: "Real Estate" },
];

const steps = [
  { n: "01", title: "Discovery Call", desc: "Understand your business, stage and finance goals." },
  { n: "02", title: "Assessment", desc: "Diagnose gaps across finance, compliance and reporting." },
  { n: "03", title: "Implementation", desc: "Set up processes, tools, controls and dashboards." },
  { n: "04", title: "Operate", desc: "Run your finance function with SLAs and ownership." },
  { n: "05", title: "Optimize", desc: "Continuous improvement with metrics that matter." },
];

const testimonials = [
  {
    quote:
      "A trusted finance partner that helped us bring structure, visibility and boardroom-grade reporting to our business.",
    name: "Client A",
    role: "Founder, SaaS",
    initials: "CA",
  },
  {
    quote:
      "Senior finance leadership on demand — the Virtual CFO engagement has been a genuine multiplier for our team.",
    name: "Client B",
    role: "CEO, D2C Brand",
    initials: "CB",
  },
  {
    quote:
      "Compliance, month-end and MIS are finally predictable. Real testimonials from our clients will be published here shortly.",
    name: "Client C",
    role: "Founder, FinTech",
    initials: "CC",
  },
];

const whatWeDo = [
  {
    icon: Wallet,
    title: "Finance Operations",
    desc: "Accounting, Bookkeeping, Payroll, AP/AR",
    tags: ["Accounting", "Bookkeeping", "Payroll", "AP / AR"],
    from: "from-[#1565C0]",
    to: "to-[#0F172A]",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "GST, Income Tax, ROC & Secretarial",
    tags: ["GST", "Income Tax", "ROC", "Secretarial"],
    from: "from-[#0F172A]",
    to: "to-[#1565C0]",
  },
  {
    icon: Briefcase,
    title: "CFO Office",
    desc: "Virtual CFO, MIS, Budgeting, FP&A, Investor Reporting",
    tags: ["Virtual CFO", "MIS", "Budgeting", "FP&A", "Investor Reporting"],
    from: "from-[#1565C0]",
    to: "to-[#1E88E5]",
  },
  {
    icon: Cpu,
    title: "Finance Automation",
    desc: "OCR, AI, Dashboards & Process Automation",
    tags: ["OCR", "AI", "Dashboards", "RPA"],
    from: "from-[#F57C00]",
    to: "to-[#1565C0]",
  },
];

const insights = [
  {
    tag: "CFO Playbook",
    title: "5 Metrics Every SaaS Founder Must Track Before Series A",
    date: "Jul 18, 2026",
  },
  {
    tag: "Compliance",
    title: "GST 2.0: What Growing Businesses Need to Prepare For",
    date: "Jul 09, 2026",
  },
  {
    tag: "Automation",
    title: "Finance Automation Stack for a 50-Person Company",
    date: "Jun 27, 2026",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Soft animated background */}
        <div
          className="pointer-events-none absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-blob"
          style={{ background: "radial-gradient(circle, rgba(21,101,192,0.35), transparent 65%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-[-6rem] h-[560px] w-[560px] rounded-full blur-3xl opacity-40 animate-blob"
          style={{ background: "radial-gradient(circle, rgba(245,124,0,0.28), transparent 65%)", animationDelay: "-8s" }}
        />
        <div
          className="pointer-events-none absolute top-1/3 left-1/3 h-[420px] w-[420px] rounded-full blur-3xl opacity-25 animate-blob"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.30), transparent 65%)", animationDelay: "-14s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3.5 py-1.5 text-xs font-semibold text-navy shadow-[var(--shadow-soft)]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Trusted Finance Partner Since 2019
              </span>

              <h1 className="mt-7 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.02] tracking-[-0.03em] text-navy">
                Your Complete Finance Team.{" "}
                <span className="text-gradient-hero">Built for Growth.</span>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Avin India designs, builds and runs the finance function behind growing
                businesses — accounting, CFO leadership, compliance and automation. One
                integrated team. One point of accountability.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
                >
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-6 py-3.5 text-sm font-semibold text-navy hover:border-primary hover:text-primary transition-all"
                >
                  Explore Solutions <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "25+", v: "Active Clients" },
                  { k: "8+", v: "Industries Served" },
                  { k: "33+", v: "Yrs Combined Leadership" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-navy">{s.k}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract dashboard illustration — no fictional financial values */}
            <div className="lg:col-span-5 relative animate-fade-up">
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-border shadow-[var(--shadow-elevated)] p-6 lg:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F57C00]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1E88E5]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-navy/40" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft text-primary px-2.5 py-1 text-[11px] font-semibold">
                    <Sparkles className="h-3 w-3" /> Finance OS
                  </span>
                </div>

                {/* Abstract KPI tiles */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: BarChart3, label: "Reports", tone: "bg-primary-soft text-primary" },
                    { icon: Workflow, label: "Automation", tone: "bg-accent-soft text-accent" },
                    { icon: ShieldCheck, label: "Compliance", tone: "bg-primary-soft text-primary" },
                  ].map((t) => (
                    <div key={t.label} className={`rounded-2xl p-3.5 ${t.tone}`}>
                      <t.icon className="h-4 w-4" />
                      <div className="mt-2 h-1.5 rounded-full bg-current/20" />
                      <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-current/30" />
                      <div className="mt-3 text-[11px] font-semibold opacity-80">{t.label}</div>
                    </div>
                  ))}
                </div>

                {/* Abstract chart — no numbers */}
                <div className="mt-5 rounded-2xl bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-[11px] text-muted-foreground">Trend</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-[11px] text-muted-foreground">Forecast</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-end justify-between h-24 gap-1.5">
                    {[42, 55, 48, 68, 60, 78, 72, 92, 85, 100, 88, 96].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-primary/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />
                </div>

                {/* Abstract activity rows */}
                <div className="mt-4 space-y-2">
                  {[70, 45, 85].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-soft text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <div className="flex-1">
                        <div className="h-1.5 rounded-full bg-navy/10" style={{ width: `${w}%` }} />
                        <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-navy/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-4 -left-6 animate-float items-center gap-2 rounded-2xl bg-white border border-border shadow-[var(--shadow-elevated)] px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-navy">Compliance</p>
                  <p className="text-[11px] text-muted-foreground">Always on time</p>
                </div>
              </div>
              <div className="hidden sm:flex absolute -bottom-5 -right-4 animate-float items-center gap-2 rounded-2xl bg-navy text-navy-foreground shadow-[var(--shadow-glow)] px-4 py-3" style={{ animationDelay: "1.5s" }}>
                <Sparkles className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-xs font-semibold">Finance Automation</p>
                  <p className="text-[11px] text-white/60">Built for scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR — star rating + grayscale logos */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5">
              <span className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                ))}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Trusted by Startups, SMEs &amp; High-Growth Companies
              </span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max marquee gap-16 items-center">
              {[...Array(2)].flatMap((_, dup) =>
                [
                  { name: "NIRA", hue: "#1565C0" },
                  { name: "BOMBAY PLAY", hue: "#F57C00" },
                  { name: "XYLO", hue: "#0F172A" },
                  { name: "NANO THREAD", hue: "#1E88E5" },
                  { name: "EVIONICS", hue: "#F57C00" },
                  { name: "ADVENTURE RECRUITMENT", hue: "#1565C0" },
                  { name: "D3", hue: "#0F172A" },
                  { name: "SIMPLIFY INNOVATIONS", hue: "#1E88E5" },
                ].map((n, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                    style={{ color: n.hue }}
                  >
                    {n.name}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Actually Do"
            title={<>Four pillars of a <span className="text-primary">modern finance function</span>.</>}
            description="Beyond the buzzwords — the exact areas we own for our clients, end to end."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 bg-gradient-to-br ${p.from} ${p.to}`}
                />
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <span
                      className={`inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.from} ${p.to} text-white shadow-[var(--shadow-elevated)] ring-1 ring-white/40 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <p.icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display font-bold text-2xl text-navy">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-navy"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Abstract mini-illustration */}
                  <div className="hidden sm:flex shrink-0 w-24 h-32 rounded-2xl bg-muted/70 border border-border flex-col justify-between p-3">
                    <div className="space-y-1.5">
                      <div className="h-1.5 rounded-full bg-navy/15" />
                      <div className="h-1.5 w-2/3 rounded-full bg-navy/10" />
                    </div>
                    <div className="flex items-end gap-1 h-10">
                      {[40, 65, 50, 80, 60].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm bg-gradient-to-t ${p.from} ${p.to} opacity-70`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  to="/services"
                  className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                >
                  Explore capability <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title={<>End-to-end finance, <span className="text-primary">one partner</span>.</>}
            description="From daily bookkeeping to fundraising strategy — a full-stack finance team for your business."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-7 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)] flex flex-col"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, rgba(21,101,192,0.35), transparent 70%)" }}
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full opacity-0 group-hover:opacity-60 blur-3xl transition-opacity duration-700"
                  style={{ background: "radial-gradient(circle, rgba(245,124,0,0.25), transparent 70%)" }}
                />
                <div className="relative flex items-start justify-between">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary via-primary to-navy text-primary-foreground shadow-[var(--shadow-elevated)] ring-1 ring-white/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="relative mt-6 font-display font-semibold text-lg text-navy">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link
                  to="/services"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-[var(--shadow-elevated)]"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      {/* WHY US */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-muted/40 via-white to-muted/60 border-y border-border">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Avin India"
            title={<>Built for founders who take <span className="text-primary">finance seriously</span>.</>}
            description="Not just filings — a finance partner that helps you fundraise, scale and exit."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="card-premium p-7">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-navy-foreground">
                  <w.icon className="h-6 w-6 text-accent" />
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CEOS CHOOSE AVIN INDIA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Boardroom Advantage"
            title={<>Why CEOs choose <span className="text-primary">Avin India</span>.</>}
            description="Six outcomes founders and CEOs consistently unlock when they partner with us."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCeos.map((c) => (
              <div key={c.title} className="card-premium p-7 group relative overflow-hidden">
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.from} ${c.to} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                />
                <span
                  className={`inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.from} ${c.to} text-white shadow-[var(--shadow-elevated)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}
                >
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display font-semibold text-lg text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / ANIMATED COUNTERS */}
      <section className="py-16 sm:py-20 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-grid" />
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #F57C00, transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { end: 2019, suffix: "", label: "Established", plain: true },
              { end: 12, suffix: "+", label: "Years Leadership Experience" },
              { end: 8, suffix: "+", label: "Industries Served" },
              { end: 0, suffix: "", label: "Finance Partner for Growing Businesses", staticText: "★" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl sm:text-5xl font-bold text-white">
                  {s.staticText ? (
                    <span className="text-accent">{s.staticText}</span>
                  ) : (
                    <Counter end={s.end} suffix={s.suffix} />
                  )}
                </div>
                <p className="mt-3 text-sm text-white/60 uppercase tracking-widest max-w-[16ch] mx-auto leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* INDUSTRIES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title={<>Domain expertise across <span className="text-primary">high-growth sectors</span>.</>}
            description="We speak the language of your industry — from unit economics to sector-specific compliance."
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="group card-premium p-6 flex flex-col items-center text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <ind.icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display font-semibold text-navy">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-grid" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Our Process
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              A proven 5-step engagement.
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              From first call to continuous optimization — clarity at every step.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block h-5 w-5 text-white/30" />
                  )}
                </div>
                <h3 className="mt-4 font-display font-semibold text-white text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-navy shadow-[var(--shadow-elevated)]">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20">
                      <span className="font-display font-bold text-6xl text-white">SB</span>
                    </div>
                    <p className="mt-6 text-white/80 text-sm">Founder Portrait</p>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-sm p-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Star className="h-5 w-5 fill-accent" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-navy text-sm">CA · Fractional CFO</p>
                    <p className="text-xs text-muted-foreground">15+ years finance leadership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Meet the Founder
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.1]">
                Sanjay Bhuwania
              </h2>
              <p className="mt-2 text-lg text-primary font-semibold">Founder & CEO</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Chartered Accountant and fractional CFO helping startups and growing businesses
                build world-class finance functions. Sanjay founded Avin India in 2019 with a simple
                mission — give ambitious founders the same finance rigor that unicorns have, from
                day one.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                  { k: "12+", v: "Years experience" },
                  { k: "CA", v: "Chartered Accountant" },
                  { k: "4", v: "Founding partners" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-muted p-4">
                    <div className="font-display text-2xl font-bold text-navy">{s.k}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/founder"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all"
              >
                Read full profile <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD GEN — Finance Health Check */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-elevated)]">
            <div
              className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40 animate-blob"
              style={{ background: "radial-gradient(circle, rgba(21,101,192,0.35), transparent 65%)" }}
            />
            <div
              className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full blur-3xl opacity-40 animate-blob"
              style={{ background: "radial-gradient(circle, rgba(245,124,0,0.30), transparent 65%)", animationDelay: "-10s" }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-10 sm:p-14 lg:p-16">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  <Sparkles className="h-3 w-3" /> Free Assessment
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.05] tracking-[-0.02em]">
                  Get a Free <span className="text-gradient-hero">Finance Health Check</span>.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                  Discover finance gaps in less than 3 minutes — accounting hygiene, compliance,
                  MIS quality and cash visibility, benchmarked against your stage.
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-navy max-w-xl">
                  {[
                    "12-point diagnostic",
                    "Stage-specific benchmarks",
                    "Actionable next steps",
                    "No obligation",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-semibold shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  Start Free Assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-muted/60 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>Loved by <span className="text-primary">founders & CFOs</span>.</>}
            description="Displaying anonymized placeholders — verified client testimonials will be published here soon."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="group relative card-premium p-8 flex flex-col overflow-hidden"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, rgba(21,101,192,0.35), transparent 65%)" }}
                />
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="relative mt-4 text-navy text-lg leading-relaxed font-display">
                  “{t.quote}”
                </blockquote>
                <figcaption className="relative mt-7 flex items-center gap-3 pt-6 border-t border-border">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-navy text-primary-foreground font-display font-bold ring-2 ring-primary-soft">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Latest Insights
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.1]">
                From the finance desk.
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View all insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((p, i) => (
              <article key={p.title} className="card-premium overflow-hidden group flex flex-col">
                <div
                  className="aspect-[16/10] bg-gradient-to-br from-primary via-primary/60 to-accent relative"
                  style={{
                    backgroundImage:
                      i === 0
                        ? "linear-gradient(135deg,#1565C0,#0F172A)"
                        : i === 1
                          ? "linear-gradient(135deg,#F57C00,#1565C0)"
                          : "linear-gradient(135deg,#0F172A,#1565C0)",
                  }}
                >
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground">{p.date} · 5 min read</p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy text-navy-foreground p-10 sm:p-14 lg:p-20">
            <div className="absolute inset-0 opacity-[0.08] bg-grid" />
            <div
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, #F57C00, transparent 60%)" }}
            />
            <div
              className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, #1565C0, transparent 60%)" }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
                  Let's build your finance function.
                </h2>
                <p className="mt-4 text-white/70 text-lg max-w-xl">
                  Book a free 30-min consultation with our team. No sales pitch — just a clear
                  roadmap.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-4 text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-[var(--shadow-elevated)]"
                >
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:bangalore@avinindia.in"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 text-white px-6 py-4 text-sm font-semibold hover:bg-white/15 transition-all"
                >
                  bangalore@avinindia.in
                </a>
              </div>
            </div>
            <ul className="relative mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/70">
              {["No obligation", "30-min call", "Senior partner", "Clear roadmap"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
