import mongoose, { Schema, Document } from 'mongoose';

export interface IItem {
  color: string;
  colorImage: string;
  productImages: string[];
  size: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface IProduct extends Document {
  name: string;
  type: string;
  categories: string;
  price: string;
  description: string;
  item: IItem[];
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
    type: [{
      color: {
        type: String,
        required: true,
      },
      colorImage: {
        type: String,
        required: true,
      },
      productImages: {
        type: [String],
        required: true,
      },
      size: {
        type: [{
          sizeTag: String,
          quantity: Number
        }],
        required: true,
      }
    }]
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
}, { timestamps: { createdAt: 'createdAt' } });

export default mongoose.model<IProduct>('Product', ProductSchema);
