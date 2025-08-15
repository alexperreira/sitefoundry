import React from 'react';
import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function Work() {
	return (
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
						<CardContent className='text-sm text-zicn-600 dark:text-zinc-300 space-y-2'>
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
}
