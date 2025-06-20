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

export async function PUT(request: Request) {
  let connection;
  try {
    const { id, quantity, customer_email } = await request.json();
    connection = await pool.getConnection();

    await connection.execute(
      'UPDATE cart_items SET quantity = ? WHERE id = ? AND customer_email = ?',
      [quantity, id, customer_email]
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Cart item updated successfully'
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update cart item' },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}