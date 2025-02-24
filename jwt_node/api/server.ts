import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import cookieParser from 'cookie-parser';
import { login, logout, register } from './controllers/authController';
import registerValidtor from './middlewares/registerValidator';
import loginValidator from './middlewares/loginValidator';
import verifyToken from './utils/verifyToken';
import { getUserData, getUsers } from './controllers/userController';
import roleMiddleWare from './middlewares/roleMiddleware';

dotenv.config();

const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

const app = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
    exposedHeaders: ['set-cookie'],
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/auth/register', registerValidtor, register);
app.post('/api/auth/login', loginValidator, login);
app.delete('/api/auth/logout', logout);

app.get('/api/user/admin', verifyToken, roleMiddleWare('admin'), getUsers);
app.get(
  '/api/user/customer',
  verifyToken,
  roleMiddleWare('admin', 'customer'),
  getUserData,
);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
