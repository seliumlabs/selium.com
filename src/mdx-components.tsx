import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		// h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
		// h2: (props) => <h2 className="text-2xl font-bold" {...props} />,
		// h3: (props) => <h3 className="text-xl font-bold" {...props} />,
	}
}
