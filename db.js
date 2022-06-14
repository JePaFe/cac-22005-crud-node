require('dotenv').config()

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST, //'localhost', // 127.0.0.1
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if (error) { throw error }
});

module.exports = connection;

// connection.query('SELECT id, nombre FROM productos', (error, results) => {
//     if (error) { throw error }

//     console.log(results);
// });

// connection.destroy();
