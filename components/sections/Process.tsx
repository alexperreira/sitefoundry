import React from 'react';
import Section from '@/components/sections/Section';
import { Bot, Laptop, LineChart, Paintbrush, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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

export default function Process() {
	return (
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
						<CardContent className='text-sm text-zinc-600 dark:text-zinc-300'>
							{step.body}
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
