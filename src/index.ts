import * as Koa from 'koa';
import * as json from 'koa-json';
import * as debug from 'debug';
import * as routes from './routes';

import {database as db} from './resources';
import config from './config';
import * as koaBody from 'koa-body';

const log = debug('unload-server');

const app = new Koa();
app.use(json());
app.use(koaBody());

for (const routeKey of Object.keys(routes)) {
    app.use(routes[routeKey].routes());
}

const init = async () => {
    await db.sequelize.sync()

    let emily = await db.User.findOne({
        where: db.Sequelize.or(
            {username: 'emdog'},
            {email: 'emily@gmail.com'}
        )
    });

    if (!emily) {
        emily = await db.User.create({
            username: 'emdog',
            email: 'emily@gmail.com',
            password: 'Denver*123',
            key: '1234'
        })
    }

    emily.firstname = "emily";
    emily.lastname = "bitch-tits";

    emily.save();

    log(emily.toJSON());

    app.listen(config.server.port, () => {
        log('server started on port: %s', config.server.port);
    });
};

init().catch((err) => {
    log('server errored catastrophically %s', err);
});
