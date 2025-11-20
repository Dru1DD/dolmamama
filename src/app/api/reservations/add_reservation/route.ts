import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const reservation = await prisma.reservation.create({
      data: {
        ...data,
        time: new Date(data.time),
        guests: Number(data.guests),
      },
    });
    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Reservation failed' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email') || '';

    const reservation = await prisma.reservation.findMany({
      where: {
        email: email,
      },
    });
    return NextResponse.json({
      reservation,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Reservation failed' }, { status: 500 });
  }
}
