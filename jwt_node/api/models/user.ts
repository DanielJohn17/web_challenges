import { model, Schema } from 'mongoose';
import { UserType } from '../types/models';

const UserSchema: Schema = new Schema({
  name: {
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
  role: {
    type: String,
    enum: ['admin', 'customer'],
    default: 'customer',
  },
});

const User = model<UserType>('User', UserSchema);

export default User;
