import { div } from 'framer-motion/client';
import React from 'react';

type SectionProps = {
	id?: string;
	eyebrow?: string;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	children?: React.ReactNode;
	orbs?: boolean;
	flip?: boolean;
};

export default function Section({
	id,
	eyebrow,
	title,
	subtitle,
	children,
	orbs = true,
	flip = false,
}: SectionProps) {
	return (
		<section id={id} className='relative py-20 md:py-28 overflow-hidden'>
			{orbs && (
				<div className='absolute inset-0 -z-10 pointer-events-none'>
					{flip ? (
						<>
							<div className='absolute -top-60 left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-400/15 blur-3xl' />
							<div className='absolute -bottom-60 -right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-3xl' />
						</>
					) : (
						<>
							<div className='absolute -top-60 right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-3xl' />
							<div className='absolute -bottom-60 left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-400/15 blur-3xl' />
						</>
					)}
				</div>
			)}

			<div className='container mx-auto px-6 max-w-7xl'>
				<div className='mb-10 md:mb-14 text-center'>
					{eyebrow && (
						<span className='inline-block text-xs tracking-widest uppercase text-indigo-600/90 font-semibold'>
							{eyebrow}
						</span>
					)}
					{title && (
						<h2 className='mt-3 text-3xl md:text-5xl font-bold tracking-tight'>
							{title}
						</h2>
					)}
					{subtitle && (
						<p className='mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto'>
							{subtitle}
						</p>
					)}
				</div>
				{children}
			</div>
		</section>
	);
}
