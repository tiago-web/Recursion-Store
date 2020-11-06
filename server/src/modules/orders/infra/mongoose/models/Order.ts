import mongoose, { Schema, Document } from 'mongoose';

import { IProduct } from '@modules/products/infra/mongoose/models/Product';
import { IUser } from '@modules/users/infra/mongoose/models/User';
import IAddress from '@shared/dtos/IAddressDTO';

interface IOrderProduct {
  productId: IProduct;
  productPrice: number;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

export interface IOrder extends Document {
  userId: IUser;
  total: number;
  subTotal: number;
  shippingPrice: number;
  status: string;
  delivered: boolean;
  products: IOrderProduct[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

const OrderSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    total: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    shippingPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'In-Process',
      required: true,
    },
    delivered: {
      type: Boolean,
      default: false,
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        productPrice: {
          type: Number,
          required: true
        },
        items: [
          {
            color: {
              type: String,
              required: true
            },
            sizeTag: {
              type: String,
              required: true,
            },
            quantity: {
              type: Number,
              required: true
            }
          }
        ]
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
    },
    billingAddress: {
      address: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: { createdAt: 'createdAt' } },
);

export default mongoose.model<IOrder>('Order', OrderSchema);
