<<<<<<< HEAD
import exress, { Router } from 'express';
//Import index action from shows controller
import { index } from './controllers/shows';

//Initialize the router
const router = Router();

//Handle /shows.json route withindex action from shows controller
router.route('/shows.json')
    .get(index);

=======
import exress, { Router } from 'express';
//Import index action from shows controller
import { index } from './controllers/shows';

//Initialize the router
const router = Router();

//Handle /shows.json route withindex action from shows controller
router.route('/shows.json')
    .get(index);

>>>>>>> 9374ee941516a47c0e9dcfc6f11e4acff2ee717a
export default router;