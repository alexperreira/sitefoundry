import React from 'react';
import Section from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

const plans = [
	{
		name: 'Starter',
		price: '$300',
		cadence: '/month',
		highlight: false,
		blurb: 'Best for small busineses getting their online presence right.',
		features: [
			'Website: 1-page site or landing page (built + maintained)',
			'SEO: Local SEO setup (Google Business profile, keywords, on-page optimization)',
			'AI Automation: Simple automation (auto-reply to contact form leads, weekly KPI email)',
			'Support: Monthly site checkup + updates)',
		],
		action: 'Get started with',
	},
	{
		name: 'Growth',
		price: '$600',
		cadence: '/month',
		highlight: true,
		blurb:
			'For growing businesses that need consistent traffic and time-saving tools.',
		features: [
			'Website: Multi-page (5-7) site or online store with monthly updates',
			'SEO: Ongoing improvements (keyword research, content creation, link building)',
			'AI Automation: Advanced automation (email campaigns, follow-ups, lead scoring, AI-powered content)',
			'Support: Monthly strategy call + performance reporting',
		],
		action: 'Choose',
	},
	{
		name: 'Pro',
		price: '$1,200',
		cadence: '/month',
		highlight: false,
		blurb: 'For businesses ready to automate and expand.',
		features: [
			'Website: Full-featured site or online store + priority updates',
			'SEO: Advanced (content clusters, backlinks, A/B testing for conversions)',
			'AI Automation: CRM integration, customer lifecycle automations (reminders, emails, summaries), advanced analytics',
			'Support: Dedicated support + quarterly growth roadmap',
		],
		action: 'Upgrade to',
	},
] as const;

export default function Pricing() {
	return (
		<Section
			flip
			id='pricing'
			eyebrow='Simple plans'
			title={
				<>
					Start small, <span className='text-indigo-600'> grow with us</span>
				</>
			}
			subtitle='Simple, affordable pricing for every stage of your business.'
		>
			<div className='grid md:grid-cols-3 gap-6'>
				{plans.map((p) => (
					<Card
						key={p.name}
						className={`shadow-lg rounded-3xl h-full ${
							p.highlight ? 'scale-105 ring-2 ring-indigo-600' : ''
						}`}
					>
						<CardHeader>
							<div className='flex items-baseline justify-between'>
								<CardTitle>{p.name}</CardTitle>
								<div className='text-3xl font-bold'>
									{p.price}
									<span className='text-base font-normal text-zinc-500 dark:text-zinc-400'>
										{p.cadence}
									</span>
								</div>
							</div>
							<p className='text-sm text-zinc-600 dark:text-zinc-300 mt-2'>
								{p.blurb}
							</p>
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
									{p.action} {p.name}
								</Button>
							</a>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
