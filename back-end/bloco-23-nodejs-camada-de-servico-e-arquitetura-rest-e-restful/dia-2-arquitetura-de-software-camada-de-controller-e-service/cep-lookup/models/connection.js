const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool ({
    host: 'localhost',
    user: 'vitu',
    password: 'Victor127845!',
    database: 'cep_lookup',
});

module.exports = connection;