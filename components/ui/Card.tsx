import * as React from 'react';
import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('border', {
	variants: {
		variant: {
			default: 'border-zinc-200',
			ghost: 'border-transparent',
		},
		shadow: {
			none: '',
			sm: 'shadow-sm',
			md: 'shadow-md',
		},
		radius: {
			md: 'rounded-xl',
			xl: 'rounded-2xl',
			'3xl': 'rounded-3xl',
		},
	},
	defaultVariants: { variant: 'default', shadow: 'none', radius: 'md' },
});

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof cardVariants>;

export const Card: React.FC<CardProps> = ({
	className,
	variant,
	shadow,
	radius,
	...props
}) => (
	<div
		className={clsx(cardVariants({ variant, shadow, radius }), className)}
		{...props}
	/>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => <div className={clsx('p-5', className)} {...props} />;

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
	className,
	...props
}) => <div className={clsx('text-xl font-semibold', className)} {...props} />;

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => <div className={clsx('p-5 pt-0', className)} {...props} />;
