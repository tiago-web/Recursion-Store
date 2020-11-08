import statusCodes from "@config/statusCodes";
import { Request, Response } from 'express';

import CreateReviewInteractionService from "@modules/products/services/ReviewInteraction/CreateReviewInteractionService";
import UpdateReviewInteractionService from "@modules/products/services/ReviewInteraction/UpdateReviewInteractionService";
import DeleteReviewInteractionService from "@modules/products/services/ReviewInteraction/DeleteReviewInteractionService";

const createReviewInteraction = new CreateReviewInteractionService();
const updateReviewInteraction = new UpdateReviewInteractionService();
const deleteReviewInteraction = new DeleteReviewInteractionService();

class ReviewInteractionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;
    const { action } = req.body;

    const review = await createReviewInteraction.execute({
        userId,
        reviewId,
        action
    });

    return res.status(statusCodes.created).json(review);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;

    const review = await updateReviewInteraction.execute({
        userId,
        reviewId
    });

    return res.status(statusCodes.ok).json(review);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;

    const review = await deleteReviewInteraction.execute({
      reviewId,
      userId
    });

    return res.status(statusCodes.accepted).json(review);
  }
}

export default ReviewInteractionController;
