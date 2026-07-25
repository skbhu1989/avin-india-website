/**
 * Avin India — Single source of truth for business identity.
 * Used by JSON-LD schema, sitemap, and metadata. Update NAP details here only.
 */

export const SITE = {
  name: "Avin India",
  legalName: "Avin India Private Limited",
  // IMPORTANT: set this to your final production domain before launch.
  url: "https://avinindia.in",
  description:
    "Avin India is a finance transformation and advisory firm in Bangalore. We build and run the complete finance function for growing businesses — accounting, virtual CFO, compliance and automation under one leadership team.",
  founded: "2019",
  email: "bangalore@avinindia.in",
  phone: "+91 87928 86951",
  phoneRaw: "+918792886951",
  whatsapp: "https://wa.me/918792886951",
  address: {
    locality: "Indiranagar",
    region: "Karnataka",
    city: "Bangalore",
    country: "IN",
  },
  // Add real profile URLs when available; empty ones are filtered out of schema.
  socials: [
    "https://www.linkedin.com/company/avin-india/",
  ].filter(Boolean),
} as const;

export const FOUNDERS = [
  {
    name: "Sanjay Bhuwania",
    jobTitle: "Founder & CEO",
    credential: "Chartered Accountant",
    knowsAbout: [
      "Finance Strategy",
      "Fractional CFO",
      "Business Planning",
      "Investor Reporting",
      "Finance Transformation",
    ],
  },
  {
    name: "Bishal Shaw",
    jobTitle: "Founder & Director, Finance Advisory",
    credential: "Chartered Accountant",
    knowsAbout: ["Accounting", "Financial Reporting", "Taxation", "Audit Support"],
  },
  {
    name: "Nikita Aggarwal",
    jobTitle: "Founder & Director, Enterprise Solutions",
    credential: "MBA",
    knowsAbout: ["Enterprise Solutions", "Business Process Improvement", "Client Success"],
  },
  {
    name: "Nibha Kedia",
    jobTitle: "Founder & Director, Corporate Compliance",
    credential: "Company Secretary",
    knowsAbout: ["ROC", "Corporate Governance", "Secretarial Compliance", "Regulatory Advisory"],
  },
] as const;

/** All indexable routes, kept in sync with src/routes. Used by the sitemap. */
export const SITEMAP_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/industries", priority: 0.8, changefreq: "monthly" },
  { path: "/founder", priority: 0.7, changefreq: "monthly" },
  { path: "/technology", priority: 0.7, changefreq: "monthly" },
  { path: "/blogs", priority: 0.6, changefreq: "weekly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
] as const;
