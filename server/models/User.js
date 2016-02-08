import { Schema } from 'mongoose';
import { createSalt } from '../helpers/salt';
import db from '../databases/mainDb';

const User = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
});

User.pre('save', function(next) {
  const password = createSalt(this.password);
  this.password = password;

  const now = new Date();
  this.updated_at = now;
  if(!this.created_at) {
    this.created_at = now;
  }

  next();
});

export default db.model('User', User);
