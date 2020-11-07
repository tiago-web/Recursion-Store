import { IReview } from "../../infra/mongoose/models/Review";
import ReviewsRepository from "../../infra/mongoose/repositories/ReviewsRepository";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";

import AppError from '@shared/errors/AppError';

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
      throw new AppError("Review not found.", 404);

    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", 404);

    const newUserInteraction = { action, userId: user._id };

    if (!review.userInteractions)
      review.userInteractions = [newUserInteraction];
    else {
      const checkIfUserAlreadyInteracted = review.userInteractions.find(interaction => String(interaction.userId) === userId);

      if (checkIfUserAlreadyInteracted)
        throw new AppError('A user cannot interact twice to the same comment.', 403);

      review.userInteractions.push(newUserInteraction);

      await reviewsRepository.save(review);
    }

    return review;
  }
};

export default CreateReviewInteractionService;
