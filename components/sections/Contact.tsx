import React from 'react';
import Section from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
	return (
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
							<p className='text-xs text-zinc-500 dark:text-zinc-400 text-center'>
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
						<CardContent className='text-sm text-zinc-600 dark:text-zinc-300 space-y-2'>
							<p>
								We&apos;ll reply within one business day with clarifying
								questions or a short proposal.
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
}
