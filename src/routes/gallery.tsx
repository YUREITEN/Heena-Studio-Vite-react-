import { useMemo } from "react";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
import { SAMPLE_ARTWORKS } from "@/data/sample";

/*
export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — heena" },
      {
        name: "description",
        content: "Browse paintings, fabric art, and student works from heena.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});
*/

export default function Gallery() {
  const items: GalleryItem[] = useMemo(() => {
    return SAMPLE_ARTWORKS.map((a) => ({
      id: a.id,
      title: a.title,
      image_url: a.image,
      subcategory: a.subcategory ?? null,
      description: a.description ?? null,
    }));
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="The full gallery"
        subtitle="Every piece, from large canvases to wearable art — together in one place."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <GalleryGrid items={items} />
      </section>
    </SiteLayout>
  );
}
