import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonStyles = cva(
	'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring disabled:opacity-50 disabled:pointer-events-none px-4 py-2',
	{
		variants: {
			variant: {
				solid: 'bg-indigo-600 text-white hover:bg-indigo-700',
				outline: 'border border-zinc-300 hover:bg-zinc-50',
				ghost: 'hover:bg-zinc-100',
			},
			size: {
				sm: 'h-8 px-3',
				md: 'h-10 px-4',
				lg: 'h-11 px-5 text-base',
			},
		},
		defaultVariants: { variant: 'solid', size: 'md' },
	}
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonStyles>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => (
		<button
			ref={ref}
			className={clsx(buttonStyles({ variant, size }), className)}
			{...props}
		/>
	)
);
Button.displayName = 'Button';
