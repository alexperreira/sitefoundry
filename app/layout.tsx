import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	metadataBase: new URL('https://sitefoundry.ai'),
	title: {
		default: 'SiteFoundry.ai - Build. Rank. Automate. Grow.',
		template: '%s - SiteFoundry.ai',
	},
	description:
		'Business growth through development, SEO, design, and AI automation. Fast websites, clean UX, and agents that work while you sleep.',
	openGraph: {
		title: 'SiteFoundry.ai',
		description:
			'Business growth through development, SEO, design, and AI automation.',
		url: 'https://sitefoundry.ai',
		siteName: 'SiteFoundry.ai',
		images: [
			{ url: '/og.png', width: 1200, height: 630, alt: 'SiteFoundry.ai' },
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: { index: true, follow: true },
};

const themeInit = `(() => { try { const d = document.documentElement; const s = localStorage.getItem('sf-theme'); const m = window.matchMedia('(prefers-color-scheme: dark)').matches; const dark = s ? s === 'dark' : m; d.classList.toggle('dark', dark); } catch (_) {} })();`;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInit }} />
			</head>
			{/* <body className='min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased'>
				{children}
			</body> */}
			<body className='min-h-screen antialiased'>{children}</body>
		</html>
	);
}
