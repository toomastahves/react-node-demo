import { verifyToken } from '../helpers/token';

export const isAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if(!token)
    return res.status(401).send({ error: 'Not authenticated' });

  const result = verifyToken(token);

  if(result)
    return next();

  return res.status(401).send({ error: 'Limbo' });
};
