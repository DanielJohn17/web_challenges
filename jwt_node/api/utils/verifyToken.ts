import type { NextFunction, Response } from 'express';
import type { CustomRequest } from '../types/request';
import jwt from 'jsonwebtoken';
import { UserPayload } from '../types/userPayload';

const verifyToken = async (
  request: CustomRequest,
  response: Response,
  next: NextFunction,
) => {
  try {
    const token = request.cookies?.auth_token;

    if (!token) {
      response.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as UserPayload;

    request.user = decoded;
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      response.status(401).json({ message: error.message });
      return;
    } else {
      response.status(401).json({ message: 'Unauthorized' });
      return;
    }
  }
};

export default verifyToken;
