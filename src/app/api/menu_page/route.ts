import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const menuList = await prisma.menu.findMany();
    return NextResponse.json({ menuList }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load menu' }, { status: 500 });
  }
}
