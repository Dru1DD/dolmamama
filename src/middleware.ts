import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    const isProtectedRoute = path.startsWith('/dashboard') || path.startsWith('/panel');

    if (isProtectedRoute && !token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    if (path.startsWith('/panel') && token?.role !== 'Admin') {
      return NextResponse.redirect(new URL('/403', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  matcher: ['/dashboard/:path*', '/panel/:path*'],
};
