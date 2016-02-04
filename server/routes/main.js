import { getPets, createPet, updatePet, deletePet, getPet } from '../controllers/pets';

const routes = (app) => {
  app.route('/api/pets')
    .get(getPets)
    .post(createPet)
    .put(updatePet)
    .delete(deletePet);
  app.route('/api/pet/:_id')
    .get(getPet);
};

export default routes;
