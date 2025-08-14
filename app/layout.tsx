import React from 'react';
import '../styles/globals.css';
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

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className='min-h-screen bg-white text-zinc-900 antialiased'>
				{children}
			</body>
		</html>
	);
}
