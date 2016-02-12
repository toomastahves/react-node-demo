import { Router } from 'express';
import { signup, signin, signinjwt, checkusername } from '../controllers/auth';
const router = new Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signinjwt', signinjwt);
router.post('/checkusername', checkusername);

export default router;
