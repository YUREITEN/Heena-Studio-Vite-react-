import { useMemo, useState } from "react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { PAINTING_CATEGORIES } from "@/data/site";
import { SAMPLE_ARTWORKS } from "@/data/sample";
import { cn } from "@/lib/utils";

/*
export const Route = createFileRoute("/paintings")({
  head: () => ({
    meta: [
      { title: "Paintings — heena" },
      {
        name: "description",
        content:
          "Original charcoal, oil, acrylic, watercolor, graphite, mandala and resin artworks.",
      },
      { property: "og:url", content: "/paintings" },
    ],
    links: [{ rel: "canonical", href: "/paintings" }],
  }),
  component: Paintings,
});
*/

export default function Paintings() {
  const [active, setActive] = useState<string>("All");

  const items: GalleryItem[] = useMemo(() => {
    const fallback = SAMPLE_ARTWORKS.filter((a) => a.category === "Paintings").map((a) => ({
      id: a.id,
      title: a.title,
      image_url: a.image,
      subcategory: a.subcategory ?? null,
      description: a.description ?? null,
    }));
    const source = fallback;
    return active === "All" ? source : source.filter((i) => i.subcategory === active);
  }, [active]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Originals"
        title="Paintings from the studio"
        subtitle="A growing collection across mediums — explore by category."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-2">
          {["All", ...PAINTING_CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                active === c
                  ? "border-gold bg-gold text-navy"
                  : "border-border bg-white text-navy/80 hover:bg-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10">
          <GalleryGrid items={items} />
        </div>
      </section>
    </SiteLayout>
  );
}
