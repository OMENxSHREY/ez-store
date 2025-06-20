import { NextResponse } from 'next/server';
import pool from '../../../../../lib/db';

export async function DELETE(request: Request) {
  let connection;
  
  try {
    const { id } = await request.json();
    
    connection = await pool.getConnection();
    await connection.execute(
      'DELETE FROM customers WHERE id = ?',
      [id]
    );

    return NextResponse.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return NextResponse.json(
      { message: 'Error deleting customer' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}