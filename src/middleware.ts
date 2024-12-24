import { NextResponse } from 'next/server'
import { betterFetch } from "@better-fetch/fetch";
import type { NextRequest } from 'next/server'
import type { authClient } from './lib/auth';

type Session = typeof authClient.$Infer.Session;

//if has no session, redirect to /auth

export async function middleware(request: NextRequest) {
	const { data: session } = await betterFetch<Session>(
		"/api/auth/get-session",
		{
			baseURL: request.nextUrl.origin,
			headers: {
				cookie: request.headers.get("cookie") || "",
			},
		},
	);

	if (!session) {
		return NextResponse.redirect(new URL("/auth", request.url));
	}
	return NextResponse.next();
}

export const config = {
  matcher: '/protected',
}

