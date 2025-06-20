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

export async function DELETE(request: Request) {
  let connection;
  try {
    const { id, customer_email } = await request.json();
    connection = await pool.getConnection();

    await connection.execute(
      'DELETE FROM cart_items WHERE id = ? AND customer_email = ?',
      [id, customer_email]
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Item removed from cart'
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to remove item from cart' },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}