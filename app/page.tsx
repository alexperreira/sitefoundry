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
import { h2, li, p, section, span } from 'framer-motion/client';



const Contact: React.FC = () => (
	<Section
		id='contact'
		eyebrow="Let's talk"
		title='Tell us about your goals'
		subtitle="Give us a few details. We'll propose a plan and timeline tailored to your targets."
	>
		<div className='grid md:grid-cols-2 gap-8'>
			<Card className='rounded-3xl'>
				<CardHeader>
					<CardTitle>Project inquiry</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						action='mailto:hello@sitefoundry.ai'
						className='space-y-4'
						method='post'
					>
						<div className='grid md:grid-cols-2 gap-3'>
							<Input
								placeholder='Name'
								name='name'
								required
								className='rounded-2xl'
							/>
							<Input
								type='email'
								placeholder='Email'
								name='email'
								required
								className='rounded-2xl'
							/>
						</div>
						<Input
							placeholder='Company / URL'
							name='company'
							required
							className='rounded-2xl'
						/>
						<Textarea
							placeholder='What are you hoping to build or improve?'
							name='message'
							rows={5}
							className='rounded-2xl'
						/>
						<Button type='submit' className='rounded-2xl w-full'>
							Send
						</Button>
						<p className='text-xs text-zinc-500 text-center'>
							For production, switch to an API route or Server Action.
						</p>
					</form>
				</CardContent>
			</Card>
			<div className='space-y-6'>
				<Card className='rounded-3xl'>
					<CardHeader>
						<CardTitle>What you can expect</CardTitle>
					</CardHeader>
					<CardContent className='text-sm text-zinc-600 space-y-2'>
						<p>
							We&apos;ll reply within one business day with clarifying questions
							or a short proposal.
						</p>
						<ul className='space-y-2'>
							{[
								'Clear milestones & KPIs',
								'Transparent pricing',
								'Security-minded delivery',
							].map((x) => (
								<li key={x} className='flex items-center gap-2'>
									<CheckCircle2 className='w-4 h-4 text-emerald-500' />
									{x}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
				<Card className='rounded-3xl'>
					<CardHeader>
						<CardTitle>Prefer email?</CardTitle>
					</CardHeader>
					<CardContent>
						<a
							href='mailto:hello@sitefoundry.ai'
							className='underline text-indigo-600'
						>
							hello@sitefoundry.ai
						</a>
					</CardContent>
				</Card>
			</div>
		</div>
	</Section>
);

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Features from '@/components/sections/Features';
import Work from '@/components/sections/Work';
import Pricing from '@/components/sections/Pricing';

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
			<Services />
			<Process />
			<Features />
			<Work />
			<Pricing />
			<FAQ />
			<Contact />
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
