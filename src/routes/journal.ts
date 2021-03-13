import * as Router from 'koa-router';
import {journalController} from '../controllers';

const router = new Router();

router.post('/api/journal-list', journalController.list);
router.post('/api/add-journal', journalController.add);
router.post('/api/remove-journal', journalController.remove);
router.post('/api/add-entry', journalController.addEntry);
router.post('/api/lock-entry', journalController.lockEntry);
router.post('/api/get-entries', journalController.getEntries);

export default router;
