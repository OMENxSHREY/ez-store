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

export async function POST(request: Request) {
  let connection;
  try {
    const { customer_email, product_id, quantity } = await request.json();
    connection = await pool.getConnection();

    // Check if item already exists in cart
    const [existing] = await connection.execute(
      'SELECT * FROM cart_items WHERE customer_email = ? AND product_id = ?',
      [customer_email, product_id]
    );

    if (Array.isArray(existing) && existing.length > 0) {
      // Update quantity if item exists
      await connection.execute(
        'UPDATE cart_items SET quantity = quantity + ? WHERE customer_email = ? AND product_id = ?',
        [quantity, customer_email, product_id]
      );
    } else {
      // Insert new item if it doesn't exist
      await connection.execute(
        'INSERT INTO cart_items (customer_email, product_id, quantity) VALUES (?, ?, ?)',
        [customer_email, product_id, quantity]
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Item added to cart successfully'
    });
    
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add item to cart' },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}