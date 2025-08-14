'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
	Rocket,
	Bot,
	Paintbrush,
	Search,
	Laptop,
	Zap,
	Shield,
	LineChart,
	ArrowRight,
	CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Badge from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { h2, p, section, span } from 'framer-motion/client';

const Section: React.FC<{
	id?: string;
	eyebrow?: string;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	children?: React.ReactNode;
}> = ({ id, eyebrow, title, subtitle, children }) => (
	<section id={id} className='relative py-20 md:py-28'>
		<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none' />
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
					<p className='mt-4 text-zinc-600 max-w-2xl mx-auto'>{subtitle}</p>
				)}
			</div>
			{children}
		</div>
	</section>
);

const Hero: React.FC = () => (
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
					Build. Rank. Automate. <span className='text-indigo-600'>Grow.</span>
				</h1>
				<p className='mt-5 text-lg text-zinc-600 max-w-prose'>
					SiteFoundry.ai blends custom development, thoughtful design, SEO, and
					automation to forge growth engines. We deliver fast websites, clean
					UX, and AI agents that work while you sleep.
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
				<div className='mt-6 flex items-center gap-4 text-sm text-zinc-500'>
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
						<CardContent className='text-sm text-zinc-600'>
							Auto-audit pages, surface long-tail opportunities, and ship fixes
							from one dashboard.
						</CardContent>
					</Card>
					<Card className='rounded-3xl shadow-md'>
						<CardHeader>
							<CardTitle className='text-base flex items-center gap-2'>
								<Bot className='w-4 h-4' />
								AI Agents
							</CardTitle>
						</CardHeader>
						<CardContent className='text-sm text-zinc-600'>
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
						<CardContent className='text-sm text-zinc-600'>
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
						<CardContent className='text-sm text-zinc-600'>
							Component libraries, tokens, and brand kits for consistency and
							speed.
						</CardContent>
					</Card>
				</div>
			</motion.div>
		</div>
	</section>
);

export default function Page() {
	return (
		<div className='min-h-screen bg-white text-zinc-900'>
			<Navbar />
			<Hero />
			<div className='py-10 md:py-14 border-y border-zinc-100 bg-white/60 backdrop-blur'>
				<div className='container mx-auto px-6 max-w-7xl'>
					<p className='text-center text-xs uppercase tracking-widest text-zinc-500'>
						Trusted by growth-minded teams
					</p>
					<div className='mt-6 grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center opacity-70'>
						{'ABCDE'.split('').map((_, i) => (
							<div key={i} className='h-8 w-28 rounded-md bg-zinc-200' />
						))}
					</div>
				</div>
			</div>
			<footer className='border-t border-zinc-200 py-10'>
				<div className='container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600'>
					<div className='flex items-center gap-3'>
						<div className='w=6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400' />
						<span>© {new Date().getFullYear()} SiteFoundry.ai</span>
					</div>
					<div className='flex flex-items-center gap-5'>
						<a href='#services' className='hover:text-zinc-900'>
							Services
						</a>
						<a href='#work' className='hover:text-zinc-900'>
							Work
						</a>
						<a href='#pricing' className='hover:text-zinc-900'>
							Pricing
						</a>
						<a href='#contact' className='hover:text-zinc-900'>
							Contact
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
