import ProductsRepository from "../infra/mongoose/repositories/ProductsRepository";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";

import AppError from '@shared/errors/AppError';
import ReviewsRepository from "../infra/mongoose/repositories/ReviewsRepository";
import { IReview } from "../infra/mongoose/models/Review";

interface IRequest {
  reviewId: string;
  userId: string;
  productId: string;
};

const productsRepository = new ProductsRepository();
const reviewsRepository = new ReviewsRepository();
const usersRepository = new UsersRepository();


class DeleteReviewService {
  public async execute({ reviewId, productId, userId }: IRequest): Promise<IReview> {
    const product = await productsRepository.findById(productId);

    if (!product)
      throw new AppError("Product not found", 404);

    if (!product.reviews)
      throw new AppError("Product doesn't have any review", 404);

    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", 404);

    const reviewToDelete = await reviewsRepository.findById(reviewId);

    if (reviewToDelete && reviewToDelete.createdBy !== user && user.permission === "User")
      throw new AppError("Only the user who create the review and an Admin can delete a review.", 403);

    if (!reviewToDelete)
      throw new AppError("Review not found", 404);

    await reviewsRepository.deleteById(reviewId);


    // TODO: Check why these lines are not working properly (the removed review is not been
    // updated in the products table)
    product.reviews = product.reviews.filter(review => review._id !== reviewId);
    await productsRepository.save(product);



    return reviewToDelete;
  }
}

export default DeleteReviewService;
