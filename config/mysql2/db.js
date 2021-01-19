const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'tin',
    password: 'root8TOOR',
    database: 'tin_z_a_bd12c_s17531'
});
module.exports = pool;