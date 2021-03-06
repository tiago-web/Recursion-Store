import mongoose, { Schema, Document } from 'mongoose';

import { IUser } from '@modules/users/infra/mongoose/models/User';
import { IReview } from './Review';

export interface IItem {
  color: string;
  imageColor: string;
  productImages: Array<{
    image: string;
    imageUrl: string;
  }>;
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface IProduct extends Document {
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: string;
  items?: IItem[];
  reviews?: IReview[];
  discountPercentage?: number;
  createdBy: IUser;
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    required: false,
    _id: false,
    type: [{
      color: {
        type: String,
        required: true,
      },
      imageColor: {
        type: String,
        required: true,
      },
      productImages: {
        required: true,
        type: [{
          _id: false,
          image: {
            type: String,
            required: true,
          },
          imageUrl: {
            type: String,
            required: true,
          },
        }],
      },
      sizes: {
        required: true,
        type: [{
          _id: false,
          sizeTag: {
            type: String,
            required: true
          },
          quantity: {
            type: Number,
            required: true
          }
        }],
      }
    }]
  },
  reviews: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  },
  createdBy: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: { createdAt: 'createdAt' } });

export default mongoose.model<IProduct>('Product', ProductSchema);
