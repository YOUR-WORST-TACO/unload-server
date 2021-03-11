import {Pool} from 'pg';
import * as debug from 'debug';
import config from '../config';
import * as models from '../models';

const log = debug('unload-server:resources:database');
const pool = new Pool(config.database);

const createTable = async (name, data) => {
    try {
        const values = data.join(', ');
        await query('CREATE TABLE ' + name + '( ' + values + ' );');
        log('created table {%s}.', name);
    } catch (e) {
        log('table {%s} already exists, skipping...', name);
    }
}

export const init = async () => {
    log('attempting to connect to PostgreSQL at %s:%s', config.database.host, config.database.port);
    try {
        const client = await connect()
        log('connected to PostgreSQL at %s:%s', config.database.host, config.database.port);
        client.release();
        for (const modelKey of Object.keys(models)) {
            await createTable(
                models[modelKey].schema.name,
                models[modelKey].schema.data
            );
        }
    } catch (e) {
        switch (e.code) {
            case '3D000':
                log('database {%s} does not exist.', config.database.database);
                break;
            case 'ECONNREFUSED':
                log('connection to database at %s:%s refused.', config.database.host, config.database.port)
        }
        process.exit(-1);
    }
}

export const query = (text, values = []) => {
    return pool.query(text, values);
}

export const connect = () => {
    return pool.connect();
}
