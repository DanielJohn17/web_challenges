import { Response } from 'express';
import { UserPayload } from '../types/userPayload';
import generateToken from './generateToken';

const maxAge = 7 * 24 * 60 * 60 * 1000;

const cookieOptions = {
  httpOnly: false,
  sameSite: 'strict' as 'strict',
  maxAge,
};

export const setAuthCookie = (response: Response, user: UserPayload) => {
  const token = generateToken(user);

  response.cookie('auth_cookie', token, cookieOptions);
};

export const clearAuthCookie = (response: Response) => {
  response.clearCookie('auth_cookie', { ...cookieOptions, maxAge: 0 });
};
