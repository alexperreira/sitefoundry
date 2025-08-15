import React from 'react';
import Section from '@/components/sections/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

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

export default function FAQ() {
	return (
		<Section id='faq' eyebrow='Questions' title='FAQ'>
			<div className='grid md:grid-cols-2 gap-6'>
				{faqs.map((f) => (
					<Card key={f.q} className='rounded-3xl'>
						<CardHeader>
							<CardTitle className='text-lg'>{f.q}</CardTitle>
						</CardHeader>
						<CardContent className='text-md text-zinc-600 dark:text-zinc-300'>
							{f.a}
						</CardContent>
					</Card>
				))}
			</div>
		</Section>
	);
}
