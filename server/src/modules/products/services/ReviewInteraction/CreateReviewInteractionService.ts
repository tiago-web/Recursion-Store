import { IReview } from "../../infra/mongoose/models/Review";
import ReviewsRepository from "../../infra/mongoose/repositories/ReviewsRepository";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

interface IRequest {
  reviewId: string;
  userId: string;
  action: 'like' | 'dislike';
};

const usersRepository = new UsersRepository();
const reviewsRepository = new ReviewsRepository();

class CreateReviewInteractionService {
  public async execute({ reviewId, userId,  action }: IRequest): Promise<IReview> {
    const review = await reviewsRepository.findById(reviewId);

    if (!review)
      throw new AppError("Review not found.", statusCodes.notFound);

    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", statusCodes.notFound);

    const newUserInteraction = { action, userId: user._id };

    if (!review.userInteractions)
      review.userInteractions = [newUserInteraction];
    else {
      const checkIfUserAlreadyInteracted = review.userInteractions.find(interaction => String(interaction.userId) === userId);

      if (checkIfUserAlreadyInteracted)
        throw new AppError('A user cannot interact twice to the same comment.', statusCodes.forbidden);

      review.userInteractions.push(newUserInteraction);

      await reviewsRepository.save(review);
    }

    return review;
  }
};

export default CreateReviewInteractionService;
