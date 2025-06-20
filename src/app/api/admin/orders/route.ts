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
    
    const [orders] = await connection.execute(
      `SELECT o.*, 
              c.name as customer_name,
              p.name as product_name,
              p.image as product_image
       FROM orders o
       JOIN customers c ON o.customer_email = c.email
       JOIN products p ON o.product_id = p.id
       ORDER BY o.order_date DESC`
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
