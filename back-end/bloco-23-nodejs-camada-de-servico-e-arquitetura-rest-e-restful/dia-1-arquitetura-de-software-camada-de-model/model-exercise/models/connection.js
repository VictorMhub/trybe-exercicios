const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'vitu',
    password: 'Victor127845!',
    host: 'localhost',
    database: 'model_exercise',
});

module.exports = connection;
