import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jisoo_2008', // Add your My
    database: 'online_store'
});

export default pool;