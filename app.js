import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user-routes';
import blogRouter from './routes/blog-routes';

const app = express();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
mongoose
  .connect(
    'mongodb+srv://admin:9Sern3T2tMWg1ZE1@cluster0.tjhtmkn.mongodb.net/BlogApi?retryWrites=true&w=majority'
  )
  .then(() => app.listen(8080))
  .then(() =>
    console.log('Connected to database and listening to localhost 8080')
  )
  .catch((err) => console.log(err));
