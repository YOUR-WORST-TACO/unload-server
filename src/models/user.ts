import * as debug from 'debug';

const log = debug('unload-server:models:user');

/*
id INT
username TEXT (limit?)
firstname TEXT (limit?)
lastname TEXT (limit?)
email TEXT (limit?)
password TEXT (limit?)
key TEXT (is there a better way to store key?)
verified BOOL
eula BOOL
 */

export default (sequelize, Sequelize) => {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [2, 32]
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [0, 64]
        },
        firstname: {
            type: Sequelize.STRING,
        },
        lastname: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [0, 128]
        },
        key: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [64, 256]
        },
        verified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        eula: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
}
