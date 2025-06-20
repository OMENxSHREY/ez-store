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
    const { customerEmail, amount, paymentMethod } = await request.json();
    
    connection = await pool.getConnection();
    await connection.beginTransaction();

    // First check if cart has items
    const [rows] = await connection.execute(
      `SELECT c.*, p.price, p.name as product_name
       FROM cart_items c
       JOIN products p ON c.product_id = p.id
       WHERE c.customer_email = ?`,
      [customerEmail]
    );

    // Type assertion for cart items
    const cartItems = rows as any[];
    if (cartItems.length === 0) {
      throw new Error('Cart is empty');
    }

    // Create payment record
    const paymentId = `PAY_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const [paymentResult] = await connection.execute(
      `INSERT INTO payments (customer_email, amount, payment_method, payment_id, status) 
       VALUES (?, ?, ?, ?, 'completed')`,
      [customerEmail, amount, paymentMethod, paymentId]
    );

    // Create order records for each cart item
    for (const item of cartItems) {
      await connection.execute(
        `INSERT INTO orders (payment_id, customer_email, product_id, quantity, price) 
         VALUES (?, ?, ?, ?, ?)`,
        [paymentId, customerEmail, item.product_id, item.quantity, item.price]
      );
    }

    // Clear the cart after successful order creation
    await connection.execute(
      `DELETE FROM cart_items WHERE customer_email = ?`,
      [customerEmail]
    );

    await connection.commit();
    
    return NextResponse.json({ 
      success: true, 
      paymentId,
      message: 'Payment and orders created successfully'
    });

  } catch (error) {
    if (connection) {
      await connection.rollback();
    }
    console.error('Payment error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Payment failed'
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}