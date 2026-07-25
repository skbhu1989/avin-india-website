/**
 * Content for the four Avin India Solution pages.
 * Written for commercial-intent SEO + conversion. Each solution renders through
 * the shared SolutionTemplate so design stays consistent and edits are trivial.
 *
 * FAQ answers here MUST match what renders on-page (they feed FAQ schema).
 */

export type SolutionContent = {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  // The buyer problem this solution solves — the "why now"
  problem: { heading: string; body: string };
  // What's included — grouped capabilities
  capabilities: { name: string; desc: string }[];
  // Outcomes the client gets — the "why us"
  outcomes: string[];
  // Who it's for
  bestFor: string;
  faqs: { q: string; a: string }[];
  serviceType: string; // for Service schema
};

export const SOLUTIONS: SolutionContent[] = [
  {
    slug: "finance-operations",
    eyebrow: "Solution 01 · The Foundation",
    title: "Finance Operations",
    tagline: "Accurate, always-current books that leadership can rely on.",
    seoTitle: "Outsourced Finance & Accounting Operations in Bangalore | Avin India",
    seoDescription:
      "Outsourced accounting, bookkeeping, payroll and reconciliations run by a dedicated team. Disciplined monthly closes and audit-ready books for growing businesses.",
    heroLead:
      "We run your daily finance engine — bookkeeping, payroll, receivables, payables and reconciliations — with the discipline of an in-house team and none of the overhead.",
    problem: {
      heading: "When the books fall behind, every decision gets harder.",
      body: "Late closes, messy ledgers and reconciliations that never quite tie out are not just an accounting nuisance — they blind leadership. You cannot plan cash, answer an investor, or pass an audit on numbers you do not trust. Most growing businesses patch this with a junior accountant and a tax vendor, then discover no one actually owns the monthly close. Avin India takes ownership of the entire operation, so your books are current, clean and reliable — every month, on a fixed cadence.",
    },
    capabilities: [
      { name: "Accounting & Bookkeeping", desc: "Complete, audit-ready books on modern platforms — Zoho, QuickBooks or Tally — maintained on a daily, weekly or monthly cadence." },
      { name: "Monthly Close", desc: "A disciplined close process with reconciliations, schedules and a reporting pack delivered on a fixed date every month." },
      { name: "Payroll", desc: "End-to-end payroll with PF, ESI, PT and TDS — accurate, on time and fully compliant." },
      { name: "Accounts Payable", desc: "Vendor bills, approvals and payment runs managed with clear controls and no missed dues." },
      { name: "Accounts Receivable", desc: "Invoicing, collections follow-up and ageing visibility so cash comes in faster." },
      { name: "Bank & Ledger Reconciliation", desc: "Every account tied out and reconciled, so your numbers are always trustworthy." },
    ],
    outcomes: [
      "Books closed on a fixed date, every single month",
      "Numbers leadership can actually rely on for decisions",
      "Audit-ready records with clean supporting schedules",
      "One accountable team instead of scattered vendors",
    ],
    bestFor: "Startups and SMEs whose finance operations have outgrown a single accountant or a part-time bookkeeper.",
    serviceType: "Outsourced Accounting and Finance Operations",
    faqs: [
      { q: "What accounting software do you work on?", a: "We work on the platform that fits your business — Zoho Books, QuickBooks and Tally are the most common. If you already use one, we adopt it; if you are starting fresh, we recommend the right fit and set it up." },
      { q: "Can you take over books that are currently a mess?", a: "Yes. Many clients come to us with a backlog. We start with a clean-up: reconciling accounts, correcting entries and building proper schedules, then move you onto a disciplined monthly close going forward." },
      { q: "Do you handle payroll and statutory dues too?", a: "Yes. Payroll — including PF, ESI, PT and TDS — is part of Finance Operations. We process it accurately and ensure the statutory filings and payments happen on time." },
      { q: "How is this different from hiring an in-house accountant?", a: "You get a full team — not a single person — with senior review built in, at a lower total cost than a full-time hire. There is no key-person risk, no leave gaps, and the close never depends on one individual." },
    ],
  },
  {
    slug: "cfo-office",
    eyebrow: "Solution 02 · The Leadership",
    title: "CFO Office",
    tagline: "CFO-level thinking, without the full-time CFO cost.",
    seoTitle: "Virtual CFO & Fractional CFO Services in Bangalore | Avin India",
    seoDescription:
      "Virtual CFO and fractional CFO services for startups and SMEs — budgeting, MIS, cash-flow forecasting, FP&A and investor reporting from an experienced finance leader.",
    heroLead:
      "Senior finance leadership in the room when growth, funding and hiring decisions are made — budgeting, MIS, forecasting, FP&A and investor reporting, led by a Chartered Accountant with CFO experience.",
    problem: {
      heading: "Founders make critical money decisions without a finance leader in the room.",
      body: "A bookkeeper records what happened. A CFO tells you what to do next. Between those two sits the gap that stalls most growing companies: no forecast to plan cash, no MIS to spot a leak, no model to raise on, no one framing the numbers for the board. Hiring a full-time CFO costs a fortune and is overkill at your stage. The CFO Office gives you that leadership fractionally — the same rigour, a fraction of the cost, scaled to exactly what you need.",
    },
    capabilities: [
      { name: "Virtual / Fractional CFO", desc: "An experienced finance leader engaged part-time — in your leadership conversations, owning the finance strategy." },
      { name: "Budgeting & Forecasting", desc: "Annual budgets and rolling forecasts that turn your plan into numbers you can steer by." },
      { name: "Cash-Flow Management", desc: "Forward cash-flow visibility so you always know your runway and can act before it tightens." },
      { name: "MIS & Management Reporting", desc: "Monthly dashboards — revenue, margins, cohorts, burn — built for decisions, not just records." },
      { name: "FP&A", desc: "Financial planning and analysis that connects unit economics to strategy and highlights what to fix." },
      { name: "Investor & Board Reporting", desc: "Board decks, MIS packs and investor updates that build confidence and stand up to scrutiny." },
      { name: "Fundraise Readiness", desc: "Financial models, data rooms and diligence support that get you raise-ready." },
    ],
    outcomes: [
      "A live view of runway and cash at all times",
      "Board and investor reporting that builds trust",
      "Fundraise-ready models and clean diligence",
      "Growth decisions backed by real numbers, not gut feel",
    ],
    bestFor: "Funded startups, VC-backed companies and scaling SMEs that need finance leadership but not yet a full-time CFO.",
    serviceType: "Virtual CFO and Financial Advisory Services",
    faqs: [
      { q: "What exactly is a virtual CFO?", a: "A virtual (or fractional) CFO is an experienced finance leader who works with you part-time — leading budgeting, forecasting, MIS, FP&A and investor reporting — for a fraction of a full-time CFO's cost. You get senior judgement in the room without the full-time salary." },
      { q: "When does my business need a CFO Office?", a: "Usually when you are raising or have raised capital, reporting to investors, planning aggressive growth, or making decisions on cash and hiring without a finance leader to frame them. If any of those sound familiar, the gap is already costing you." },
      { q: "Can you help us prepare for a fundraise?", a: "Yes. We build fundraise-ready financial models, organise your data room, prepare the numbers for diligence and support you through investor conversations — a core part of the CFO Office engagement." },
      { q: "How much time does a fractional CFO commit?", a: "It scales to your needs — from a structured few days a month for reporting and reviews, up to deep involvement during a fundraise or transformation. We right-size the engagement so you pay only for the leadership you need." },
    ],
  },
  {
    slug: "compliance-governance",
    eyebrow: "Solution 03 · The Protection",
    title: "Compliance & Governance",
    tagline: "Turn compliance from a recurring worry into a managed calendar.",
    seoTitle: "GST, Income Tax, ROC & Corporate Compliance Services | Avin India",
    seoDescription:
      "End-to-end compliance and governance — GST, income tax, ROC and MCA filings, secretarial, internal audit and FEMA — managed proactively so you never miss a deadline.",
    heroLead:
      "Stay ahead of GST, income tax, ROC, FEMA and secretarial requirements — managed on a proactive calendar, with governance that stands up to due diligence.",
    problem: {
      heading: "Compliance run on reminders is a risk waiting to surface.",
      body: "Missed a GST return, a ROC filing, a board resolution — the penalties are real, but the bigger cost shows up later, in a funding round or an acquisition, when diligence uncovers gaps that spook investors and stall the deal. Most growing companies juggle three or four separate vendors for tax, GST, ROC and secretarial work, with no one owning the whole compliance picture. We consolidate it into a single managed calendar, so nothing slips and your governance is always diligence-ready.",
    },
    capabilities: [
      { name: "GST", desc: "Registrations, monthly and annual returns, reconciliation, refunds and litigation support." },
      { name: "Income Tax", desc: "Corporate and personal tax planning, filings, TDS and representation before authorities." },
      { name: "ROC & MCA Filings", desc: "Annual filings, event-based compliance, board resolutions and statutory registers." },
      { name: "Secretarial Compliance", desc: "Company-secretary-led governance, minutes, filings and regulatory advisory." },
      { name: "Internal Audit", desc: "Risk-based internal audit, SOPs, controls and process improvement." },
      { name: "FEMA & Cross-Border", desc: "FDI, ODI, ECB and RBI reporting for companies with foreign investment or operations." },
    ],
    outcomes: [
      "A single compliance calendar — nothing missed",
      "Governance that passes investor and acquirer diligence",
      "Company-secretary-led corporate compliance",
      "Penalties and last-minute scrambles eliminated",
    ],
    bestFor: "Companies that want compliance owned end-to-end — especially those raising capital, taking foreign investment, or preparing for diligence.",
    serviceType: "Tax, Regulatory and Corporate Compliance Services",
    faqs: [
      { q: "Do you handle all our filings — GST, income tax and ROC?", a: "Yes. Compliance & Governance covers the full spectrum: GST, income tax and TDS, ROC and MCA filings, and company-secretarial work — all on one managed calendar so nothing falls between vendors." },
      { q: "We have a compliance backlog. Can you fix it?", a: "Yes. We start by assessing your current compliance status, identify what is overdue or missing, regularise it, and then put you on a proactive calendar so it never builds up again." },
      { q: "Do you have a Company Secretary for ROC and governance?", a: "Yes. One of our founders, Nibha Kedia, is a Company Secretary who leads ROC, secretarial compliance, corporate governance and regulatory advisory — so this work is handled by a qualified professional, not outsourced." },
      { q: "Can you help with FEMA and foreign investment reporting?", a: "Yes. We handle FEMA compliance including FDI, ODI, ECB and RBI reporting — important for any company that has taken foreign investment or has cross-border operations." },
    ],
  },
  {
    slug: "finance-transformation",
    eyebrow: "Solution 04 · The Multiplier",
    title: "Finance Transformation",
    tagline: "Modernise how finance runs — automation, dashboards and AI.",
    seoTitle: "Finance Automation & Transformation Services | Avin India",
    seoDescription:
      "Finance transformation for growing businesses — process automation, OCR, live dashboards and AI-assisted workflows that cut manual effort and deliver real-time numbers.",
    heroLead:
      "We modernise how your finance function runs — automation, OCR-driven workflows, live dashboards and AI-assisted processes that cut manual effort and put real-time numbers in front of decision-makers.",
    problem: {
      heading: "Manual finance processes quietly tax every growing company.",
      body: "Hours lost to data entry. Numbers that are always a month old. Reports rebuilt by hand every cycle. As you scale, manual finance does not just cost time — it delays decisions and hides problems until they are expensive. Finance Transformation re-engineers the plumbing: automation removes the repetitive work, OCR digitises documents, and live dashboards replace stale spreadsheets — so your team spends time on judgement, not data entry, and leadership sees the truth in real time.",
    },
    capabilities: [
      { name: "Process Automation", desc: "Automating repetitive finance workflows — from invoice processing to reconciliations — to remove manual effort." },
      { name: "OCR & Document Digitisation", desc: "OCR-driven capture that turns bills and documents into clean data automatically." },
      { name: "Live Dashboards", desc: "Real-time finance dashboards so leadership sees current numbers, not last month's." },
      { name: "Finance-Tech Implementation", desc: "Selecting and implementing the right stack — Zoho, QuickBooks, Tally and connected tools." },
      { name: "AI-Assisted Workflows", desc: "Applying AI where it genuinely helps — anomaly spotting, categorisation and faster reporting." },
      { name: "Process Improvement", desc: "Re-designing finance processes and controls so they scale cleanly with your growth." },
    ],
    outcomes: [
      "Hours of manual work removed every month",
      "Real-time numbers instead of month-old reports",
      "A finance stack that scales with your growth",
      "Your team freed for judgement, not data entry",
    ],
    bestFor: "Growing businesses whose finance processes are still manual, and companies that want real-time visibility as they scale.",
    serviceType: "Finance Automation and Transformation Services",
    faqs: [
      { q: "What does finance transformation actually involve?", a: "In practice: automating repetitive workflows, using OCR to digitise documents, implementing the right finance software, and building live dashboards. The goal is less manual effort and real-time visibility — a finance function that scales without adding headcount for every new task." },
      { q: "Do we need to change our accounting software?", a: "Not necessarily. We work with your existing stack where it fits, and recommend changes only where they deliver a clear gain. The aim is to improve how finance runs, not to force a rip-and-replace." },
      { q: "How does AI fit into this?", a: "We apply AI where it genuinely helps — spotting anomalies, categorising transactions and speeding up reporting — always with professional review. It augments the team; it does not replace the judgement that finance decisions require." },
      { q: "Can transformation run alongside our current operations?", a: "Yes. We improve the processes while keeping the lights on — often starting with Finance Operations, then layering automation and dashboards on top so there is no disruption to your monthly cycle." },
    ],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
