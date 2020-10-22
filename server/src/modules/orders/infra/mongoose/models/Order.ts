import mongoose, { Schema, Document } from 'mongoose';

import { IProduct } from '@modules/products/infra/mongoose/models/Product';
import { IUser } from '@modules/users/infra/mongoose/models/User';
import IAddress from '@shared/dtos/IAddressDTO';

export interface IOrder extends Document {
  userId: IUser;
  status: string;
  delivered: boolean;
  products: IProduct[];
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
    status: {
      type: String,
      required: true,
    },
    delivered: {
      type: Boolean,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
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
