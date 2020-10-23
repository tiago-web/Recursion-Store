import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { errors } from "celebrate";
import "express-async-errors";

import routes from './routes';
import errorHandler from '../../errors/errorHandler';
import { connectDB } from '@shared/infra/mongoose';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());
app.use(errorHandler);

connectDB();

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
