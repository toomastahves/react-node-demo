import { Router } from 'express';
import { signup, signin, signinjwt } from '../controllers/auth';
const router = new Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signinjwt', signinjwt);

export default router;
