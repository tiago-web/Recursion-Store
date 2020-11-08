import ReviewsRepository from "../../infra/mongoose/repositories/ReviewsRepository";
import UsersRepository from "@modules/users/infra/mongoose/repositories/UsersRepository";
import { IReview } from "../../infra/mongoose/models/Review";

import AppError from "@shared/errors/AppError";
import statusCodes from "@config/statusCodes";

interface IRequest {
  reviewId: string;
  userId: string;
};

const reviewsRepository = new ReviewsRepository();
const usersRepository = new UsersRepository();

class UpdateReviewInteractionService {
  public async execute({ userId, reviewId }: IRequest): Promise<IReview> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError("User not found.", statusCodes.notFound);

    const review = await reviewsRepository.findById(reviewId);

    if (!review)
      throw new AppError("Review doesn't exists", statusCodes.notFound);

    if(!review.userInteractions)
      throw new AppError("Reviews Interactions don't exist", statusCodes.notFound);

    const interaction = review.userInteractions.find(interaction => String(interaction.userId) === userId);

    if(!interaction)
      throw new AppError("User Interaction doesn't exists", statusCodes.notFound);

    interaction.action = interaction.action === 'like' ? 'dislike' : 'like';

    await reviewsRepository.save(review);

    return review;
  }
}

export default UpdateReviewInteractionService;
