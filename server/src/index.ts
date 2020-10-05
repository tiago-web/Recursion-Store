import express from 'express';
import { HelloWorld } from './routes';
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

app.get('/', HelloWorld);

app.listen(3333);
