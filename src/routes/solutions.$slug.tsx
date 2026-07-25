import { createFileRoute, notFound } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/site/SolutionTemplate";
import { getSolution } from "@/lib/solutions-content";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.solution;
    if (!s) return {};
    return {
      meta: [
        { title: s.seoTitle },
        { name: "description", content: s.seoDescription },
        { property: "og:title", content: `${s.title} · Avin India` },
        { property: "og:description", content: s.tagline },
        { property: "og:url", content: `/solutions/${s.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/solutions/${s.slug}` }],
    };
  },
  component: SolutionRoute,
});

function SolutionRoute() {
  const { solution } = Route.useLoaderData();
  return <SolutionTemplate data={solution} />;
}
