import { body } from 'express-validator';

const registerValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('role').isIn(['admin', 'customer']).withMessage('Invalid role'),
];

export default registerValidator;
