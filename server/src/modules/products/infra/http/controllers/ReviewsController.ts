import { Request, Response } from 'express';

import CreateReviewService from "@modules/products/services/CreateReviewService";

const createReview = new CreateReviewService();

class ReviewsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { id: productId } = req.params;

    const { title, body } = req.body;

    const review = await createReview.execute({
      title,
      body,
      userId,
      productId
    });

    return res.status(201).json(review);
  }
}

export default ReviewsController;
