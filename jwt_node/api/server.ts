import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import { login, logout, register } from './controllers/authController';
import registerValidtor from './middlewares/registerValidator';
import loginValidator from './middlewares/loginValidator';

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

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/auth/register', registerValidtor, register);
app.post('/api/auth/login', loginValidator, login);
app.post('/api/auth/logout', logout);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
