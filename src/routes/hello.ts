import * as Router from "koa-router";
import {helloController} from '../controllers';

const router = new Router();

router.get('/', helloController.greet);
router.get('/slander', helloController.slander);

export default router;
