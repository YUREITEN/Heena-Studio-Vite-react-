import {
  allowCors,
  assertAdmin,
  createHttpError,
  getIdParam,
  handleOptions,
  sendError,
  updateReviewStatus,
  type ApiHandler,
} from "../../_reviews";

const handler: ApiHandler = async (req, res) => {
  allowCors(res);
  if (handleOptions(req, res)) return;

  try {
    if (req.method !== "PATCH") {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }

    assertAdmin(req);

    const status = (req.body as { status?: unknown } | undefined)?.status;
    if (status !== "approved" && status !== "rejected") {
      throw createHttpError(400, "Status must be approved or rejected.");
    }

    const review = await updateReviewStatus(getIdParam(req), status);
    res.status(200).json({ review });
  } catch (error) {
    sendError(res, error);
  }
};

export default handler;
