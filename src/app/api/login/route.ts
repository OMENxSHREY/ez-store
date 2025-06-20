import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  let connection;
  
  try {
    const { email, password } = await request.json();
    connection = await pool.getConnection();

    // Get user from database
    const [rows] = await connection.execute(
      'SELECT * FROM customers WHERE email = ?',
      [email]
    );

    const user = (rows as any)[0];

    if (!user) {
      return NextResponse.json(
        { message: 'Incorrect email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: 'Incorrect email or password' },
        { status: 401 }
      );
    }

    // Return user data without sensitive information
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone
    };

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: userData
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}