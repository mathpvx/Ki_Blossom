import { NextResponse } from 'next/server';

export function middleware(req) {
	const url = req.nextUrl.clone();

	if (url.pathname === '/') {
		url.pathname = '/home';
		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}
