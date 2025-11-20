import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const reservation = await prisma.reservation.findMany({
      orderBy: { time: 'desc' },
    });

    return NextResponse.json({
      reservation,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
  }
}
