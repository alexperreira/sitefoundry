import * as React from 'react';
import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const textareaStyles = cva(
	'w-full rounded-lg border bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500',
	{
		variants: {
			rowsize: {
				sm: 'p-2',
				md: 'p-3',
				lg: 'p-4 text-base',
			},
			tone: {
				default: 'border-zinc-300',
				subtle: 'border-zinc-200',
			},
		},
		defaultVariants: { rowsize: 'md', tone: 'default' },
	}
);

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
	VariantProps<typeof textareaStyles>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, rowsize, tone, ...props }, ref) => (
		<textarea
			ref={ref}
			className={clsx(textareaStyles({ rowsize, tone }), className)}
			{...props}
		/>
	)
);
Textarea.displayName = 'Textarea';
