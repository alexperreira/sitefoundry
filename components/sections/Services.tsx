import React from 'react';
import Section from '@/components/sections/Section';
import {
	BadgeDollarSign,
	CheckCircle2,
	Laptop,
	Paintbrush,
	Search,
	Bot,
	Braces,
	Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

// const services = [
// 	{
// 		icon: <Braces className='w-5 h-5' />,
// 		title: 'Custom Development',
// 		desc: 'Modern web apps and blazing-fast sites built with secure, scalable architectures.',
// 		bullets: ['React/Next.js/Sveltekit', 'TypeScript APIs', 'Auth & RBAC'],
// 	},
// 	{
// 		icon: <Search className='w-5 h-5' />,
// 		title: 'Technical SEO',
// 		desc: 'From crawl health and Core Web Vitals to schema and content strategy.',
// 		bullets: ['CWV & performance', 'Schema & sitemaps', 'Content playbooks'],
// 	},
// 	{
// 		icon: <Paintbrush className='w-5 h-5' />,
// 		title: 'Brand & UI Design',
// 		desc: 'Clean, conversion-focused interfaces with accessible design systems.',
// 		bullets: ['Design tokens', 'Component libraries', 'UX research'],
// 	},
// 	{
// 		icon: <Bot className='w-5 h-5' />,
// 		title: 'AI Automation',
// 		desc: 'Agents that generate, evaluate, and distribute—under your guardrails.',
// 		bullets: ['Content agents', 'Ops & CRM bots', 'Analytics & alerts'],
// 	},
// ] as const;

const services = [
	{
		icon: <Braces className='w-5 h-5' />,
		title: 'SEO',
		desc: 'Modern web apps and blazing-fast sites built to grow your business.',
		bullets: [
			'Get found on Google search',
			'Attract more local customers',
			'Boost your online visibility',
		],
	},
	{
		icon: <Search className='w-5 h-5' />,
		title: 'Web Optimization',
		desc: 'Fast, simple sites that turn visitors into customers.',
		bullets: [
			'Faster load times',
			'Mobile-friendly designs',
			'Convert visitors into customers',
		],
	},
	{
		icon: <Paintbrush className='w-5 h-5' />,
		title: 'AI Automation',
		desc: 'Agents that generate, evaluate, and distribute—under your control.',
		bullets: [
			'Automate repetitive tasks',
			'Save hours each week',
			'Focus on what you do best',
		],
	},
	{
		icon: <Users className='w-5 h-5' />,
		title: 'Content & Marketing',
		desc: 'AI created content that converts, approved by you.',
		bullets: [
			'Post or schedule social media',
			'Write blogs and newsletters',
			'Automate email campaigns',
		],
	},
] as const;

export default function Services() {
	return (
		<Section
			flip
			id='services'
			eyebrow='What we do'
			title={
				<>
					Business optimization
					<span className='text-indigo-600'> power-boosted by AI</span>
				</>
			}
			subtitle='We combine a modern approach with creative strategy to build lasting growth for your business.'
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
						<CardContent className='text-zinc-600 dark:text-zinc-300 text-md space-y-4'>
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
}
