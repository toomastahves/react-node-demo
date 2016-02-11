import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

import config from '../config/';

export const connectToMainDatabase = () => {

  const url = process.env.MONGOLAB_URI || config.MONGOLAB_URI;
  const db = mongoose.createConnection();
  try {
    db.open(url, (err) => {
      console.log('open', err);
    })
    .then((res) => {
      console.log('then', res);
    })
    .catch((err) => {
      console.log('catch', err);
    });
  } catch(err) {
    console.log('Error connecting mongodb connectToMainDatabase. Check connection string.');
  }
};
