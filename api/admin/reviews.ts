import {
  allowCors,
  assertAdmin,
  handleOptions,
  listReviews,
  sendError,
  type ApiHandler,
} from "../_reviews";

const handler: ApiHandler = async (req, res) => {
  allowCors(res);
  if (handleOptions(req, res)) return;

  try {
    if (req.method !== "GET") {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }

    assertAdmin(req);
    res.status(200).json({ reviews: await listReviews() });
  } catch (error) {
    sendError(res, error);
  }
};

export default handler;
