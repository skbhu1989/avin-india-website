/**
 * Content for Avin India industry landing pages.
 * Each targets sector-specific finance search intent (e.g. "finance for gaming companies").
 * Rendered through IndustryTemplate for consistency.
 */

export type IndustryContent = {
  slug: string;
  label: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  // The finance realities unique to this sector
  challenges: { title: string; desc: string }[];
  // How Avin India serves this sector
  approach: string;
  // Sector-specific capabilities
  highlights: string[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: IndustryContent[] = [
  {
    slug: "startups",
    label: "Startups",
    seoTitle: "Finance & Virtual CFO Services for Startups in India | Avin India",
    seoDescription:
      "Finance, compliance and virtual CFO services for startups — from seed to Series C. Fundraise readiness, cap tables, unit economics and investor reporting.",
    heroLead:
      "From seed to Series C, we give founders the finance function investors expect — clean books, fundraise-ready models, and board reporting that builds confidence.",
    challenges: [
      { title: "Fundraise readiness", desc: "Investors expect clean numbers, a solid model and an organised data room. Gaps here stall or sink rounds." },
      { title: "Cap table & ESOPs", desc: "Equity, ESOP pools and dilution get complex fast — and mistakes are expensive to unwind later." },
      { title: "Runway & unit economics", desc: "Founders need a live view of burn, runway and unit economics to steer, not just react." },
    ],
    approach:
      "We plug in as your finance team from day one — running operations, building the model, and stepping up as virtual CFO through your raise. You focus on building; we make the numbers investor-ready.",
    highlights: ["Fundraise-ready financial models", "Cap table & ESOP support", "Investor & board reporting", "Runway and burn tracking", "Clean, diligence-ready books", "Startup-friendly compliance"],
    faqs: [
      { q: "We're pre-revenue. Do we need finance support yet?", a: "Yes — earlier than most founders think. Clean books, a defensible model and basic compliance from the start make your next raise dramatically smoother and avoid expensive clean-ups later." },
      { q: "Can you help us get ready for a fundraise?", a: "That's a core strength. We build fundraise-ready models, organise your data room, prepare numbers for diligence and support you through investor conversations as your virtual CFO." },
    ],
  },
  {
    slug: "fintech",
    label: "FinTech",
    seoTitle: "Finance & Compliance Services for FinTech Companies | Avin India",
    seoDescription:
      "Specialised finance and compliance for FinTech — RBI compliance, escrow, PA/PG requirements, reconciliation-grade operations and investor reporting.",
    heroLead:
      "FinTech runs on trust and regulation. We bring reconciliation-grade finance operations and deep regulatory awareness to companies where getting it wrong is not an option.",
    challenges: [
      { title: "Regulatory complexity", desc: "RBI norms, PA/PG requirements and escrow rules make FinTech among the most heavily regulated sectors to operate in." },
      { title: "Reconciliation at scale", desc: "High transaction volumes demand finance operations that reconcile to the rupee, every day." },
      { title: "Investor scrutiny", desc: "FinTech investors expect institutional-grade reporting and airtight compliance." },
    ],
    approach:
      "We run FinTech finance with the precision the sector demands — daily reconciliations, regulatory-aware compliance and reporting built for investor and regulator scrutiny alike.",
    highlights: ["RBI-aware compliance", "Escrow & PA/PG support", "High-volume reconciliation", "FEMA & cross-border", "Institutional-grade reporting", "Audit-ready controls"],
    faqs: [
      { q: "Do you understand RBI and PA/PG compliance?", a: "Yes. We work with FinTech clients where RBI norms, escrow arrangements and payment-aggregator requirements are central, and we build finance operations and compliance around those realities." },
      { q: "Can you handle high transaction volumes?", a: "Yes. FinTech demands reconciliation-grade operations — we set up processes and automation so high volumes reconcile accurately and on time, not weeks later." },
    ],
  },
  {
    slug: "gaming",
    label: "Gaming",
    seoTitle: "Finance & Tax Compliance for Gaming Companies in India | Avin India",
    seoDescription:
      "Finance, GST and tax compliance for online gaming and RMG companies — GST on gaming, TDS 194BA, platform accounting and investor reporting.",
    heroLead:
      "The gaming sector's tax and compliance landscape is uniquely complex. We bring specialist knowledge of GST on gaming, TDS 194BA and RMG compliance to keep you clean and confident.",
    challenges: [
      { title: "GST on gaming", desc: "The GST treatment of online gaming is intricate and high-stakes — errors carry serious exposure." },
      { title: "TDS 194BA", desc: "Withholding on net winnings under 194BA demands precise, platform-level implementation." },
      { title: "Platform-level accounting", desc: "Player wallets, winnings and platform revenue need accounting built for the model." },
    ],
    approach:
      "We handle gaming finance end-to-end with sector-specific expertise — correct GST treatment, accurate 194BA withholding, and platform-level accounting that stands up to scrutiny.",
    highlights: ["GST on gaming", "TDS 194BA implementation", "RMG compliance", "Platform-level accounting", "Player wallet reconciliation", "Investor reporting"],
    faqs: [
      { q: "Do you understand GST on online gaming?", a: "Yes. GST on gaming and RMG is a specialist area we work in — we ensure the correct treatment and keep your filings accurate in a fast-changing regulatory environment." },
      { q: "Can you implement TDS 194BA correctly?", a: "Yes. Withholding on net winnings under section 194BA requires precise, platform-level implementation, which we set up and manage as part of the engagement." },
    ],
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    seoTitle: "Finance & Costing Services for Manufacturing Companies | Avin India",
    seoDescription:
      "Finance for manufacturing — product costing, inventory accounting, GST on works contracts and plant-level MIS for growing manufacturers.",
    heroLead:
      "Manufacturing finance lives and dies by costing and inventory. We bring the discipline of accurate product costing, inventory control and plant-level MIS to growing manufacturers.",
    challenges: [
      { title: "Product costing", desc: "Without accurate costing, margins are a guess — and pricing decisions are made blind." },
      { title: "Inventory accounting", desc: "Raw materials, WIP and finished goods must be tracked and valued correctly for true margins." },
      { title: "GST on works contracts", desc: "Works-contract GST and input credits add complexity that trips up many manufacturers." },
    ],
    approach:
      "We build manufacturing finance around what matters — accurate costing, disciplined inventory accounting and plant-level MIS — so you know your real margins and can price with confidence.",
    highlights: ["Product & job costing", "Inventory accounting", "GST on works contracts", "Plant-level MIS", "Vendor & procurement finance", "Margin analysis"],
    faqs: [
      { q: "Can you handle product costing and inventory?", a: "Yes. Accurate costing and inventory accounting are central to manufacturing finance — we set them up properly so your margins are real and your pricing decisions are informed." },
      { q: "Do you understand GST on works contracts?", a: "Yes. Works-contract GST and input credit complexities are part of what we manage for manufacturing clients." },
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    seoTitle: "Finance & Accounting Services for Healthcare Businesses | Avin India",
    seoDescription:
      "Finance for healthcare — multi-location accounting, insurance receivables, doctor-payout models and compliance for clinics, hospitals and health businesses.",
    heroLead:
      "Healthcare finance means many locations, insurance receivables and complex payout models. We bring structure and visibility to clinics, hospitals and growing health businesses.",
    challenges: [
      { title: "Multi-location accounting", desc: "Consolidating finances across clinics or centres needs a system, not spreadsheets." },
      { title: "Insurance receivables", desc: "Claims and insurance receivables tie up cash and need active tracking." },
      { title: "Doctor payout models", desc: "Revenue-share and consultant payout structures require careful, accurate accounting." },
    ],
    approach:
      "We give healthcare businesses consolidated, multi-location finance with active receivables management and clean payout accounting — so leadership sees the whole picture clearly.",
    highlights: ["Multi-location consolidation", "Insurance receivables tracking", "Doctor-payout accounting", "Compliance & GST", "Cash-flow visibility", "Management reporting"],
    faqs: [
      { q: "Can you consolidate finances across multiple locations?", a: "Yes. Multi-location consolidation is a core need for growing healthcare businesses — we set up systems and reporting that give leadership one clear, consolidated view." },
      { q: "Do you handle doctor payout and revenue-share models?", a: "Yes. Consultant and revenue-share payout structures need careful accounting, which we manage as part of healthcare engagements." },
    ],
  },
  {
    slug: "technology",
    label: "Technology & SaaS",
    seoTitle: "Finance & Virtual CFO for SaaS & Technology Companies | Avin India",
    seoDescription:
      "Finance for SaaS and technology — ARR/MRR reporting, revenue recognition, cohort analysis, transfer pricing, ESOPs and investor-grade reporting.",
    heroLead:
      "SaaS finance runs on metrics investors live by — ARR, MRR, cohorts and revenue recognition. We build finance functions that speak the language of technology investors.",
    challenges: [
      { title: "Revenue recognition", desc: "Subscription and usage revenue must be recognised correctly — a frequent diligence flashpoint." },
      { title: "SaaS metrics", desc: "ARR, MRR, churn and cohort analysis are the numbers your board and investors track." },
      { title: "Transfer pricing & ESOPs", desc: "Global structures and equity comp add layers most generalist accountants miss." },
    ],
    approach:
      "We run technology finance with SaaS fluency — correct revenue recognition, board-ready ARR/MRR and cohort reporting, and handling of transfer pricing and ESOPs as you scale.",
    highlights: ["ARR / MRR reporting", "Revenue recognition", "Cohort & churn analysis", "Transfer pricing", "ESOP accounting", "Investor-grade MIS"],
    faqs: [
      { q: "Do you understand SaaS metrics and revenue recognition?", a: "Yes. ARR, MRR, cohort analysis and subscription revenue recognition are central to how we report for SaaS clients — the numbers your board and investors expect." },
      { q: "Can you handle transfer pricing and ESOPs?", a: "Yes. Global structures and equity compensation are common in technology companies, and we handle the transfer pricing and ESOP accounting they require." },
    ],
  },
  {
    slug: "construction",
    label: "Construction",
    seoTitle: "Finance & Project Accounting for Construction Companies | Avin India",
    seoDescription:
      "Finance for construction — project accounting, RERA compliance, percentage-of-completion method and vendor management for builders and contractors.",
    heroLead:
      "Construction finance is project finance. We bring project-level accounting, RERA compliance and percentage-of-completion discipline to builders and contractors.",
    challenges: [
      { title: "Project accounting", desc: "Costs, revenues and margins must be tracked project-by-project, not just company-wide." },
      { title: "RERA compliance", desc: "RERA imposes specific financial and reporting obligations that carry real consequences." },
      { title: "Percentage-of-completion", desc: "Recognising revenue by stage of completion needs a disciplined, defensible method." },
    ],
    approach:
      "We structure construction finance around projects — project-level P&L, RERA-aware compliance and percentage-of-completion revenue — so you know exactly where each project stands.",
    highlights: ["Project-level accounting", "RERA compliance", "Percentage-of-completion", "Vendor & subcontractor finance", "Cash-flow by project", "Management reporting"],
    faqs: [
      { q: "Can you do project-level accounting?", a: "Yes. Construction finance requires tracking costs, revenue and margin per project — we set up project-level accounting so you see where each one stands, not just the company total." },
      { q: "Do you handle RERA compliance?", a: "Yes. RERA's financial and reporting obligations are part of what we manage for construction and real estate clients." },
    ],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    seoTitle: "Finance & Accounting Services for Real Estate Companies | Avin India",
    seoDescription:
      "Finance for real estate — SPV structures, RERA and GST, joint-venture accounting and investor waterfall models for developers and investors.",
    heroLead:
      "Real estate finance means SPVs, joint ventures and investor waterfalls. We bring structure to complex ownership and the reporting investors and regulators expect.",
    challenges: [
      { title: "SPV structures", desc: "Special-purpose vehicles need clean, separate accounting and consolidation." },
      { title: "JV & waterfall models", desc: "Joint ventures and investor waterfalls demand precise, defensible distribution accounting." },
      { title: "RERA & GST", desc: "Real estate carries specific RERA and GST obligations that must be handled correctly." },
    ],
    approach:
      "We handle real estate finance across complex structures — SPV and JV accounting, investor waterfall models, and RERA/GST compliance — with the clarity investors and regulators require.",
    highlights: ["SPV accounting", "JV & waterfall models", "RERA compliance", "GST on real estate", "Investor reporting", "Consolidated finance"],
    faqs: [
      { q: "Can you handle SPV and joint-venture accounting?", a: "Yes. SPV structures, JV accounting and investor waterfall models are core to real estate finance, and we set them up with the precision investors expect." },
      { q: "Do you manage RERA and GST for real estate?", a: "Yes. Real estate carries specific RERA and GST obligations, which we handle as part of the engagement." },
    ],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
