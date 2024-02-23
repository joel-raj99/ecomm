import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router/Productapi.js';

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:4200",
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', router);

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('error connecting to database : ', error);
  }
};

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server running at https://localhost:${PORT}`);
});