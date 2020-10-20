import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  comment: string;
  likes: number;
  dislikes: number;
}

const ReviewSchema: Schema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  dislikes: {
    type: Number,
  },
  user: {
    required: true,
    type: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  }

}, { timestamps: { createdAt: 'createdAt' } });

export default mongoose.model<IReview>('Review', ReviewSchema);
