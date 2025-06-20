import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT * FROM products WHERE category = ? LIMIT 1',
      ['gift_cards']
    );
    connection.release();

    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json({ success: true, product: rows[0] });
    }
    
    return NextResponse.json(
      { success: false, error: 'Gift card not found' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gift card' },
      { status: 500 }
    );
  }
}