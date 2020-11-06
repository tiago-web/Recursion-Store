import { Request, Response } from 'express';

import CreateReviewService from "@modules/products/services/CreateReviewService";
import UpdateReviewService from "@modules/products/services/UpdateReviewService";
import DeleteReviewService from "@modules/products/services/DeleteReviewService";

const createReview = new CreateReviewService();
const updateReview = new UpdateReviewService();
const deleteReview = new DeleteReviewService();

class ReviewsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;

    const { productId, title, body } = req.body;

    const review = await createReview.execute({
      productId,
      userId,
      title,
      body
    });

    return res.status(201).json(review);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;
    const { title, body } = req.body;

    const review = await updateReview.execute({
      userId,
      reviewId,
      title,
      body
    });

    return res.status(201).json(review);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: reviewId } = req.params;
    const { productId } = req.body;


    const review = await deleteReview.execute({
      reviewId,
      userId,
      productId,
    });

    return res.status(201).json(review);
  }
}

export default ReviewsController;
