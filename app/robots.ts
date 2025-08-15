export default function robots() {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: 'https://sitefoundry.ai/sitemap.xml',
	};
}
