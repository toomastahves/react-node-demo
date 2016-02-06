import jwt from 'jsonwebtoken';
import config from '../config/';

const signToken = (_id) => {
  return jwt.sign({ _id }, config.TOKEN_SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, config.TOKEN_SECRET);
};

export { signToken, verifyToken };
