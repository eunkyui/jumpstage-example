import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

// 라우트 설정
export const config = {
  matcher: [
    '/jobs/:path*',
    '/returnship/:path*',
    '/community/:path*',
    '/profile/:path*',
    '/verify/:path*',
    '/terms',
    '/privacy',
    '/forgot-password',
  ],
}