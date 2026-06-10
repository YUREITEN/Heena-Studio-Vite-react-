import { useState } from "react";
import { X } from "lucide-react";

export type GalleryItem = {
  id: string;
  title: string;
  image_url: string;
  subcategory?: string | null;
  description?: string | null;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  if (items.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">No artworks yet — check back soon.</p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="group img-zoom hover-lift overflow-hidden rounded-xl bg-card text-left shadow-soft animate-fade-up"
            style={{ animationDelay: `${(i % 6) * 60}ms` }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image_url}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-heading text-lg text-navy">{item.title}</p>
              {item.subcategory && (
                <p className="text-xs uppercase tracking-wider text-gold-dark">
                  {item.subcategory}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-lg border bg-card shadow-lift"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 rounded-sm bg-white/90 p-2 text-navy opacity-80 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          {active && (
            <div>
              <img
                src={active.image_url}
                alt={active.title}
                className="w-full h-[84vh] object-cover"
              />
              <div className="p-5">
                <h3 className="font-heading text-2xl text-navy">{active.title}</h3>
                {active.subcategory && (
                  <p className="text-sm text-gold-dark uppercase tracking-wider mt-1">
                    {active.subcategory}
                  </p>
                )}
                {active.description && (
                  <p className="mt-3 text-muted-foreground">{active.description}</p>
                )}
              </div>
            </div>
          )}
          </div>
        </div>
      )}
    </>
  );
}
