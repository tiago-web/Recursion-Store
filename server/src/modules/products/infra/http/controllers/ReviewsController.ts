import { Request, Response } from 'express';

import CreateReviewService from "@modules/products/services/CreateReviewService";

const createReviewService = new CreateReviewService();

export default class ReviewsController {
  public async create(req: Request, res: Response): Promise<Response> {
    // const user_id = req.user.id;
    const { product_id } = req.params;

    // const { comment, likes, dislikes, userId } = req.body;

    try {
      // const product = await createProduct.execute({
      //   name,
      //   type,
      //   categories,
      //   price,
      //   description,
      //   items
      // });

      // return res.status(201).json(product);
    } catch (err) {
      return res.status(err.statusCode).json(err.message);
    }

  }
}
