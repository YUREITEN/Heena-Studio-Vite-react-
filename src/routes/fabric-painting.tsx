import { useMemo, useState } from "react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { FABRIC_CATEGORIES } from "@/data/site";
import { SAMPLE_ARTWORKS } from "@/data/sample";
import { cn } from "@/lib/utils";

/*
export const Route = createFileRoute("/fabric-painting")({
  head: () => ({
    meta: [
      { title: "Fabric Painting — heena" },
      {
        name: "description",
        content:
          "Hand-painted jeans, shirts, curtains, bedsheets, cushion covers and handkerchiefs.",
      },
      { property: "og:title", content: "Fabric Painting — heena" },
      { property: "og:url", content: "/fabric-painting" },
    ],
    links: [{ rel: "canonical", href: "/fabric-painting" }],
  }),
  component: FabricPainting,
});
*/

export default function FabricPainting() {
  const [active, setActive] = useState<string>("All");

  const items: GalleryItem[] = useMemo(() => {
    const fallback = SAMPLE_ARTWORKS.filter((a) => a.category === "Fabric Painting").map((a) => ({
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
        eyebrow="Collection"
        title="Fabric painting, made by hand"
        subtitle="Florals, mandalas and signature motifs painted onto everyday fabrics — built to be loved for years."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-2">
          {["All", ...FABRIC_CATEGORIES].map((c) => (
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
