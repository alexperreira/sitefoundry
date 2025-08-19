import React from 'react';
import Section from '@/components/sections/Section';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const features = [
	{
		title: 'Marketing made easy',
		body: 'From social media posts to blogs and email campaigns — created, scheduled, and published for you.',
		bullets: [
			'Social posts auto-scheduled',
			'Blogs & newsletters drafted',
			'Email campaigns automated',
		],
	},
	{
		title: 'SEO that works',
		body: 'Get found by more local customers with smart, ongoing improvements.',
		bullets: [
			'Keyword-driven content',
			'Optimized titles & CTAs',
			'Clear site structure & links',
		],
	},
	{
		title: 'Time-saving automations',
		body: 'Free up your team by connecting the tools use already use.',
		bullets: [
			'Customer inquiries routed automatically',
			'CRM, forms & analytics connected',
			'Weekly performance snapshots',
		],
	},
	{
		title: 'Performance & security built-in',
		body: 'Your site runs fast, stays secure, and is always reliable.',
		bullets: [
			'Mobile speed optimization',
			'Secure access & backups',
			'Error monitoring & reporting',
		],
	},
] as const;

export default function Features() {
	return (
		<Section
			flip
			id='features'
			eyebrow='AI with peace of mind'
			title={
				<>
					Smarter online growth
					<span className='text-indigo-600'> made simple</span>
				</>
			}
			subtitle='Automation that saves you hours without losing control. Everything is transparent, safe, and built around your goals.'
		>
			<div className='grid lg:grid-cols-4 gap-6'>
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
