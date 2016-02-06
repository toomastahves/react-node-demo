import { Router } from 'express';
import { getPets, createPet, updatePet, deletePet, getPet } from '../controllers/pets';
const router = new Router();
import { isAuthenticated } from '../express/protectRoutes';

router.get('/', getPets);
router.post('/', isAuthenticated, createPet);
router.put('/', isAuthenticated, updatePet);
router.delete('/', isAuthenticated, deletePet);
router.get('/:_id', getPet);

export default router;
