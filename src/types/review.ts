export const REVIEW_STATUSES = ["pending", "approved", "rejected"] as const;

export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

export type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  status: ReviewStatus;
  createdAt: string;
};

export type CreateReviewInput = {
  name: string;
  rating: number;
  review: string;
};
