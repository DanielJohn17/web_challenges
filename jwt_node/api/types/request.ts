import { Request } from 'express';
import { UserPayload } from './userPayload';

export type CustomRequest<T = any, U = any, V = any, W = any> = Request<
  T,
  U,
  V,
  W
> & {
  user?: UserPayload;
};
