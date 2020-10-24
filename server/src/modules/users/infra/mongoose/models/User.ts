import mongoose, { Schema, Document } from 'mongoose';

import IAddressDTO from '@shared/dtos/IAddressDTO';
import { IOrder } from '@modules/orders/infra/mongoose/models/Order';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  avatar_url?: string;
  avatar?: string;
  shippingAddresses?: IAddressDTO[];
  orders?: IOrder[];
  permission: 'Master' | 'Admin' | 'User';
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
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  avatar_url: {
    type: String,
    required: false,
  },
  shippingAddresses: {
    required: false,
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
        required: false
      },
    }],
  },
  orders: {
    required: false,
    type: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Order',
      }
    ]
  },
  permission: {
    type: String,
    default: 'User',
    required: true,
  },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);


export default mongoose.model<IUser>('User', UserSchema);
