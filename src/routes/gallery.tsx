// import { useMemo } from "react";
// import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
// import { GalleryGrid, type GalleryItem } from "@/components/GalleryGrid";
// import { SAMPLE_ARTWORKS } from "@/data/sample";

// /*
// export const Route = createFileRoute("/gallery")({
//   head: () => ({
//     meta: [
//       { title: "Gallery — heena" },
//       {
//         name: "description",
//         content: "Browse paintings, fabric art, and student works from heena.",
//       },
//       { property: "og:url", content: "/gallery" },
//     ],
//     links: [{ rel: "canonical", href: "/gallery" }],
//   }),
//   component: Gallery,
// });
// */

// export default function Gallery() {
//   const items: GalleryItem[] = useMemo(() => {
//     return SAMPLE_ARTWORKS.map((a) => ({
//       id: a.id,
//       title: a.title,
//       image_url: a.image,
//       subcategory: a.subcategory ?? null,
//       description: a.description ?? null,
//     }));
//   }, []);

//   return (
//     <SiteLayout>
//       <PageHero
//         eyebrow="Portfolio"
//         title="The full gallery"
//         subtitle="Every piece, from large canvases to wearable art — together in one place."
//       />
//       <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
//         <GalleryGrid items={items} />
//       </section>
//     </SiteLayout>
//   );
// }






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
  const driveUrl = import.meta.env.VITE_GALLERY_DRIVE_URL || "https://drive.google.com/";
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

        <div className="mt-14 flex justify-center">
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold bg-white px-8 py-3 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-gold/10 hover:shadow-lift"
          >
            Load More
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
