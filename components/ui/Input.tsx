import * as React from 'react';
import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const inputStyles = cva(
	'w-full rounded-lg border bg-white text-sm outline-none focus:ring-2 focus:ring-iindigo-500/30 focus:border-indigo-500',
	{
		variants: {
			size: {
				sm: 'h-9 px-3',
				md: 'h-11 px-3',
				lg: 'h-12 px-4 text-base',
			},
			tone: {
				default: 'border-zinc-300',
				subtle: 'border-zinc-200',
			},
		},
		defaultVariants: { size: 'md', tone: 'default' },
	}
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof inputStyles>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, size, tone, ...props }, ref) => (
		<input
			ref={ref}
			className={clsx(inputStyles({ size, tone }), className)}
			{...props}
		/>
	)
);
Input.displayName = 'Input';
