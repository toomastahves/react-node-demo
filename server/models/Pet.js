import { Schema } from 'mongoose';
import db from '../databases/mainDb';

const Pet = new Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String
  }
});

export default db.model('Pet', Pet);
