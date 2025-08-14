'use client';
import React from 'react';
// import { Button } from '@/components/ui/Button';

export default function Navbar() {
	return (
		<header className='sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'>
			<div className='container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between'>
				<a href='#home' className='flex items-center gap-2'>
					<div className='w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 shadow' />
					<span className='font-semibold tracking-tight'>
						SiteFoundry<span className='text-indigo-600'>.ai</span>
					</span>
				</a>
				<nav className='hidden md:flex items-center gap-8 text-sm text-zinc-700'>
					<a href='#services' className='hover:text-zinc-900'>
						Services
					</a>
					<a href='#process' className='hover:text-zinc-900'>
						How it works
					</a>
					<a href='#pricing' className='hover:text-zinc-900'>
						Pricing
					</a>
					<a href='#faq' className='hover:text-zinc-900'>
						FAQ
					</a>
					<a href='#contact' className='hover:text-zinc-900'>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
}
