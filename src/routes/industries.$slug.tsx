import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryTemplate } from "@/components/site/IndustryTemplate";
import { getIndustry } from "@/lib/industries-content";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.industry;
    if (!i) return {};
    return {
      meta: [
        { title: i.seoTitle },
        { name: "description", content: i.seoDescription },
        { property: "og:title", content: `Finance for ${i.label} · Avin India` },
        { property: "og:description", content: i.seoDescription },
        { property: "og:url", content: `/industries/${i.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/industries/${i.slug}` }],
    };
  },
  component: IndustryRoute,
});

function IndustryRoute() {
  const { industry } = Route.useLoaderData();
  return <IndustryTemplate data={industry} />;
}
