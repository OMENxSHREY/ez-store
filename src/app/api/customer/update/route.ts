import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jisoo_2008',
  database: 'online_store',
  waitForConnections: true,
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  debug: true,
  trace: true
});

export async function PUT(request: Request) {
  let connection;
  try {
    // Log received data
    const customerData = await request.json();
    console.log('Updating customer:', customerData);

    // Get connection
    connection = await pool.getConnection();

    // Log SQL query
    const query = 'UPDATE customers SET name = ?, phone = ?, address = ? WHERE email = ?';
    const values = [
      customerData.name,
      customerData.phone,
      customerData.address,
      customerData.email  // Using email as identifier instead of id
    ];
    console.log('Query:', query);
    console.log('Values:', values);

    const [result] = await connection.execute(query, values);
    console.log('Update result:', result);

    return NextResponse.json({ 
      success: true, 
      message: 'Profile updated successfully',
      result 
    });
    
  } catch (error: any) {
    // Detailed error logging
    console.error('Full error:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });

    return NextResponse.json(
      { 
        success: false, 
        error: 'Database update failed',
        details: error.message 
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
      console.log('Connection released');
    }
  }
}