import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IUserToken extends Document {
  token: string;
  userId: string;
};

const UserTokenSchema: Schema = new Schema({
  token: {
    type: String,
    default: uuidv4
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

export default mongoose.model<IUserToken>('UserToken', UserTokenSchema);

