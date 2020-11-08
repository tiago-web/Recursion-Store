import Review, { IReview } from "../models/Review";

import ICreateReviewDTO from "@modules/products/dtos/ICreateReviewDTO";

class ReviewsRepository {
  public async create({
    createdBy,
    title,
    body,
  }: ICreateReviewDTO): Promise<IReview> {
    const review = new Review({
      createdBy,
      title,
      body,
    });

    await this.save(review);

    return review;
  }

  public async findById(id: string): Promise<IReview | null> {
    const review = await Review.findById(id);

    return review;
  }

  public async save(review: IReview): Promise<IReview> {
    await review.save();

    return review;
  }

  public async deleteById(reviewId: string): Promise<IReview | null> {
    const review = await Review.findByIdAndDelete(reviewId);

    return review;
  }
}

export default ReviewsRepository;
