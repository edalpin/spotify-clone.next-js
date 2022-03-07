import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // Token will exist if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })

  const url = req.nextUrl.clone()

  // If its a request for next-auth session or the token exists
  if (url.pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  // Redirect them to login if they dont have a token and are requesting a protected route
  if (!token && url.pathname !== '/login') {
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
}
