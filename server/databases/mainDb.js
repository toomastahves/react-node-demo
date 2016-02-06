import mongoose from 'mongoose';
import config from '../config/';

const connectToMainDatabase = () => {
  const url = process.env.MONGOLAB_URI || config.MONGOLAB_URI;
  const conn = mongoose.createConnection(url);
  try {
    conn.on('connected', () => {
      console.log('Connected to mongodb connectToMainDatabase.');
    });
    return conn;
  } catch(e) {
    console.log('Error connecting mongodb connectToMainDatabase. Check connection string.');
  }
};

export default connectToMainDatabase();
