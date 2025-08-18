import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const badgeStyles = cva(
	'inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1',
	{
		variants: {
			variant: {
				subtle:
					'border border-zinc-200 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm shadow-sm',
				solid: 'bg-indigo-600 text-white',
				outline: 'border border-zinc-300',
			},
		},
		defaultVariants: { variant: 'subtle' },
	}
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
	VariantProps<typeof badgeStyles>;

export default function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<span className={clsx(badgeStyles({ variant }), className)} {...props} />
	);
}
