import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Calculator,
  ShieldCheck,
  BarChart3,
  Wallet,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/finance-health-check")({
  head: () => ({
    meta: [
      { title: "Free Finance Health Check — 3-Minute Diagnostic | Avin India" },
      {
        name: "description",
        content:
          "Take Avin India's free Finance Health Check. Answer 15 quick questions on accounting, compliance, reporting and cash controls to get a scored snapshot of your finance function.",
      },
      { property: "og:title", content: "Finance Health Check · Avin India" },
      {
        property: "og:description",
        content: "A 3-minute diagnostic of your finance function — scored across four areas.",
      },
      { property: "og:url", content: "/finance-health-check" },
    ],
    links: [{ rel: "canonical", href: "/finance-health-check" }],
  }),
  component: HealthCheckPage,
});

const WHATSAPP_NUMBER = "918792886951";

type Category = "Accounting" | "Compliance" | "Reporting & MIS" | "Cash & Controls";

const categoryMeta: Record<Category, { icon: typeof Calculator; blurb: string }> = {
  Accounting: { icon: Calculator, blurb: "Books, bookkeeping discipline and monthly closes." },
  Compliance: { icon: ShieldCheck, blurb: "GST, tax, ROC and secretarial obligations." },
  "Reporting & MIS": { icon: BarChart3, blurb: "Management reporting, MIS and decision-grade numbers." },
  "Cash & Controls": { icon: Wallet, blurb: "Cash-flow visibility, receivables and internal controls." },
};

type Q = { id: string; category: Category; text: string };

// 15 questions across 4 areas. Each answered on a 0–3 maturity scale.
const QUESTIONS: Q[] = [
  { id: "a1", category: "Accounting", text: "Are your books of accounts updated and reconciled every month?" },
  { id: "a2", category: "Accounting", text: "Do you close your monthly accounts within 10 days of month-end?" },
  { id: "a3", category: "Accounting", text: "Is your payroll processed accurately and on time, with statutory dues (PF, ESI, TDS) handled?" },
  { id: "a4", category: "Accounting", text: "Are your bank accounts and ledgers reconciled without long-pending differences?" },

  { id: "c1", category: "Compliance", text: "Are your GST returns filed correctly and on time, every period?" },
  { id: "c2", category: "Compliance", text: "Are your income tax and TDS filings up to date with no pending notices?" },
  { id: "c3", category: "Compliance", text: "Are your ROC / MCA and secretarial filings current?" },
  { id: "c4", category: "Compliance", text: "Do you have a single tracked calendar for all compliance due dates?" },

  { id: "r1", category: "Reporting & MIS", text: "Do you receive a monthly MIS or management report you can actually act on?" },
  { id: "r2", category: "Reporting & MIS", text: "Can you see revenue, margins and key metrics without waiting for someone to compile them?" },
  { id: "r3", category: "Reporting & MIS", text: "Are your numbers investor / board / bank-ready if asked today?" },
  { id: "r4", category: "Reporting & MIS", text: "Do you have budgets or forecasts you track actuals against?" },

  { id: "k1", category: "Cash & Controls", text: "Do you have clear visibility of your cash runway and upcoming cash flow?" },
];

const ANSWER_OPTIONS = [
  { label: "Yes, consistently", value: 3 },
  { label: "Mostly", value: 2 },
  { label: "Sometimes", value: 1 },
  { label: "No / Not sure", value: 0 },
];

const ENTITY_OPTIONS = ["Private Limited", "LLP", "Partnership", "Proprietorship", "Other"];
const FUNDING_OPTIONS = ["Bootstrapped", "Angel / Seed funded", "VC funded (Series A+)"];
const RAISE_OPTIONS = ["Yes, actively raising", "Yes, in the next 12 months", "Not right now"];

type Contact = {
  name: string;
  company: string;
  email: string;
  phone: string;
  entity: string;
  funding: string;
  raise: string;
};

function HealthCheckPage() {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [contact, setContact] = useState<Contact>({
    name: "",
    company: "",
    email: "",
    phone: "",
    entity: "",
    funding: "",
    raise: "",
  });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [qIndex, setQIndex] = useState(0);

  const contactValid =
    contact.name.trim().length > 1 &&
    contact.company.trim().length > 0 &&
    /\S+@\S+\.\S+/.test(contact.email) &&
    contact.phone.trim().length >= 8 &&
    contact.entity !== "" &&
    contact.funding !== "" &&
    contact.raise !== "";

  const totalQ = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  // Scoring
  const scores = useMemo(() => {
    const byCat: Record<Category, { got: number; max: number }> = {
      Accounting: { got: 0, max: 0 },
      Compliance: { got: 0, max: 0 },
      "Reporting & MIS": { got: 0, max: 0 },
      "Cash & Controls": { got: 0, max: 0 },
    };
    for (const q of QUESTIONS) {
      byCat[q.category].max += 3;
      byCat[q.category].got += answers[q.id] ?? 0;
    }
    const totalGot = Object.values(byCat).reduce((s, c) => s + c.got, 0);
    const totalMax = Object.values(byCat).reduce((s, c) => s + c.max, 0);
    const overall = Math.round((totalGot / totalMax) * 100);
    return { byCat, overall };
  }, [answers]);

  const band =
    scores.overall >= 80
      ? { label: "Strong", tone: "text-primary", desc: "Your finance function is in good shape. A few refinements could take it from solid to boardroom-grade." }
      : scores.overall >= 55
        ? { label: "Developing", tone: "text-accent", desc: "The foundations are there, but there are clear gaps that will slow you down as you scale." }
        : { label: "Needs Attention", tone: "text-destructive", desc: "Several important areas need strengthening. The good news: these are exactly the things a strong finance partner fixes fast." };

  function answer(qid: string, value: number) {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
    // advance
    setTimeout(() => {
      if (qIndex < totalQ - 1) setQIndex((i) => i + 1);
      else setStep("result");
    }, 180);
  }

  function buildWhatsApp() {
    const lines: string[] = [];
    lines.push("*Finance Health Check — New Enquiry*");
    lines.push("");
    lines.push(`Name: ${contact.name}`);
    lines.push(`Company: ${contact.company}`);
    lines.push(`Email: ${contact.email}`);
    lines.push(`Phone: ${contact.phone}`);
    lines.push(`Entity: ${contact.entity}`);
    lines.push(`Funding: ${contact.funding}`);
    lines.push(`Looking to raise: ${contact.raise}`);
    lines.push("");
    lines.push(`Overall Score: ${scores.overall}/100 (${band.label})`);
    (Object.keys(scores.byCat) as Category[]).forEach((cat) => {
      const c = scores.byCat[cat];
      lines.push(`- ${cat}: ${Math.round((c.got / c.max) * 100)}%`);
    });
    lines.push("");
    lines.push("I'd like to discuss my results.");
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  return (
    <SiteLayout>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Finance Health Check", path: "/finance-health-check" },
        ])}
      />

      <section className="bg-hero-gradient border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy shadow-[var(--shadow-soft)]">
            Free · 3 Minutes · No Obligation
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-navy tracking-[-0.02em]">
            Finance Health Check
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A quick diagnostic of your finance function across accounting, compliance, reporting and
            cash — with a scored snapshot and the areas that matter most right now.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* INTRO / CONTACT CAPTURE */}
          {step === "intro" && (
            <div className="card-premium p-7 sm:p-9">
              <div className="grid grid-cols-2 gap-3 mb-8">
                {(Object.keys(categoryMeta) as Category[]).map((cat) => {
                  const Icon = categoryMeta[cat].icon;
                  return (
                    <div key={cat} className="rounded-xl bg-muted/60 p-4">
                      <Icon className="h-5 w-5 text-primary" />
                      <p className="mt-2 font-display font-semibold text-sm text-navy">{cat}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        {categoryMeta[cat].blurb}
                      </p>
                    </div>
                  );
                })}
              </div>

              <h2 className="font-display text-xl font-bold text-navy">First, who are we preparing this for?</h2>
              <p className="text-sm text-muted-foreground mt-1">
                We'll use these details to share your results and, if you'd like, a follow-up from a
                founder.
              </p>

              <div className="mt-6 grid gap-4">
                <Field label="Full name" value={contact.name} onChange={(v) => setContact({ ...contact, name: v })} placeholder="e.g. Rahul Sharma" />
                <Field label="Company" value={contact.company} onChange={(v) => setContact({ ...contact, company: v })} placeholder="e.g. Acme Technologies Pvt Ltd" />
                <Field label="Work email" type="email" value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} placeholder="you@company.com" />
                <Field label="Phone / WhatsApp" value={contact.phone} onChange={(v) => setContact({ ...contact, phone: v })} placeholder="+91 ..." />
                <SelectField label="Type of entity" value={contact.entity} onChange={(v) => setContact({ ...contact, entity: v })} options={ENTITY_OPTIONS} placeholder="Select entity type" />
                <SelectField label="Funding status" value={contact.funding} onChange={(v) => setContact({ ...contact, funding: v })} options={FUNDING_OPTIONS} placeholder="Select funding status" />
                <SelectField label="Are you looking to raise funds?" value={contact.raise} onChange={(v) => setContact({ ...contact, raise: v })} options={RAISE_OPTIONS} placeholder="Select an option" />
              </div>

              <button
                disabled={!contactValid}
                onClick={() => setStep("quiz")}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] enabled:hover:-translate-y-0.5 enabled:hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Start the Health Check <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Your details stay private. No spam — this is a diagnostic, not a mailing list.
              </p>
            </div>
          )}

          {/* QUIZ */}
          {step === "quiz" && (
            <div className="card-premium p-7 sm:p-9">
              {/* progress */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-semibold uppercase tracking-wider text-primary">
                  {QUESTIONS[qIndex].category}
                </span>
                <span>
                  {qIndex + 1} / {totalQ}
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                  style={{ width: `${((qIndex + (answers[QUESTIONS[qIndex].id] != null ? 1 : 0)) / totalQ) * 100}%` }}
                />
              </div>

              <h2 className="mt-8 font-display text-xl sm:text-2xl font-bold text-navy leading-snug">
                {QUESTIONS[qIndex].text}
              </h2>

              <div className="mt-6 grid gap-3">
                {ANSWER_OPTIONS.map((opt) => {
                  const selected = answers[QUESTIONS[qIndex].id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => answer(QUESTIONS[qIndex].id, opt.value)}
                      className={`text-left rounded-xl border px-5 py-4 text-sm font-medium transition-all ${
                        selected
                          ? "border-primary bg-primary-soft text-primary"
                          : "border-border bg-white text-navy hover:border-primary hover:bg-muted/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => (qIndex > 0 ? setQIndex((i) => i - 1) : setStep("intro"))}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <span className="text-xs text-muted-foreground">{answeredCount} of {totalQ} answered</span>
              </div>
            </div>
          )}

          {/* RESULT */}
          {step === "result" && (
            <div className="card-premium p-7 sm:p-9 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary-soft">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy">Your Finance Health Score</h2>

              <div className="mt-6 flex items-end justify-center gap-2">
                <span className="font-display text-6xl font-bold text-gradient-hero leading-none">
                  {scores.overall}
                </span>
                <span className="text-2xl text-muted-foreground mb-1">/100</span>
              </div>
              <p className={`mt-2 font-display font-bold ${band.tone}`}>{band.label}</p>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{band.desc}</p>

              {/* category breakdown */}
              <div className="mt-8 grid gap-3 text-left">
                {(Object.keys(scores.byCat) as Category[]).map((cat) => {
                  const c = scores.byCat[cat];
                  const pct = Math.round((c.got / c.max) * 100);
                  const Icon = categoryMeta[cat].icon;
                  return (
                    <div key={cat} className="rounded-xl border border-border p-4">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 font-display font-semibold text-sm text-navy">
                          <Icon className="h-4 w-4 text-primary" /> {cat}
                        </span>
                        <span className="text-sm font-semibold text-navy">{pct}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full ${pct >= 80 ? "bg-primary" : pct >= 55 ? "bg-accent" : "bg-destructive"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-navy text-white p-6">
                <h3 className="font-display font-bold text-lg">Get your detailed breakdown</h3>
                <p className="mt-2 text-sm text-white/80">
                  Send your results to our team on WhatsApp — a founder will review them and share
                  the three highest-impact fixes for {contact.company || "your business"}, free.
                </p>
                <a
                  href={buildWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> Send my results on WhatsApp
                </a>
                <p className="mt-3 text-xs text-white/60">
                  Opens WhatsApp with your results pre-filled — just tap send.
                </p>
              </div>

              <button
                onClick={() => {
                  setAnswers({});
                  setQIndex(0);
                  setStep("intro");
                }}
                className="mt-5 text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
              >
                Retake the check
              </button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15 ${value ? "text-navy" : "text-muted-foreground"}`}
      >
        <option value="" disabled>
          {placeholder ?? "Select…"}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-navy">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
