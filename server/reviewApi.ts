import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";

type ReviewStatus = "pending" | "approved" | "rejected";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  status: ReviewStatus;
  createdAt: string;
};

type CreateReviewInput = {
  name?: string;
  rating?: number;
  review?: string;
};

type Env = Record<string, string | undefined>;

const DATA_FILE = resolve(process.cwd(), "data/reviews.json");

export function reviewApiPlugin(env: Env): Plugin {
  return {
    name: "heena-review-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) {
          next();
          return;
        }

        const url = new URL(req.url, "http://localhost");

        try {
          if (req.method === "GET" && url.pathname === "/api/reviews") {
            const reviews = await readReviews();
            sendJson(res, 200, {
              reviews: reviews.filter((review) => review.status === "approved"),
            });
            return;
          }

          if (req.method === "POST" && url.pathname === "/api/reviews") {
            const input = (await readJson(req)) as CreateReviewInput;
            const review = createReview(input);
            const reviews = await readReviews();
            await writeReviews([review, ...reviews]);
            sendJson(res, 201, { message: "Review submitted for approval." });
            return;
          }

          if (url.pathname.startsWith("/api/admin/reviews")) {
            if (!isAdmin(req, env)) {
              sendJson(res, 401, { error: "Invalid admin credentials." });
              return;
            }

            if (req.method === "GET" && url.pathname === "/api/admin/reviews") {
              sendJson(res, 200, { reviews: await readReviews() });
              return;
            }

            const match = url.pathname.match(/^\/api\/admin\/reviews\/([^/]+)$/);
            if (req.method === "PATCH" && match) {
              const body = (await readJson(req)) as { status?: ReviewStatus };
              if (body.status !== "approved" && body.status !== "rejected") {
                sendJson(res, 400, { error: "Status must be approved or rejected." });
                return;
              }

              const reviews = await readReviews();
              const review = reviews.find((item) => item.id === match[1]);
              if (!review) {
                sendJson(res, 404, { error: "Review not found." });
                return;
              }

              review.status = body.status;
              await writeReviews(reviews);
              sendJson(res, 200, { review });
              return;
            }
          }

          sendJson(res, 404, { error: "Not found." });
        } catch (error) {
          const message = error instanceof Error ? error.message : "Server error.";
          sendJson(res, 500, { error: message });
        }
      });
    },
  };
}

async function readReviews(): Promise<Review[]> {
  try {
    return JSON.parse(await readFile(DATA_FILE, "utf8")) as Review[];
  } catch {
    return [];
  }
}

async function writeReviews(reviews: Review[]) {
  await mkdir(dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, `${JSON.stringify(reviews, null, 2)}\n`, "utf8");
}

function createReview(input: CreateReviewInput): Review {
  const name = input.name?.trim() ?? "";
  const review = input.review?.trim() ?? "";
  const rating = Number(input.rating);

  if (!name || name.length > 80) {
    throw new Error("Name must be between 1 and 80 characters.");
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5.");
  }

  if (!review || review.length > 1000) {
    throw new Error("Review must be between 1 and 1000 characters.");
  }

  return {
    id: randomUUID(),
    name,
    rating,
    review,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
}

async function readJson(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function isAdmin(req: IncomingMessage, env: Env) {
  return (
    getHeader(req, "x-admin-username") === env.ADMIN_REVIEW_USERNAME &&
    getHeader(req, "x-admin-id") === env.ADMIN_REVIEW_ID &&
    getHeader(req, "x-admin-password") === env.ADMIN_REVIEW_PASSWORD
  );
}

function getHeader(req: IncomingMessage, name: string) {
  const value = req.headers[name];
  return Array.isArray(value) ? value[0] : value;
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}
