import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AdminReviewCard } from "@/components/reviews/AdminReviewCard";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { ReviewService } from "@/lib/reviewService";
import { toast } from "@/lib/toast";
import { cn } from "@/lib/utils";
import type { Review, ReviewStatus } from "@/types/review";
import type { AdminCredentials } from "@/lib/reviewService";

type FilterStatus = ReviewStatus;

const STORAGE_KEY = "heena_admin_review_credentials";
const FILTERS: FilterStatus[] = ["pending", "approved", "rejected"];

export default function AdminReviews() {
  const [credentials, setCredentials] = useState<AdminCredentials>(() => readStoredCredentials());
  const [loginInput, setLoginInput] = useState<AdminCredentials>(() => readStoredCredentials());
  const [authenticated, setAuthenticated] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    if (!credentials.password) return;
    void loadReviews(credentials);
  }, [credentials]);

  async function loadReviews(activeCredentials: AdminCredentials) {
    setLoading(true);

    try {
      const data = await ReviewService.getAdminReviews(activeCredentials);
      setReviews(data);
      setAuthenticated(true);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(activeCredentials));
    } catch (error) {
      setAuthenticated(false);
      sessionStorage.removeItem(STORAGE_KEY);
      toast.error(error instanceof Error ? error.message : "Could not load reviews.");
    } finally {
      setLoading(false);
    }
  }

  async function onLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextCredentials = {
      username: loginInput.username.trim(),
      adminId: loginInput.adminId.trim(),
      password: loginInput.password.trim(),
    };

    if (!nextCredentials.username || !nextCredentials.adminId || !nextCredentials.password) {
      toast.error("Enter your username, admin ID, and password.");
      return;
    }

    setCredentials(nextCredentials);
    await loadReviews(nextCredentials);
  }

  async function onChangeStatus(
    id: string,
    status: Extract<ReviewStatus, "approved" | "rejected">,
  ) {
    setSavingId(id);

    try {
      const updated = await ReviewService.updateReviewStatus(id, status, credentials);
      setReviews((current) => current.map((review) => (review.id === id ? updated : review)));
      toast.success(`Review ${status}.`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not update review.");
    } finally {
      setSavingId(null);
    }
  }

  const filteredReviews = useMemo(() => {
    const query = search.trim().toLowerCase();

    return reviews.filter((review) => {
      const matchesStatus = review.status === filter;
      const matchesSearch = !query || review.name.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [filter, reviews, search]);

  const counts = useMemo(() => {
    return FILTERS.reduce(
      (total, status) => ({
        ...total,
        [status]: reviews.filter((review) => review.status === status).length,
      }),
      { pending: 0, approved: 0, rejected: 0 } as Record<FilterStatus, number>,
    );
  }, [reviews]);

  if (!authenticated) {
    return (
      <SiteLayout>
        <PageHero
          eyebrow="Admin"
          title="Review moderation"
          subtitle="Sign in to approve or reject customer reviews."
        />
        <section className="mx-auto max-w-md px-5 py-14 lg:py-20">
          <form onSubmit={onLogin} className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
            <label className="mb-2 block text-sm font-semibold text-navy">Username</label>
            <input
              value={loginInput.username}
              onChange={(event) =>
                setLoginInput((current) => ({ ...current, username: event.target.value }))
              }
              className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              placeholder="Enter username"
            />

            <label className="mb-2 mt-4 block text-sm font-semibold text-navy">Admin ID</label>
            <input
              value={loginInput.adminId}
              onChange={(event) =>
                setLoginInput((current) => ({ ...current, adminId: event.target.value }))
              }
              className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              placeholder="Enter admin ID"
            />

            <label className="mb-2 mt-4 block text-sm font-semibold text-navy">Password</label>
            <input
              type="password"
              value={loginInput.password}
              onChange={(event) =>
                setLoginInput((current) => ({ ...current, password: event.target.value }))
              }
              className="w-full rounded-xl border bg-[#F8F8F8] px-4 py-3 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              placeholder="Enter password"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-gold-dark disabled:opacity-60"
            >
              {loading ? "Checking..." : "Open dashboard"}
            </button>
          </form>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Admin"
        title="Review moderation"
        subtitle="Approve the reviews you want shown publicly, or reject the rest."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilter(status)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all",
                  filter === status
                    ? "bg-gold text-navy shadow-soft"
                    : "bg-accent text-navy hover:bg-gold/20",
                )}
              >
                {status} ({counts[status]})
              </button>
            ))}
          </div>

          <label className="relative block md:w-80">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by customer name"
              className="w-full rounded-full border bg-[#F8F8F8] py-2.5 pl-11 pr-4 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-5">
          {loading ? (
            <p className="rounded-2xl bg-white p-6 text-center text-muted-foreground shadow-soft">
              Loading reviews...
            </p>
          ) : filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <AdminReviewCard
                key={review.id}
                review={review}
                busy={savingId === review.id}
                onChangeStatus={onChangeStatus}
              />
            ))
          ) : (
            <p className="rounded-2xl bg-white p-6 text-center text-muted-foreground shadow-soft">
              No {filter} reviews found.
            </p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function readStoredCredentials(): AdminCredentials {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { username: "", adminId: "", password: "" };
    const parsed = JSON.parse(raw) as Partial<AdminCredentials>;

    return {
      username: parsed.username ?? "",
      adminId: parsed.adminId ?? "",
      password: parsed.password ?? "",
    };
  } catch {
    return { username: "", adminId: "", password: "" };
  }
}
