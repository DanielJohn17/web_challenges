import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import User from '../models/user';
import { UserType } from '../types/models';
import { ErrorType, NewUserType } from '../types/response';

const SALT = 10;

export const register = async (
  request: Request<{}, {}, UserType>,
  response: Response<NewUserType | ErrorType>,
): Promise<void> => {
  const result = validationResult(request);
  if (!result.isEmpty()) {
    response
      .status(400)
      .json({ message: result.array().map((error) => error.msg) });
    return;
  }

  const { name, email, password, role } = matchedData(request);

  const userExists = await User.findOne({ $or: [{ email }, { name }] });

  if (userExists) {
    response.status(400).json({ message: 'User already exists' });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    response.status(201).json({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      response.status(500).json({ message: error.message });
      return;
    } else {
      response.status(500).json({ message: 'An unknown error occurred' });
      return;
    }
  }
};

export const login = async (request: Request, response: Response) => {};
