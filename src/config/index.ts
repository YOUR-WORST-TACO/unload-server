import * as dotenv from 'dotenv';

dotenv.config();

export default {
    server: {
        port: +process.env.PORT || 8080,
    },
    database: {
        database: process.env.DATABASE || 'unload',
        host: process.env.DATABASE_HOST || 'localhost',
        user: process.env.DATABASE_USER || 'taco',
        password: process.env.DATABASE_PASSWORD || '',
        dialect: process.env.DATABASE_TYPE || 'postgres',
        pool: {
            max: +process.env.POOL_MAX || 5,
            min: +process.env.POOL_MIN || 0,
            acquire: +process.env.POOL_ACQUIRE || 30000,
            idle: +process.env.POOL_IDLE || 10000
        }
    }
};
