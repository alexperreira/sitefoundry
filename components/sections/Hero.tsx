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
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function Hero() {
	return (
		<section id='home' className='relative overflow-hidden'>
			<div className='absolute inset-0 -z-10'>
				<div className='absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl' />
				<div className='absolute -bottom-40 left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-400/10 blur-3xl' />
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
						SiteFoundry.ai blends custom development, thoughtful design, SEO,
						and automation to forge growth engines. We deliver fast websites,
						clean UX, and AI agents that work while you sleep.
					</p>
					<div className='mt-6 flex flex-col sm:flex-row gap-3'>
						<a href='#pricing'>
							<Button size='lg' className='rounded-2xl gap-2'>
								Launch my project <ArrowRight className='w-4 h-4' />
							</Button>
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
									<Search className='w-4 h-4' />
									SEO Insights
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								Auto-audit pages, surface long-tail opportunities, and ship
								fixes from one dashboard.
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
								Content, outreach, and reporting-scheduled or event-driven, with
								human oversight.
							</CardContent>
						</Card>
						<Card className='rounded-3xl shadow-md'>
							<CardHeader>
								<CardTitle className='text-base flex items-center gap-2'>
									<Laptop className='w-4 h-4' />
									Dev & DX
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								Modern tech stacks, type-safe APIs, and hardened deployments.
							</CardContent>
						</Card>
						<Card className='rounded-3xl shadow-md'>
							<CardHeader>
								<CardTitle className='text-base flex items-center gap-2'>
									<Paintbrush className='w-4 h-4' />
									Design Systems
								</CardTitle>
							</CardHeader>
							<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
								Component libraries, tokens, and brand kits for consistency and
								speed.
							</CardContent>
						</Card>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
