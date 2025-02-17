import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_DB_URI = process.env.MONGO_DB_URI || '';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI as string);
    console.log('Database connected successfully');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    } else {
      console.error(`An unknown error occurred.`);
    }
    process.exit(1);
  }
};

export default connectDB;
