import { Check, Star, Trash2, X } from "lucide-react";
import type { Review, ReviewStatus } from "@/types/review";

type AdminReviewCardProps = {
  review: Review;
  busy?: boolean;
  onChangeStatus: (id: string, status: Extract<ReviewStatus, "approved" | "rejected">) => void;
};

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export function AdminReviewCard({ review, busy, onChangeStatus }: AdminReviewCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex gap-1 text-gold" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={index < review.rating ? "h-4 w-4 fill-current" : "h-4 w-4 opacity-30"}
              />
            ))}
          </div>
          <h3 className="mt-3 font-heading text-2xl text-navy">{review.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {dateFormatter.format(new Date(review.createdAt))}
          </p>
        </div>
        <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          {review.status}
        </span>
      </div>

      <p className="mt-5 leading-7 text-navy/85">{review.review}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {review.status === "pending" && (
          <>
          <button
            type="button"
            disabled={busy}
            onClick={() => onChangeStatus(review.id, "approved")}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-gold-dark disabled:opacity-60"
          >
            <Check className="h-4 w-4" />
            Approve
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => onChangeStatus(review.id, "rejected")}
            className="inline-flex items-center gap-2 rounded-full border border-pink/40 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-pink/10 disabled:opacity-60"
          >
            <X className="h-4 w-4" />
            Reject
          </button>
          </>
        )}

        {review.status === "approved" && (
          <button
            type="button"
            disabled={busy}
            onClick={() => onChangeStatus(review.id, "rejected")}
            className="inline-flex items-center gap-2 rounded-full border border-pink/40 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-pink/10 disabled:opacity-60"
          >
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        )}
      </div>
    </article>
  );
}
