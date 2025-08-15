export default async function sitemap() {
	const base = 'https://sitefoundry.ai';
	return [
		{
			url: `${base}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
	];
}
