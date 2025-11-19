import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);
    await prisma.menu.delete({
      where: { id: data.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error((error as Error).message);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
