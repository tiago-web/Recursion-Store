import "dotenv/config";
import express from 'express';

import cors from 'cors';
import routes from './routes';

import errorHandler from "../errors/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
