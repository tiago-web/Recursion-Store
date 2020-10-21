import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  password: string,
  avatar_url: string,
  avatar: string,
  shippingAddress: Array<{
    address: string,
    country: string,
    province: string,
    city: string,
    main: boolean,
  }>,
  orders: Array<{
    orderId: string,
    productId: number,
    status: string,
    received: boolean,
  }>,

}

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: [{
      address: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      province: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      main: {
        type: Boolean,
        required: true
      },
    }],
    required: true,
  },
  orders: {
    type: [{
      orderId: {
        type: String,
        required: true
      },
      productId: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      received: {
        type: Boolean,
        required: true
      }
    }],
    required: true,
  },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

export default mongoose.model<IUser>('User', UserSchema);
