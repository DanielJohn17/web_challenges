import { body } from 'express-validator';

const loginValidator = [
  body('email').trim().isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

export default loginValidator;
