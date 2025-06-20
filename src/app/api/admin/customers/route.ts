import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET() {
  let connection;
  
  try {
    connection = await pool.getConnection();
    const [customers] = await connection.execute(
      'SELECT id, name, email, address, phone, created_at FROM customers ORDER BY created_at DESC'
    );

    return NextResponse.json({ customers }, { status: 200 });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { message: 'Error fetching customers' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}