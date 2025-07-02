import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for the login page itself
    if (request.nextUrl.pathname === '/admin/login') {
      // Check if user is already logged in
      const token = request.cookies.get('admin_token');
      if (token && token.value === 'valid_token') {
        // Redirect to admin dashboard if already logged in
        const dashboardUrl = new URL('/admin/blog', request.url);
        return NextResponse.redirect(dashboardUrl);
      }
      return NextResponse.next();
    }

    // Check for admin token in cookies
    const token = request.cookies.get('admin_token');

    // If no token is present, redirect to login
    if (!token || token.value !== 'valid_token') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configure the paths that should be handled by this middleware
export const config = {
  matcher: '/admin/:path*',
};