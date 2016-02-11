import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

import config from '../config/';

export const connectToMainDatabase = () => {

  const url = process.env.MONGOLAB_URI || config.MONGOLAB_URI;

  try {
    mongoose.connect(url);
    mongoose.connection.on('connected', () => {
      console.log('Mongoose default connection open to ', url);
    });
    mongoose.connection.on('error', (err) => {
      console.log('Mongoose default connection error: ', err);
    });
    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose default connection disconnected');
    });
  } catch(err) {
    console.log('Error connecting mongodb connectToMainDatabase. Check connection string.');
  }
};
