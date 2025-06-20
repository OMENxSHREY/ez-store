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
    
    const [items] = await connection.execute(
      `SELECT cart_items.*, products.name as product_name, products.price, products.image 
       FROM cart_items 
       JOIN products ON cart_items.product_id = products.id 
       WHERE cart_items.customer_email = ?`,
      [email]
    );

    return NextResponse.json({ 
      success: true, 
      items 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch cart items' },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}