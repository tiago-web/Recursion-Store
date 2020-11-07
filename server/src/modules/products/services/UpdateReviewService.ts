import ReviewsRepository from "../infra/mongoose/repositories/ReviewsRepository";

import AppError from "@shared/errors/AppError";
import { IReview } from "../infra/mongoose/models/Review";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";

interface IRequest {
  userId: string;
  reviewId: string;
  title?: string;
  body?: string;
};

const reviewsRepository = new ReviewsRepository();
const usersRepository = new UsersRepository();

class UpdateReviewService {
  public async execute({
    userId,
    reviewId,
    title,
    body
  }: IRequest): Promise<IReview> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", 404);

    const review = await reviewsRepository.findById(reviewId);

    if (!review)
      throw new AppError("Review doesn't exists", 404);

    if (!title && !body)
      throw new AppError("Bad Request.")

    if (review.createdBy !== user && user.permission === "User")
      throw new AppError("Only the user who create the review and an Admin can edit a review.", 403);

    review.title = title ?? review.title;
    review.body = body ?? review.body;

    await reviewsRepository.save(review);

    return review;
  }
}

export default UpdateReviewService;
