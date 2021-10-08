const Pool = require('pg').Pool
const pool = new Pool({
    user: 'doadmin',
    host: 'db-postgresql-nyc1-17454-do-user-8244563-0.b.db.ondigitalocean.com',
    database: 'defaultdb',
    password: 'njrjr67p3go006f1',
    port: 25060,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;