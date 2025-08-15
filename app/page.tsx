'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Features from '@/components/sections/Features';
import Work from '@/components/sections/Work';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Page() {
	return (
		<div className='min-h-screen bg-white text-zinc-900 dark:text-zinc-100'>
			<Navbar />
			<Hero />
			<div className='py-10 md:py-14 border-y border-zinc-100 bg-white/60 dark:bg-zinc-950/70 backdrop-blur'>
				<div className='container mx-auto px-6 max-w-7xl'>
					<p className='text-center text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400'>
						Trusted by growth-minded teams
					</p>
					<div className='mt-6 grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center opacity-70'>
						{'ABCDE'.split('').map((_, i) => (
							<div
								key={i}
								className='h-8 w-28 rounded-md bg-zinc-200 dark:bg-zinc-800'
							/>
						))}
					</div>
				</div>
			</div>
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
