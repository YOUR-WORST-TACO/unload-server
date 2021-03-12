import * as debug from 'debug';
import * as util from 'util';
import * as dayjs from 'dayjs';

const log = debug('unload-server:models:entry');

/*
id INT
user_id FK INT
content TEXT (encrypt?)
post_date DATE? is there a date type
locked BOOL
 */

export default (sequelize, Sequelize) => {
    return sequelize.define('entry', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: Sequelize.TEXT
        },
        date: {
            type: Sequelize.DATE,
            defaultValue: Date.now()
        },
        locked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    })
};
