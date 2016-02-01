import { execute } from '../db/connection';
import { getData } from '../controllers/data';
import { Router } from 'express';
import { isAuthenticated } from '../validation/authentication';

const router = new Router();

router.get('/', isAuthenticated, (req, res) => {
  execute(getData, (result) => {
    res.send(result);
  });
});


export default router;
