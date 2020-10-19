import { IAddress } from '@modules/orders/dtos/IAddressDTO';
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

export interface IProduct extends Document {
  name: string;
  price: number;
}

export interface IOrder extends Document {
  userId: IUser;
  status: string;
  delivered: boolean;
  products: IProduct[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
  // createdAt: number;
  // updatedAt: number;
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

mongoose.model<IUser>('User', UserSchema);

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

mongoose.model<IProduct>('Product', ProductSchema);

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
