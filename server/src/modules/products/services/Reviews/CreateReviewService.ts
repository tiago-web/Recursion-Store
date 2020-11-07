import { IReview } from "../../infra/mongoose/models/Review";
import ReviewsRepository from "../../infra/mongoose/repositories/ReviewsRepository";
import ProductsRepository from "../../infra/mongoose/repositories/ProductsRepository";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";

import AppError from '@shared/errors/AppError';

interface IRequest {
  title: string;
  body: string;
  userId: string;
  productId: string;
};

const usersRepository = new UsersRepository();
const productsRepository = new ProductsRepository();
const reviewsRepository = new ReviewsRepository();

class CreateReviewService {
  public async execute({ title, body, userId, productId }: IRequest): Promise<IReview> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found.", 404);

    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", 404);

    if (product.reviews) {
      const userWhoHasAlreadyReviewed = product.reviews.find(review => review.createdBy === user);

      if (userWhoHasAlreadyReviewed)
        throw new AppError("This user has already made a comment to the product", 403);
    }

    const review = await reviewsRepository.create({
      title,
      body,
      createdBy: userId
    });

    if (product.reviews)
      product.reviews.push(review);
    else
      product.reviews = [review];

    await productsRepository.save(product);

    await reviewsRepository.save(review);

    return review;
  }
};

export default CreateReviewService;
