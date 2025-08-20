'use client';

import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

// Gtag interface
interface GtagParameters {
	experiment?: string;
	variant?: string;
	[key: string]: string | number | boolean | undefined;
}

interface PlausibleOptions {
	props?: Record<string, string>;
}

declare global {
	interface Window {
		gtag?: (
			command: 'event' | 'config' | 'set',
			...args: (string | GtagParameters)[]
		) => void;
		plausible?: (event: string, options?: PlausibleOptions) => void;
	}
}

export function TrackableCTA({ variant }: { variant: 'a' | 'b' }) {
	const onClick = () => {
		window.gtag?.('event', 'book_call_click', {
			experiment: 'hero_headline',
			variant,
		});

		window.plausible?.('Book Call Click', {
			props: { experiment: 'hero_headline', variant },
		});
	};

	return (
		<Button size='lg' className='rounded-2xl gap-2' onClick={onClick}>
			Book a Free Strategy Call <ArrowRight className='w-4 h-4' />
		</Button>
	);
}
