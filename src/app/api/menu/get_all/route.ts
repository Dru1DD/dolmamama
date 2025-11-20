import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const menuList = await prisma.menu.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json({ menuList });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch menu' }, { status: 500 });
  }
}
