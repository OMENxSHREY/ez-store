import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  let connection;
  
  try {
    const body = await request.json();
    console.log('Received data:', { ...body, password: '***' });

    const { name, email, password, address, phone } = body;

    // Validate input
    if (!name || !email || !password || !address || !phone) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get connection from pool
    connection = await pool.getConnection();
    console.log('Database connected');

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await connection.execute(
      'INSERT INTO customers (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)',
      [name, email, hashedPassword, address, phone]
    );

    console.log('User inserted successfully');
    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });

  } catch (error: any) {
    console.error('Signup error:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Error creating account' },
      { status: 500 }
    );

  } finally {
    if (connection) {
      connection.release();
    }
  }
}