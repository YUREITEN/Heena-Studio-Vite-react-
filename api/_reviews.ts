import { randomUUID } from "node:crypto";

export type ReviewStatus = "pending" | "approved" | "rejected";

export type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  status: ReviewStatus;
  createdAt: string;
};

type DbReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  status: ReviewStatus;
  created_at: string;
};

type CreateReviewInput = {
  name?: string;
  rating?: number;
  review?: string;
};

type VercelRequest = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
  query?: Record<string, string | string[] | undefined>;
};

type VercelResponse = {
  status(statusCode: number): VercelResponse;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
};

export type ApiHandler = (req: VercelRequest, res: VercelResponse) => Promise<void> | void;

export function allowCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Admin-Username, X-Admin-Id, X-Admin-Password",
  );
}

export function handleOptions(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "OPTIONS") return false;
  res.status(204).json({});
  return true;
}

export function assertAdmin(req: VercelRequest) {
  if (
    getHeader(req, "x-admin-username") !== process.env.ADMIN_REVIEW_USERNAME ||
    getHeader(req, "x-admin-id") !== process.env.ADMIN_REVIEW_ID ||
    getHeader(req, "x-admin-password") !== process.env.ADMIN_REVIEW_PASSWORD
  ) {
    throw createHttpError(401, "Invalid admin credentials.");
  }
}

export function validateReviewInput(input: CreateReviewInput) {
  const name = input.name?.trim() ?? "";
  const review = input.review?.trim() ?? "";
  const rating = Number(input.rating);

  if (!name || name.length > 80) {
    throw createHttpError(400, "Name must be between 1 and 80 characters.");
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw createHttpError(400, "Rating must be between 1 and 5.");
  }

  if (!review || review.length > 1000) {
    throw createHttpError(400, "Review must be between 1 and 1000 characters.");
  }

  return {
    id: randomUUID(),
    name,
    rating,
    review,
    status: "pending" as const,
  };
}

export async function listReviews(status?: ReviewStatus) {
  const search = new URLSearchParams({
    select: "id,name,rating,review,status,created_at",
    order: "created_at.desc",
  });

  if (status) search.set("status", `eq.${status}`);

  const rows = await supabaseRequest<DbReview[]>(`/reviews?${search.toString()}`);
  return rows.map(mapReview);
}

export async function insertReview(input: ReturnType<typeof validateReviewInput>) {
  await supabaseRequest<DbReview[]>("/reviews", {
    method: "POST",
    headers: {
      Prefer: "return=minimal",
    },
    body: JSON.stringify(input),
  });
}

export async function updateReviewStatus(id: string, status: Extract<ReviewStatus, "approved" | "rejected">) {
  const rows = await supabaseRequest<DbReview[]>(
    `/reviews?id=eq.${encodeURIComponent(id)}&select=id,name,rating,review,status,created_at`,
    {
      method: "PATCH",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify({ status }),
    },
  );

  if (!rows[0]) throw createHttpError(404, "Review not found.");
  return mapReview(rows[0]);
}

export function getIdParam(req: VercelRequest) {
  const raw = req.query?.id;
  const id = Array.isArray(raw) ? raw[0] : raw;
  if (!id) throw createHttpError(400, "Missing review ID.");
  return id;
}

export function sendError(res: VercelResponse, error: unknown) {
  const status = error instanceof HttpError ? error.status : 500;
  const message = error instanceof Error ? error.message : "Server error.";
  res.status(status).json({ error: message });
}

export function createHttpError(status: number, message: string) {
  return new HttpError(status, message);
}

class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

async function supabaseRequest<T>(path: string, init: RequestInit = {}) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw createHttpError(500, "Missing Supabase environment variables on Vercel.");
  }

  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1${path}`, {
    ...init,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!response.ok) {
    let message = response.statusText || "Supabase request failed.";

    try {
      const body = (await response.json()) as { message?: string; error?: string };
      message = body.message || body.error || message;
    } catch {
      // Keep the status text fallback.
    }

    throw createHttpError(response.status, message);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

function mapReview(row: DbReview): Review {
  return {
    id: row.id,
    name: row.name,
    rating: row.rating,
    review: row.review,
    status: row.status,
    createdAt: row.created_at,
  };
}

function getHeader(req: VercelRequest, name: string) {
  const value = req.headers[name] ?? req.headers[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
}
