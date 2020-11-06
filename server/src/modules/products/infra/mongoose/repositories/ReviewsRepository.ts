import ICreateReviewDTO from "@modules/products/dtos/ICreateReviewDTO";
import Review, { IReview } from "../models/Review";

class ReviewsRepository {
  public async create({
    userId,
    productId,
    title,
    body,
  }: ICreateReviewDTO): Promise<IReview> {
    const review = new Review({
      createdBy: userId,
      productId,
      title,
      body,
    });

    await review.save();

    return review;
  }
}

export default ReviewsRepository;
