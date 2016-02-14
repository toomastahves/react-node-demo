import User from '../models/User';
import { signToken, verifyToken } from '../helpers/token';
import { comparePasswords } from '../helpers/salt';

export const signup = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password)
    return res.status(422).send({ error: 'Problems with parameters' });

  const promise = User.findOne({ username }).exec();

  promise.then((user) => {
    if(user)
      return res.status(422).send({ error: 'Username already taken' });

    const newUser = new User({
      username,
      password
    });

    newUser.save((err, result) => {
      if(err)
        return res.status(503).send({ error: err.message });

      const token = signToken(result._id);

      return res.status(201).send({
        token,
        username,
        _id: result._id
      });
    });
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};

export const signin = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(!username || !password)
    return res.status(422).send({ error: 'Problems with parameters' });

  const promise = User.findOne({ username }).exec();

  promise.then((user) => {
    if(!user)
      return res.status(422).send({ error: 'Username not found' });

    const compare = comparePasswords(password, user.password);

    if(!compare)
      return res.status(422).send({ error: 'Wrong password' });

    const token = signToken(user._id);

    return res.status(200).send({
      token,
      username,
      _id: user._id
    });
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};

export const signinjwt = (req, res) => {
  const token = req.headers['x-access-token'];

  const result = verifyToken(token);

  const promise = User.findOne({ _id: result._id }).exec();

  promise.then((user) => {
    if(!user)
      return res.status(422).send({ error: 'User not found' });

    return res.status(200).send({
      token,
      username: user.username,
      _id: user._id
    });
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};

export const checkusername = (req, res) => {
  console.log('body', req.body);
  const username = req.body.username;
  if(!username)
    return res.status(422).send({ error: 'Problem with params' });

  const promise = User.findOne({ username }).exec();

  promise.then((user) => {
    if(!user)
      return res.status(200).send({ taken: false, username });

    return res.status(200).send({ taken: true, username });
  });

  promise.catch((err) => {
    return res.status(503).send({ error: err.message });
  });
};
