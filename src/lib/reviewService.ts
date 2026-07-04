import type { CreateReviewInput, Review, ReviewStatus } from "@/types/review";

type ApiErrorResponse = {
  error?: string;
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    ...init,
  });

  if (!response.ok) {
    let message = "Something went wrong. Please try again.";

    try {
      const body = (await response.json()) as ApiErrorResponse;
      if (body.error) message = body.error;
    } catch {
      message = response.statusText || message;
    }

    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

export const ReviewService = {
  createReview(input: CreateReviewInput) {
    return request<{ message: string }>("/api/reviews", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  getApprovedReviews() {
    return request<{ reviews: Review[] }>("/api/reviews").then((data) => data.reviews);
  },

  getAdminReviews(credentials: AdminCredentials) {
    return request<{ reviews: Review[] }>("/api/admin/reviews", {
      headers: getAdminHeaders(credentials),
    }).then((data) => data.reviews);
  },

  updateReviewStatus(
    id: string,
    status: Extract<ReviewStatus, "approved" | "rejected">,
    credentials: AdminCredentials,
  ) {
    return request<{ review: Review }>(`/api/admin/reviews/${id}`, {
      method: "PATCH",
      headers: getAdminHeaders(credentials),
      body: JSON.stringify({ status }),
    }).then((data) => data.review);
  },
};

export type AdminCredentials = {
  username: string;
  adminId: string;
  password: string;
};

function getAdminHeaders(credentials: AdminCredentials) {
  return {
    "X-Admin-Username": credentials.username,
    "X-Admin-Id": credentials.adminId,
    "X-Admin-Password": credentials.password,
  };
}
