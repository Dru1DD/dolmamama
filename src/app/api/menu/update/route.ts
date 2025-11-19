import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  try {
    const data = await req.json();

    const updated = await prisma.menu.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price,
        vegetarian: data.vegetarian,
        category: data.category,
      },
    });

    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
