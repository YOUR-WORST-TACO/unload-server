import * as debug from 'debug';
import * as Sequelize from 'sequelize';
import {userSchema, entrySchema, journalSchema } from '../models';

import config from '../config';
const database = config.database;

const log = debug('unload-server:resources:database');

// @ts-ignore
const sequelize = new Sequelize(database.database, database.user, database.password, {
    host: database.host,
    dialect: database.dialect,
    pool: {
        max: database.pool.max,
        min: database.pool.min,
        acquire: database.pool.min,
        idle: database.pool.idle
    }
})

const User = userSchema(sequelize, Sequelize);
const Journal = journalSchema(sequelize, Sequelize);
const Entry = entrySchema(sequelize, Sequelize);

User.hasMany(Journal, {as: 'journals'});
Journal.belongsTo(User, {as: 'user'});
Journal.hasMany(Entry, {as: 'entries'})
Entry.belongsTo(Journal, {as: 'journal'});

export default {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: User,
    Journal: Journal,
    Entry: Entry
};

