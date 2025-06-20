import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT 1');
    return NextResponse.json({ status: 'Database connected successfully' });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
  }
}