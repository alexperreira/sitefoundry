export default function Section({
	id,
	eyebrow,
	title,
	subtitle,
	children,
}: {
	id?: string;
	eyebrow?: string;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	children?: React.ReactNode;
}) {
	return (
		<section id={id} className='relative py-20 md:py-28'>
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none' />
			<div className='container mx-auto px-6 max-w-7xl'>
				<div className='mb-10 md:mb-14 text-center'>
					{eyebrow && (
						<span className='inline-block text-xs tracking-widest uppercase text-indigo-600/90 font-semibold'>
							{eyebrow}
						</span>
					)}
					{title && (
						<h2 className='mt-3 text-3xl md:text-5xl font-bold tracking-tight'>
							{title}
						</h2>
					)}
					{subtitle && (
						<p className='mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto'>
							{subtitle}
						</p>
					)}
				</div>
				{children}
			</div>
		</section>
	);
}
