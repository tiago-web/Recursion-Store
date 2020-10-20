import ICreateReviewDTO from "@modules/products/dtos/ICreateReviewDTO";
import Review, { IReview } from "../models/Review";

export default class ReviewsRepository {
  public async create({
    comment,
    likes,
    dislikes,
    userId
  }: ICreateReviewDTO): Promise<IReview> {
    const review = new Review({
      comment,
      likes,
      dislikes,
      userId
    });

    await review.save();

    return review;
  }
}
