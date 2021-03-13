import * as Router from 'koa-router';
import {userController} from '../controllers';

const router = new Router();

router.post('/api/add-user', userController.add);
router.post('/api/update-user', userController.update);
router.post('/api/remove-user', userController.remove);

export default router;
