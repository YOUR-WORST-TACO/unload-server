import * as debug from 'debug';

const log = debug('unload-server:models:journal');

export default (sequelize, Sequelize) => {
    return sequelize.define('journal', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            len: [0, 64]
        },
        first_post: {
            type: Sequelize.DATE,
            defaultValue: Date.now()
        },
        last_post: {
            type: Sequelize.DATE,
            defaultValue: Date.now()
        }
    })
};
