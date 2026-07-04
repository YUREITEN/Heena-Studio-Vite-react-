import { useState } from "react";
import { Star } from "lucide-react";
import { ReviewService } from "@/lib/reviewService";
import { toast } from "@/lib/toast";
import { cn } from "@/lib/utils";

const SUCCESS_MESSAGE = "Thank you! Your review has been submitted and is awaiting approval.";

export function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);

    try {
      await ReviewService.createReview({ name, rating, review });
      setName("");
      setRating(5);
      setReview("");
      toast.success(SUCCESS_MESSAGE);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not submit your review.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 rounded-2xl bg-white p-6 shadow-soft md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Share your review
          </p>
          <h3 className="mt-2 font-heading text-2xl text-navy md:text-3xl">
            Tell us about your experience.
          </h3>
        </div>
        <div className="flex gap-1 text-gold" aria-label={`${rating} out of 5 stars selected`}>
          {Array.from({ length: 5 }).map((_, index) => {
            const value = index + 1;

            return (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className="rounded-full p-1 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold/40"
                aria-label={`Set rating to ${value} stars`}
              >
                <Star className={cn("h-5 w-5", value <= rating ? "fill-current" : "opacity-30")} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.4fr]">
        <div>
          <label className="mb-2 block text-sm font-medium text-navy">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            maxLength={80}
            placeholder="Your name"
            className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-navy">Review</label>
          <textarea
            value={review}
            onChange={(event) => setReview(event.target.value)}
            required
            minLength={2}
            maxLength={1000}
            rows={4}
            placeholder="Write your review..."
            className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
          <p className="mt-1 text-right text-xs text-muted-foreground">{review.length}/1000</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="mt-5 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-gold-dark hover:shadow-lift disabled:opacity-60"
      >
        {busy ? "Submitting..." : "Submit review"}
      </button>
    </form>
  );
}
