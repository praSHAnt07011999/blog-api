import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:9Sern3T2tMWg1ZE1@cluster0.tjhtmkn.mongodb.net/BlogApi?retryWrites=true&w=majority'
  )
  .then(() => app.listen(8080))
  .then(() =>
    console.log('Connected to database and listening to localhost 8080')
  )
  .catch((err) => console.log(err));
