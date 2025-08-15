import React from 'react';
import Section from '@/components/sections/Section';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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

export default function Features() {
	return (
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
						<CardContent className='text-sm text-zinc-600 dark:text-zinc-300 space-y-3'>
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
}
