import bcrypt from 'bcryptjs';
import config from '../config/';

const createSalt = (password) => {
  return bcrypt.hashSync(password, config.SALT_STRENGTH);
};

const comparePasswords = (enteredPassword, realPassword) => {
  return bcrypt.compareSync(enteredPassword, realPassword);
};

export { createSalt, comparePasswords };
