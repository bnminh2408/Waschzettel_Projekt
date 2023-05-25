let mariadb = require('mariadb');

let pool = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'waschzettel'
});

module.exports = Object.freeze({
    pool: pool
});