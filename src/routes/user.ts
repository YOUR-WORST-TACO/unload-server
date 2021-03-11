import * as Router from 'koa-router';
import {userController} from '../controllers';

const router = new Router();

router.post('/user/add', userController.add);
router.post('/user/update', userController.update);
router.post('/user/remove', userController.remove);

export default router;
