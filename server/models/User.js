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
  }
});

User.pre('save', function(next) {
  const password = createSalt(this.password);
  this.password = password;
  next();
});

export default db.model('User', User);
