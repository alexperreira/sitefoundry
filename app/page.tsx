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

const services = [
	{
		icon: <Laptop className='w-5 h-5' />,
		title: 'Custom Development',
		desc: 'Modern web apps and blazing-fast sites built with secure, scalable architectures.',
		bullets: ['React/Next.js/Sveltekit', 'TypeScript APIs', 'Auth & RBAC'],
	},
	{
		icon: <Search className='w-5 h-5' />,
		title: 'Technical SEO',
		desc: 'From crawl health and Core Web Vitals to schema and content strategy.',
		bullets: ['CWV & performance', 'Schema & sitemaps', 'Content playbooks'],
	},
	{
		icon: <Paintbrush className='w-5 h-5' />,
		title: 'Brand & UI Design',
		desc: 'Clean, conversion-focused interfaces with accessible design systems.',
		bullets: ['Design tokens', 'Component libraries', 'UX research'],
	},
	{
		icon: <Bot className='w-5 h-5' />,
		title: 'AI Automation',
		desc: 'Agents that generate, evaluate, and distribute—under your guardrails.',
		bullets: ['Content agents', 'Ops & CRM bots', 'Analytics & alerts'],
	},
] as const;

const Services: React.FC = () => (
	<Section
		id='services'
		eyebrow='What we do'
		title={
			<>
				Development, SEO, Design-
				<span className='text-indigo-600'>power-boosted by AI</span>
			</>
		}
		subtitle='We combine engineering rigor with creative strategy to build durable growth systems.'
	>
		<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
			{services.map((s) => (
				<Card key={s.title} className='rounded-3xl shadow-sm h-full'>
					<CardHeader>
						<div className='flex items-center gap-3'>
							<div className='p-2 rounded-xl bg-indigo-50 text-indigo-600'>
								{s.icon}
							</div>
							<CardTitle className='text-lg'>{s.title}</CardTitle>
						</div>
					</CardHeader>
					<CardContent className='text-zinc-600 text-sm space-y-4'>
						<p>{s.desc}</p>
						<ul className='space-y-2'>
							{s.bullets.map((b) => (
								<li key={b} className='flex items-center gap-2'>
									<CheckCircle2 className='w-4 h-4 text-emerald-500' />
									{b}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			))}
		</div>
	</Section>
);

const process = [
	{
		icon: <Rocket className='w-5 h-5' />,
		title: 'Discover',
		body: 'We map goals, audiences, and technical constraints-then set KPIs.',
	},
	{
		icon: <Paintbrush className='w-5 h-5' />,
		title: 'Design',
		body: 'Wireframes → components → design tokens for speed and consistency.',
	},
	{
		icon: <Laptop className='w-5 h-5' />,
		title: 'Build',
		body: 'Type-safe APIs, secure auth, and fast frontends tuned for CWV.',
	},
	{
		icon: <Bot className='w-5 h-5' />,
		title: 'Automate',
		body: 'Agents schedule content, update data, and generate reports.',
	},
	{
		icon: <LineChart className='w-5 h-5' />,
		title: 'Grow',
		body: 'Measure, iterate, and scale channels that move your KPIs.',
	},
] as const;

const Process: React.FC = () => (
	<Section
		id='process'
		eyebrow='How it works'
		title='A focused, measurable delivery loop'
		subtitle='Every engagement ships a working system fast, then compounds gains with automation and iteration.'
	>
		<div className='grid md:grid-cols-5 gap-4'>
			{process.map((step) => (
				<Card key={step.title} className='rounded-3xl h-full'>
					<CardHeader>
						<div className='flex items-center gap-3'>
							<div className='p-2 rounded-xl bg-emerald-50 text-emerald-600'>
								{step.icon}
							</div>
							<CardTitle className='text-base'>{step.title}</CardTitle>
						</div>
					</CardHeader>
					<CardContent className='text-sm text-zinc-600'>
						{step.body}
					</CardContent>
				</Card>
			))}
		</div>
	</Section>
);

const features = [
	{
		title: 'Content engine',
		body: 'Research → draft → fact-check → publish with approvals and style checks.',
		bullets: [
			'Briefs from keyword clusters',
			'Schema & internal linking',
			'Auto-A/B titles & CTAs',
		],
	},
	{
		title: 'Ops & CRM bots',
		body: 'Connect forms, CRMs, help desks, and analytics to cut manual work.',
		bullets: [
			'Lead enrichment & routing',
			'Lifecycle emails & summaries',
			'Weekly KPI snapshots',
		],
	},
	{
		title: 'Performance & security',
		body: 'Core Web Vitals, access controls, and observability baked-in from day one.',
		bullets: [
			'CSP/Headers & rate limits',
			'Edge caching & image optimizations',
			'Error tracking & SLOs',
		],
	},
] as const;

const Features: React.FC = () => (
	<Section
		id='features'
		eyebrow='AI, responsibly'
		title='Agents with guardrails, not gimmicks'
		subtitle='Our automations are observable, reversible, and aligned to your KPIs—so you stay in control.'
	>
		<div className='grid lg:grid-cols-3 gap-6'>
			{features.map((feat) => (
				<Card key={feat.title} className='rounded-3xl'>
					<CardHeader>
						<CardTitle>{feat.title}</CardTitle>
					</CardHeader>
					<CardContent className='text-sm text-zinc-600 space-y-3'>
						<p>{feat.body}</p>
						<ul className='space-y-2'>
							{feat.bullets.map((b) => (
								<li key={b} className='flex items-center gap-2'>
									<CheckCircle2 className='w-4 h-4 text-emerald-500' />
									{b}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			))}
		</div>
	</Section>
);

const Work: React.FC = () => (
	<Section
		id='work'
		eyebrow='Selected work'
		title='Outcomes over outputs'
		subtitle='Here are representative project types and results. Swap in your case studies when ready.'
	>
		<div className='grid md:grid-cols-3 gap-6'>
			{[1, 2, 3].map((i) => (
				<Card key={i} className='rounded-3xl overflow-hidden group'>
					<div className='h-40 bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200' />
					<CardHeader className='pb-2'>
						<CardTitle>Project headline {i}</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Brief outcome statement describing traffic, conversion, or time
							saved.
						</p>
						<ul className='space-y-1 list-disc pl-5'>
							<li>+120% organic traffic in 4 months</li>
							<li>24s → 2s LCP, +14% CR</li>
							<li>Hours/week saved via agents</li>
						</ul>
					</CardContent>
				</Card>
			))}
		</div>
	</Section>
);

const plans = [
	{
		name: 'Launch',
		price: '$2,500',
		cadence: '/project',
		highlight: false,
		blurb: 'Best for new sites or single-page launches.',
		features: [
			'1-page site or landing page',
			'Brand kit & basic components',
			'Technical SEO setup',
			'Analytics + consent setup',
		],
	},
	{
		name: 'Growth',
		price: '$3,500',
		cadence: '/month',
		highlight: true,
		blurb: 'Most popular: continuous improvements + content.',
		features: [
			'Ongoing SEO & A/B tests',
			'Monthly content agent (4 posts)',
			'Performance & security care',
			'Quarterly roadmap & reporting',
		],
	},
	{
		name: 'Scale',
		price: 'Custom',
		cadence: '',
		highlight: false,
		blurb: 'For complex apps, multi-brand, or enterprise.',
		features: [
			'Custom web app / integrations',
			'Ops & CRM automations',
			'SLAs & dedicated support',
			'Compliance & SSO options',
		],
	},
] as const;

const Pricing: React.FC = () => (
	<Section
		id='pricing'
		eyebrow='Simple plans'
		title='Start small, grow fast'
		subtitle='Clear pricing with room to scale as results compound.'
	>
		<div className='grid md:grid-cols-3 gap-6'>
			{plans.map((p) => (
				<Card
					key={p.name}
					className={`rounded-3xl h-full ${
						p.highlight ? 'border-indigo-500 shadow-lg' : ''
					}`}
				>
					<CardHeader>
						<div className='flex items-baseline justify-between'>
							<CardTitle>{p.name}</CardTitle>
							<div className='text-3xl font-bold'>
								{p.price}
								<span className='text-base font-normal text-zinc-500'>
									{p.cadence}
								</span>
							</div>
						</div>
						<p className='text-sm text-zinc-600 mt-2'>{p.blurb}</p>
					</CardHeader>
					<CardContent className='space-y-3'>
						<ul className='space-y-2 text-sm'>
							{p.features.map((f) => (
								<li key={f} className='flex items-center gap-2'>
									<CheckCircle2 className='w-4 h-4 text-emerald-500' />
									{f}
								</li>
							))}
						</ul>
						<a href='#contact'>
							<Button className='w-full mt-4 rounded-2xl'>
								Choose {p.name}
							</Button>
						</a>
					</CardContent>
				</Card>
			))}
		</div>
	</Section>
);

const faqs = [
	{
		q: 'How do you use AI without risking our brand?',
		a: 'We use human‑in‑the‑loop checks, style guides, and approvals. Agents are sandboxed, observable, and revertible.',
	},
	{
		q: 'What stacks do you build with?',
		a: 'Next.js/React/Sveltekit frontends, TypeScript backends, Supabase/Prisma or Firebase, plus modern CI/CD and edge caching.',
	},
	{
		q: 'Do you migrate from WordPress?',
		a: 'Yes. We often preserve URLs and SEO equity while moving to faster, simpler stacks.',
	},
	{
		q: 'Can you work with our in‑house team?',
		a: 'Absolutely. We can own a stream or embed with your engineers, designers, and marketers.',
	},
] as const;

const FAQ: React.FC = () => (
	<Section id='faq' eyebrow='Questions' title='FAQ'>
		<div className='grid md:grid-cols-2 gap-6'>
			{faqs.map((f) => (
				<Card key={f.q} className='rounded-3xl'>
					<CardHeader>
						<CardTitle className='text-lg'>{f.q}</CardTitle>
					</CardHeader>
					<CardContent className='text-md text-zinc-600'>{f.a}</CardContent>
				</Card>
			))}
		</div>
	</Section>
);

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
