import bcrypt from 'bcryptjs';
import User from '../models/user';
import { UserType } from '../types/models';
import { type Response } from 'express';
import type { CustomRequest } from '../types/request';
import type { ErrorType, ResponseUserType } from '../types/response';

export const getUsers = async (
  request: CustomRequest,
  response: Response<ResponseUserType[] | ErrorType>,
) => {
  try {
    const users = await User.find();

    const usersData = users.map((user) => {
      if (user.role !== 'admin') {
        return {
          name: user.name,
          email: user.email,
          role: user.role,
        };
      }
    }) as ResponseUserType[];

    response.status(200).json(usersData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      response.status(500).json({ message: error.message });
      return;
    } else {
      response.status(500).json({ message: 'Internal server error' });
      return;
    }
  }
};

export const getUserData = async (
  request: CustomRequest,
  response: Response<UserType | ErrorType>,
) => {
  try {
    const user = await User.findById(request.user?._id);

    if (!user) {
      response.status(404).json({ message: 'User not found' });
      return;
    }

    response.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      response.status(500).json({ message: error.message });
      return;
    } else {
      response.status(500).json({ message: 'Internal server error' });
      return;
    }
  }
};
