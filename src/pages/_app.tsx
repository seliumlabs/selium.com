import type { Metadata } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
// 	title: 'Selium - The Developer Cloud',
// 	description: 'The Developer Cloud',
// }

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${inter.className} bg-white dark:bg-slate-800`}>
			<Component {...pageProps} />
		</div>
	)
}
