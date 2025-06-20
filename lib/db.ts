import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Make sure this matches your MySQL password
  database: 'online_store',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;