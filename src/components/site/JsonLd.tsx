/**
 * Renders a JSON-LD structured data <script> tag.
 * Server-rendered by TanStack Start, so Google reads it on first crawl.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here — it is our own controlled data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
