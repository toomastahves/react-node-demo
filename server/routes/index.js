import authRoutes from './auth';
import petsRoutes from './pets';

const routes = (app) => {
  app.use('/auth', authRoutes);
  app.use('/api/pets', petsRoutes);
};

export default routes;
