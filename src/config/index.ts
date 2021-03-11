import * as dotenv from 'dotenv';

dotenv.config();

export default {
    server: {
        port: +process.env.PORT || 8080,
    },
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        user: process.env.DATABASE_USER || 'taco',
        max: +process.env.DATABASE_MAX || 20,
        port: +process.env.DATABASE_PORT || 5432,
        idleTimeoutMillis: +process.env.DATABASE_IDLE_TIMEOUT || 30000,
        connectionTimeoutMillis: +process.env.DATABASE_CONNECTION_TIMEOUT || 2000,
        database: process.env.DATABASE || 'unload'
    }
};
