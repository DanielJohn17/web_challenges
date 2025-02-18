import { body } from 'express-validator';

const loginValidator = [
  body('email').notEmpty().trim().isEmail().withMessage('Invalid email'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

export default loginValidator;
