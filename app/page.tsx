import { cookies } from 'next/headers';
import React from 'react';
import Navbar from '@/components/Navbar';
import {
	Hero,
	Services,
	Process,
	Features,
	Work,
	Pricing,
	FAQ,
	Contact,
} from '@/components/sections';

const SUBTITLES: Record<'a' | 'b', string> = {
	a: 'Websites, SEO, and automation — everything you need to grow with less stress.',
	b: 'More customers. Less busywork. Smarter growth for your business.',
};

export default function Page() {
	const cookieStore = cookies();

	const variant =
		(cookieStore.get('exp_hero_headline')?.value as 'a' | 'b') ?? 'a';
	const subtitle = SUBTITLES[variant];
	return (
		<div className='min-h-screen'>
			<Navbar />
			<Hero subtitle={subtitle} variant={variant} />
			<Services />
			<Process />
			<Features />
			<Work />
			<Pricing />
			<FAQ />
			<Contact />
			<footer className='border-t border-zinc-200 dark:border-zinc-800 py-10'>
				<div className='container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-300'>
					<div className='flex items-center gap-3'>
						<div className='w=6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400' />
						<span>© {new Date().getFullYear()} SiteFoundry.ai</span>
					</div>
					<div className='flex flex-items-center gap-5'>
						<a
							href='#services'
							className='hover:text-zinc-900 dark:hover:text-zinc-100'
						>
							Services
						</a>
						<a
							href='#work'
							className='hover:text-zinc-900 dark:hover:text-zinc-100'
						>
							Work
						</a>
						<a
							href='#pricing'
							className='hover:text-zinc-900 dark:hover:text-zinc-100'
						>
							Pricing
						</a>
						<a
							href='#contact'
							className='hover:text-zinc-900 dark:hover:text-zinc-100'
						>
							Contact
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
