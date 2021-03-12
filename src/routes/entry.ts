import * as Router from 'koa-router';
import {entryController} from '../controllers';

const router = new Router();

router.post('/journal/add', entryController.add);

export default router;
