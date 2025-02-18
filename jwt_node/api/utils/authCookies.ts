import { Response } from 'express';
import { UserPayload } from '../types/userPayload';
import generateToken from './generateToken';

const maxAge = 7 * 24 * 60 * 60 * 1000;

const cookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as 'strict',
  maxAge,
};

export const authCookie = (response: Response, user: UserPayload) => {
  const token = generateToken(user);

  response.cookie('auth_cookie', token, cookieOptions);
};
