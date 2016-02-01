import petsRoutes from './pets';
import dataRoutes from './data';

const routes = (app) => {
  app.use('/api/pets', petsRoutes);
  app.use('/api/data', dataRoutes);
};

export default routes;
