const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_DB
})

global.db = pool.promise();