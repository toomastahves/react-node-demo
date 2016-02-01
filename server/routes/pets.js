import { execute } from '../db/connection';
import { getPets, createPet, deletePet, updatePet } from '../controllers/pets';
import { Router } from 'express';
import { isAuthenticated } from '../validation/authentication';

const router = new Router();

router.get('/', isAuthenticated, (req, res) => {
  execute(getPets, (result) => {
    res.send(result);
  });
});

router.post('/', isAuthenticated, (req, res) => {
  execute(createPet, req.body.pet, (result) => {
    res.send(result);
  });
});

router.delete('/', isAuthenticated, (req, res) => {
  execute(deletePet, req.body._id, (result) => {
    res.send(result);
  });
});

router.put('/', isAuthenticated, (req, res) => {
  execute(updatePet, req.body.pet, (result) => {
    res.send(result);
  });
});

export default router;
