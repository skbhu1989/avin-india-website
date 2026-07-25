/**
 * JSON-LD schema builders for Avin India.
 * These describe the business to Google/Bing so it can show rich results
 * (company knowledge panel, FAQ rich snippets, people entities).
 */
import { SITE, FOUNDERS } from "./site-config";

const ORG_ID = `${SITE.url}/#organization`;

/** Organization + ProfessionalService — the master entity for the whole site. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    foundingDate: SITE.founded,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      email: SITE.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    founder: FOUNDERS.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.jobTitle,
    })),
    knowsAbout: [
      "Virtual CFO Services",
      "Fractional CFO",
      "Finance Transformation",
      "Accounting and Bookkeeping",
      "GST Compliance",
      "Corporate Compliance",
      "Financial Reporting",
      "Finance Automation",
    ],
    ...(SITE.socials.length ? { sameAs: SITE.socials } : {}),
  };
}

/** A single founder as a Person entity, linked back to the organization. */
export function personSchema(founder: (typeof FOUNDERS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.jobTitle,
    worksFor: { "@id": ORG_ID },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: founder.credential,
    },
    knowsAbout: [...founder.knowsAbout],
  };
}

/** All four founders as an array of Person entities. */
export function allFoundersSchema() {
  return FOUNDERS.map(personSchema);
}

/** FAQPage schema. Pass [{ q, a }] — a must match the visible on-page text. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** Breadcrumb trail. Pass [{ name, path }] from home to current page. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

/** A Service offered, linked to the provider org. Use on solution pages. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
  };
}
