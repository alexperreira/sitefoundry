'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
	ArrowRight,
	Bot,
	Laptop,
	Paintbrush,
	Search,
	Shield,
	Zap,
	BadgeDollarSign,
	IceCreamCone,
	TrendingUp,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrackableCTA } from '@/components/TrackableCTA';

export default function Hero({
	subtitle,
	variant,
}: {
	subtitle: string;
	variant: 'a' | 'b';
}) {
	return (
		<section id='home' className='relative overflow-hidden'>
			<div className='absolute inset-0 -z-10'>
				<div className='absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-3xl' />
				<div className='absolute -bottom-60 left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-400/15 blur-3xl' />
			</div>
			<div className='container mx-auto px-6 max-w-7xl py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center'>
				<div>
					<Badge>
						<Bot className='w-4 h-4' /> AI-assisted growth studio for modern
						businesses
					</Badge>
					<h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'>
						Build. Rank. Automate.{' '}
						<span className='text-indigo-600'>Grow.</span>
					</h1>
					<p className='mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-prose'>
						{subtitle}
					</p>
					<div className='mt-6 flex flex-col sm:flex-row gap-3'>
						<a href='#pricing'>
							{/* <Button size='lg' className='rounded-2xl gap-2'>
								Book a Free Strategy Call <ArrowRight className='w-4 h-4' />
							</Button> */}
							<TrackableCTA variant={variant} />
						</a>
						<a href='#work'>
							<Button size='lg' variant='outline' className='rounded-2xl'>
								See examples
							</Button>
						</a>
					</div>
					<div className='mt-6 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400'>
						<div className='flex items-center gap-2'>
							<Shield className='w-4 h-4' />
							Security-minded delivery
						</div>
						<div className='flex items-center gap-2'>
							<Zap className='w-4 h-4' />
							Performance first
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='relative'
				>
					<div className='grid grid-cols-2 gap-4'>
						<Card className='rounded-3xl shadow-md'>
							<CardHeader>
								<CardTitle className='text-base flex items-center gap-2'>
									<TrendingUp className='w-4 h-4' />
									Lead generation
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								Our SEO services help new customers find you fast.
							</CardContent>
						</Card>
						<Card className='rounded-3xl shadow-md'>
							<CardHeader>
								<CardTitle className='text-base flex items-center gap-2'>
									<Bot className='w-4 h-4' />
									AI Agents
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								We automate repeitive online tasks so you can focus on what you
								do best.
							</CardContent>
						</Card>
						<Card className='rounded-3xl shadow-md'>
							<CardHeader>
								<CardTitle className='text-base flex items-center gap-2'>
									<BadgeDollarSign className='w-4 h-4' />
									Lead conversion
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								We optimize your website to convert more visitors into paying
								customers.
							</CardContent>
						</Card>
						<Card className='rounded-3xl shadow-md'>
							<CardHeader>
								<CardTitle className='text-base flex items-center gap-2'>
									<IceCreamCone className='w-4 h-4' />
									Choose your flavor
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								Content, outreach, customer support, and more.
							</CardContent>
						</Card>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
