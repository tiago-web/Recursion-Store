import { IUser } from '@modules/users/infra/mongoose/models/User';
import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  title: string;
  body: string;
  userInteractions?: Array<{
    userId: IUser;
    action: "like" | "dislike";
  }>;
  createdBy: IUser;
}

const ReviewSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userInteractions: {
    type: [{
      _id: false,
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      action: {
        type: String,
        required: true
      }
    }],
  },
  createdBy: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: { createdAt: 'createdAt' } });

export default mongoose.model<IReview>('Review', ReviewSchema);
