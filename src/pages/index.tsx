import { Container } from '@/components/container'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Home() {
	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-between">
			<SiteHeader />
			<Container>
			<div className='flex flex-col gap-3'>
				<h1 className="text-5xl">The Developer Cloud</h1>
				<p>Selium is on a mission to empower developers with DevOps power without the DevOps complexity.</p>
			</div>
			</Container>
			<SiteFooter />
		</main>
	)
}
