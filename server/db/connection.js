import mongoose from 'mongoose';

export const connectToDatabase = () => {
  const url = process.env.MONGOLAB_URI || 'mongodb://user:pass@ds037005.mongolab.com:37005/toomastahvesdb';
  mongoose.connect(url);
};

const handleDatabaseError = (e) => {
  console.log(e);
};

export const execute = (functionToExecute, data, next) => {
  try {
    return functionToExecute(data, next);
  } catch(e) {
    handleDatabaseError(e);
  }
};
