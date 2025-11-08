import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const reservation = await prisma.reservation.create({
      data,
    });
    return NextResponse.json(reservation);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Reservation failed' }, { status: 500 });
  }
}
