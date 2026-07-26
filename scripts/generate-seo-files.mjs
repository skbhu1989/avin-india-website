/**
 * Generates public/sitemap.xml and public/robots.txt from the site config.
 * Run after adding or removing pages:  node scripts/generate-seo-files.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// Keep in sync with src/lib/site-config.ts (kept inline so this script has no build deps).
const SITE_URL = "https://avinindia.in";
const ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/finance-health-check", priority: 0.9, changefreq: "monthly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/solutions/finance-operations", priority: 0.9, changefreq: "monthly" },
  { path: "/solutions/cfo-office", priority: 0.9, changefreq: "monthly" },
  { path: "/solutions/compliance-governance", priority: 0.9, changefreq: "monthly" },
  { path: "/solutions/finance-transformation", priority: 0.9, changefreq: "monthly" },
  { path: "/industries", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/startups", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/fintech", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/gaming", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/manufacturing", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/healthcare", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/technology", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/construction", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/real-estate", priority: 0.8, changefreq: "monthly" },
  { path: "/founder", priority: 0.7, changefreq: "monthly" },
  { path: "/technology", priority: 0.7, changefreq: "monthly" },
  { path: "/blogs", priority: 0.6, changefreq: "weekly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "sitemap.xml"), sitemap);
writeFileSync(join(publicDir, "robots.txt"), robots);
console.log("✓ Generated public/sitemap.xml and public/robots.txt");
