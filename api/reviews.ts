import {
  allowCors,
  handleOptions,
  insertReview,
  listReviews,
  sendError,
  validateReviewInput,
  type ApiHandler,
} from "./_reviews";

const handler: ApiHandler = async (req, res) => {
  allowCors(res);
  if (handleOptions(req, res)) return;

  try {
    if (req.method === "GET") {
      res.status(200).json({ reviews: await listReviews("approved") });
      return;
    }

    if (req.method === "POST") {
      await insertReview(validateReviewInput(req.body ?? {}));
      res.status(201).json({ message: "Review submitted for approval." });
      return;
    }

    res.status(405).json({ error: "Method not allowed." });
  } catch (error) {
    sendError(res, error);
  }
};

export default handler;
