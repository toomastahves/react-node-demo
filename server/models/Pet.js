import mongoose, { Schema } from 'mongoose';

const Pet = new Schema({
  name: {
    type: String
  }
});

export default mongoose.model('Pet', Pet);
