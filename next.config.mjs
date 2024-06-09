import nextMDX from '@next/mdx'

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		rehypePlugins: [],
		remarkPlugins: [],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/docs/get-started',
				destination: '/docs/get-started/first-steps',
				permanent: true,
			},
		]
	},
}

export default withMDX(nextConfig)
