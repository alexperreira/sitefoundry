'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Moon, Sun } from 'lucide-react';

function useDarkMode() {
	const [dark, setDark] = React.useState<boolean>(false);
	React.useEffect(() => {
		const root = document.documentElement;
		const stored = localStorage.getItem('sf-theme');
		const prefers =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initial = stored ? stored === 'dark' : prefers;
		root.classList.toggle('dark', initial);
		setDark(initial);
	}, []);
	const toggle = React.useCallback(() => {
		const root = document.documentElement;
		const next = !root.classList.contains('dark');
		root.classList.toggle('dark', next);
		localStorage.setItem('sf-theme', next ? 'dark' : 'light');
	}, []);
	return { toggle };
}

export default function Navbar() {
	const { toggle } = useDarkMode();
	return (
		<header className='sticky top-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800'>
			<div className='container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between'>
				<a href='#home' className='flex items-center gap-2'>
					<div className='w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 shadow' />
					<span className='font-semibold tracking-tight'>
						SiteFoundry<span className='text-indigo-600'>.ai</span>
					</span>
				</a>
				<nav className='hidden md:flex items-center gap-8 text-sm text-zinc-700 dark:text-zinc-300'>
					<a
						href='#services'
						className='hover:text-zinc-900 dark:hover:text-white'
					>
						Services
					</a>
					<a
						href='#process'
						className='hover:text-zinc-900 dark:hover:text-white'
					>
						How it works
					</a>
					<a
						href='#pricing'
						className='hover:text-zinc-900 dark:hover:text-white'
					>
						Pricing
					</a>
					<a href='#faq' className='hover:text-zinc-900 dark:hover:text-white'>
						FAQ
					</a>
					<a
						href='#contact'
						className='hover:text-zinc-900 dark:hover:text-white'
					>
						Contact
					</a>
				</nav>
				<div className='flex items-center gap-3'>
					<button
						aria-label='Toggle dark mode'
						onClick={toggle}
						className='h-10 w-10 grid place-items-center rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900'
					>
						<Sun className='h-4 w-4 hidden dark:block' />
						<Moon className='h-4 w-4 dark:hidden' />
					</button>
					<a href='#contact' className='hidden md:inline-block'>
						<Button variant='outline' className='rounded-2xl'>
							Talk to us
						</Button>
					</a>
					<a href='#pricing'>
						<Button className='rounded-2xl'>Get started</Button>
					</a>
				</div>
			</div>
		</header>
	);
}
