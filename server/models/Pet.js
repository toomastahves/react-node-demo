import { Schema } from 'mongoose';
import db from '../databases/mainDb';

const Pet = new Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  homestatus: {
    type: Boolean,
    required: true
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
});

Pet.pre('save', function(next) {
  const now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now;
  }
  next();
});

export default db.model('Pet', Pet);
