import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.menu.deleteMany();
  await prisma.user.deleteMany();

  const userPassword = await bcrypt.hash('user1234', 10);
  const adminPassword = await bcrypt.hash('admin1234', 10);

  const user = await prisma.user.create({
    data: {
      name: 'user',
      email: 'user@gmail.com',
      password: userPassword,
    },
  });

  const admin = await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@gmail.com',
      password: adminPassword,
      role: 'Admin',
    },
  });

  console.log('✅ Users created:', { user, admin });

  const menuItems = await prisma.menu.createMany({
    data: [
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
        imageUrl: 'https://example.com/margherita.jpg',
        price: 1200,
      },
      {
        name: 'Spaghetti Carbonara',
        description: 'Creamy pasta with pancetta, egg, and Parmesan cheese.',
        imageUrl: 'https://example.com/carbonara.jpg',
        price: 1500,
      },
      {
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce with Caesar dressing and croutons.',
        imageUrl: 'https://example.com/caesar.jpg',
        price: 900,
      },
    ],
  });

  console.log('✅ Menu items created:', menuItems);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding error:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
