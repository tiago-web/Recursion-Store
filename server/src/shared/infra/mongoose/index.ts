import Mongoose from 'mongoose';

let database: Mongoose.Connection;

export const connectDB = () => {
  const DB_HOST = process.env.DB_HOST || '';
  console.log(`DB_HOST: ${DB_HOST}`);
  if (database) {
    return;
  }

  Mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected Successfully to Mongo database');
  });

  database.on('error', () => {
    console.log('Error connecting to Mongo database');
  });
};

export const disconnectDB = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
