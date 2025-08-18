import React from 'react';
import Section from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

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

export default function Pricing() {
	return (
		<Section
			flip
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
									Choose {p.name}
								</Button>
							</a>
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
