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
    readonly id: number; // shall not change
    readonly key: string // shall not change
    readonly username: string // shall not change

    password: string;
    firstname: string;
    lastname: string;
    eula: boolean;
    verified: boolean;

    constructor(
        key: string,
        username: string,
        password: string,
        id?: number,
        firstname?: string,
        lastname?: string,
        eula?: boolean,
        verified?: boolean
    ) {
        this.key = key;
        this.username = username;
        this.password = password;
        this.id = id || NaN;
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.eula = eula || false;
        this.verified = verified || false;
    }
}
