import { Star } from "lucide-react";
import type { Review } from "@/types/review";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="hover-lift rounded-2xl bg-white p-7 shadow-soft">
      <div className="flex gap-1 text-gold" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={index < review.rating ? "h-4 w-4 fill-current" : "h-4 w-4 opacity-30"}
          />
        ))}
      </div>
      <blockquote className="mt-4 text-navy/85">"{review.review}"</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-purple/15 font-semibold text-purple">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-navy">{review.name}</p>
          <p className="text-xs text-muted-foreground">Approved review</p>
        </div>
      </figcaption>
    </figure>
  );
}
