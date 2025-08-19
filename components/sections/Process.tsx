import React from 'react';
import Section from '@/components/sections/Section';
import {
	Bot,
	Compass,
	Hammer,
	Laptop,
	LineChart,
	Paintbrush,
	Rocket,
	Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// const process = [
// 	{
// 		icon: <Rocket className='w-5 h-5' />,
// 		title: 'Discover',
// 		body: 'We map goals, audiences, and technical constraints-then set KPIs.',
// 	},
// 	{
// 		icon: <Paintbrush className='w-5 h-5' />,
// 		title: 'Design',
// 		body: 'Wireframes → components → design tokens for speed and consistency.',
// 	},
// 	{
// 		icon: <Laptop className='w-5 h-5' />,
// 		title: 'Build',
// 		body: 'Type-safe APIs, secure auth, and fast frontends tuned for CWV.',
// 	},
// 	{
// 		icon: <Bot className='w-5 h-5' />,
// 		title: 'Automate',
// 		body: 'Agents schedule content, update data, and generate reports.',
// 	},
// 	{
// 		icon: <LineChart className='w-5 h-5' />,
// 		title: 'Grow',
// 		body: 'Measure, iterate, and scale channels that move your KPIs.',
// 	},
// ] as const;

const process = [
	{
		icon: <Compass className='w-5 h-5' />,
		title: 'Discover',
		body: 'We learn about your goals, challenges, and where your business wants to grow.',
	},
	{
		icon: <Paintbrush className='w-5 h-5' />,
		title: 'Design',
		body: 'We create a simple, clear plan tailored to your business needs.',
	},
	{
		icon: <Hammer className='w-5 h-5' />,
		title: 'Build',
		body: 'We set up your website, tools, and systems so everything works smoothly.',
	},
	{
		icon: <Zap className='w-5 h-5' />,
		title: 'Automate',
		body: 'We save you time by automating routine online tasks and marketing.',
	},
	{
		icon: <Rocket className='w-5 h-5' />,
		title: 'Grow',
		body: 'You enjoy more customers, more time, and less stress managing tech.',
	},
] as const;

export default function Process() {
	return (
		<Section
			id='process'
			eyebrow='How it works'
			title={
				<>
					Clear steps.
					<span className='text-indigo-600'> Real results.</span>
				</>
			}
			subtitle='Your step-by-step plan for success.'
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
						<CardContent className='text-md text-zinc-600 dark:text-zinc-300'>
							{step.body}
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
