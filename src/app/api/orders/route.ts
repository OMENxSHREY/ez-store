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

export async function GET(request: Request) {
  let connection;
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    connection = await pool.getConnection();
    
    const [orders] = await connection.execute(
      `SELECT o.*, p.name as product_name, p.image as product_image
       FROM orders o
       JOIN products p ON o.product_id = p.id
       WHERE o.customer_email = ?
       ORDER BY o.order_date DESC`,
      [email]
    );

    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}