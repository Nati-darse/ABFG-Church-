import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2929;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the API! It is sucessfully connected !!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});