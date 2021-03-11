import * as debug from 'debug';

const log = debug('unload-server:models:entry');

/*
id INT
user_id FK INT
content TEXT (encrypt?)
post_date DATE? is there a date type
locked BOOL
 */

const EntrySchema = [
    'id INT PRIMARY KEY NOT NULL',
    'CONSTRAINT fk_user FOREIGN KEY(id) REFERENCES users(id)',
    'content varchar(5120)',
    'post_date date',
    'locked BOOL'
];

export default class Entry {
    static readonly schema = {
        name: 'entries',
        data: EntrySchema
    };
    constructor() {
    }
}
