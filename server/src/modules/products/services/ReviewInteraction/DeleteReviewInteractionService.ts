import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";
import ReviewsRepository from "../../infra/mongoose/repositories/ReviewsRepository";
import { IReview } from "../../infra/mongoose/models/Review";

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  reviewId: string;
  userId: string;
};

const reviewsRepository = new ReviewsRepository();
const usersRepository = new UsersRepository();

class DeleteReviewInteractionService {
  public async execute({ reviewId, userId }: IRequest): Promise<IReview> {
    const review = await reviewsRepository.findById(reviewId);

    if (!review)
      throw new AppError("Review not found.", statusCodes.notFound);

    if (!review.userInteractions)
      throw new AppError("Review doesn't have any interaction.", statusCodes.notFound);

    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", statusCodes.notFound);


    const interactionToDelete = review.userInteractions.find(interaction => String(interaction.userId) === userId);

    // if (interactionToDelete && interactionToDelete.userId !== user && user.permission === "User")
    //   throw new AppError("Only the user who created the interaction and an Admin can delete this interaction.", statusCodes.forbidden);

    if (!interactionToDelete)
      throw new AppError("Interaction not found", statusCodes.notFound);

    review.userInteractions = review.userInteractions.filter(review => String(review.userId) !== userId);

    await reviewsRepository.save(review);

    return review;
  }
}

export default DeleteReviewInteractionService;
