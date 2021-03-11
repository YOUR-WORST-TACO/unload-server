import * as Koa from 'koa';
import * as json from 'koa-json';
import * as debug from 'debug';
import * as routes from './routes';

import {database as db} from './resources';
import config from './config';
import {user} from './models';

/*
Make a journal,
 */

const log = debug('unload-server');

const app = new Koa();
app.use(json());

for (const routeKey of Object.keys(routes)) {
    app.use(routes[routeKey].routes());
}

const init = async () => {
    await db.init();

    const newUser = new user('painis');

    app.listen(config.server.port, () => {
        log('server started on port: %s', config.server.port);
    })
}

init();
