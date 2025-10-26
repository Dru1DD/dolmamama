# Dolmamama

A modern web application built with Next.js, featuring authentication, database management with Prisma, and a beautiful UI with Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.5 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: NextAuth.js
- **State Management**: TanStack React Query
- **Package Manager**: pnpm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- pnpm package manager
- PostgreSQL database (or Supabase account)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dolmamama
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```bash
   cp .env.example .env
   ```

   Generate a secure secret for NextAuth:

   ```bash
   openssl rand -base64 32
   ```

   Add the generated secret to your `.env` file as `NEXTAUTH_SECRET`.

   Configure your database URLs:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `DIRECT_URL`: Direct database connection (for migrations)

   You can get these from your Supabase project settings.

4. **Database Setup**

   ```bash
   pnpm prisma:generate
   pnpm prisma:migrate
   pnpm prisma:seed
   ```

5. **Start Development Server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm prisma:generate` - Generate Prisma client
- `pnpm prisma:migrate` - Run database migrations
- `pnpm prisma:seed` - Seed the database
- `pnpm prisma:studio` - Open Prisma Studio
- `pnpm prisma:setup` - Complete Prisma setup (generate + migrate)

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and configurations
├── providers/          # React context providers
├── styles/            # Global styles
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🔧 Configuration

The project uses several configuration files:

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.mjs` - ESLint configuration
- `prisma/schema.prisma` - Database schema


## Test data
User with customer role:
- `email` - `user@gmail.com`
- `password` - `user1234`

User with admin role:
- `email` - `admin@gmail.com`
- `password` - `user1234`