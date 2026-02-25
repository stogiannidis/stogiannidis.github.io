import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const blog = await getCollection('blog', ({ data }) => data.draft !== true);

	return rss({
		title: 'Ilias Stogiannidis — Blog',
		description: 'Thoughts on research, AI, and life from a PhD student at The University of Edinburgh.',
		site: context.site,
		items: blog
			.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.date,
				link: `/blog/${post.slug}/`,
				description: post.body
					? post.body.replace(/[#*>\_\`\[\]\-]/g, '').replace(/\n/g, ' ').slice(0, 300) + '...'
					: '',
			})),
		customData: `<language>en-us</language>`,
	});
}
