import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { password, email, name } = body;

    console.table({
      password,
      email,
    });

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({}, { status: 201 });
  } catch (error) {
    console.error(error);
  }
};
