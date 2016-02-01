
export const isAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];
  return next();
  // return next(new Error(401));
};
