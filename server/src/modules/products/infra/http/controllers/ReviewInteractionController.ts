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

    return res.status(201).json(review);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;

    const review = await updateReviewInteraction.execute({
        userId,
        reviewId
    });

    return res.status(202).json(review);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;

    const review = await deleteReviewInteraction.execute({
      reviewId,
      userId
    });

    return res.status(202).json(review);
  }
}

export default ReviewInteractionController;
