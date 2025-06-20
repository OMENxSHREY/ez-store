import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jisoo_2008',
  database: 'online_store',
  waitForConnections: true,
  connectionLimit: 10
});

export async function GET() {
  let connection;
  try {
    connection = await pool.getConnection();
    
    const [payments] = await connection.execute(
      `SELECT p.*, c.name as customer_name 
       FROM payments p
       JOIN customers c ON p.customer_email = c.email
       ORDER BY p.created_at DESC`
    );

    return NextResponse.json({ success: true, payments });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch payment records' },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}