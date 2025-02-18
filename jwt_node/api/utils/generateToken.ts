import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserPayload } from '../types/userPayload';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string;

const generateToken = (user: UserPayload) => {
  return jwt.sign(user, SECRET_KEY, {
    expiresIn: '7d',
  });
};

export default generateToken;
