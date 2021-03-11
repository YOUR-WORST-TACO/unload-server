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

const UserSchema = [
    'id INT PRIMARY KEY NOT NULL',
    'username varchar(32) NOT NULL',
    'firstname varchar(64)',
    'lastname varchar(64)',
    'password varchar(128) NOT NULL',
    'key varchar(256)',
    'verified BOOL',
    'eula BOOL'
];

export default class User {
    static readonly schema = {
        name: 'users',
        data: UserSchema
    };
    readonly name: string;
    constructor(_name?: string) {
        this.name = _name;
        log('test user %s', this.name);
    }
}
