import { serialize } from 'next-mdx-remote/serialize';

export function stripMdxExtension(filename: string) {
	return filename.replace(/\.mdx?$/gi, '');
}

export function serializeMarkdown(
	source: string,
	scope?: Record<string, unknown>
) {
	return serialize(source, {
		scope,
		// mdxOptions: {},
	});
}

export function slugify(string: string) {
	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w-]+/g, '') // Remove all non-word characters
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}
