import mongoose, { Schema, Document } from 'mongoose';
import { IAddress } from '@modules/orders/dtos/IAddressDTO';
import { IProduct } from '@modules/products/infra/mongoose/models/Product';

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

export interface IOrder extends Document {
  userId: IUser;
  status: string;
  delivered: boolean;
  products: IProduct[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

export const User = mongoose.model<IUser>('User', UserSchema);

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
