import type { NextFunction, Response } from 'express';
import type { CustomRequest } from '../types/request';

const roleMiddleWare = (...allowedRoles: string[]) => {
  return (request: CustomRequest, response: Response, next: NextFunction) => {
    const role = request.user?.role;

    if (!role) {
      response.status(403).json({ message: 'Forbidden' });
      return;
    }
    if (!allowedRoles.includes(role)) {
      response.status(403).json({ message: 'Access denied' });
      return;
    }

    next();
  };
};

export default roleMiddleWare;
