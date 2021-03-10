import * as dotenv from 'dotenv';

dotenv.config();

export default {
    server: {
        port: 8080,
    },
    database: {
        host: 'localhost',
        user: 'taco',
        max: 20,
        port: 5432,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
        database: 'unload'
    }
};
