import exress, { Router } from 'express';
//Import index action from shows controller
import { index } from './controllers/shows';

//Initialize the router
const router = Router();

//Handle /shows.json route withindex action from shows controller
router.route('/shows.json')
    .get(index);

export default router;