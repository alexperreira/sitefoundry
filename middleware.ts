import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE = 'exp_hero_headline'; // 'a' | 'b'

// allow overriding from the URL for testing: /?exp=a
function readOverride(req: NextRequest): 'a' | 'b' | undefined {
	const p = req.nextUrl.searchParams.get('exp');
	return p === 'a' || p === 'b' ? p : undefined;
}

export function middleware(req: NextRequest) {
	const res = NextResponse.next();

	// preserve existing choice if present
	let variant =
		(req.cookies.get(COOKIE)?.value as 'a' | 'b' | undefined) ??
		readOverride(req);
	if (!variant) {
		variant = Math.random() < 0.5 ? 'a' : 'b';
	}
	res.cookies.set(COOKIE, variant, {
		path: '/',
		maxAge: 60 * 60 * 24 * 60,
		sameSite: 'lax',
	});

	//for debugging in dev
	res.headers.set('x-exp-hero-headline', variant);
	return res;
}

export const config = {
	matcher: ['/', '/(index)?'],
};
