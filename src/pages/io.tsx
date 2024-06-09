import { Container } from '@/components/container'
import {
	BatteriesIncluded,
	HassleFree,
	Integration,
	Reliability,
	Resiliance,
	Scalability,
	TickIcon,
} from '@/components/io'
// import { SvgOne } from '@/components/io'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Home() {
	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-between">
			<SiteHeader />

			<Container>
				<div className="py-48">
					<h1 className="text-5xl font-bold">
						Composable messaging for devs
					</h1>
					<p>
						Selium is an extremely developer friendly composable
						messaging platform with zero build time configuration.
					</p>
				</div>
			</Container>

			<section
				id="features"
				className="bg-[#1f062c] flex w-full justify-center py-12"
			>
				<div className="max-w-5xl">
					<h2 className="text-white text-2xl">Features</h2>
					<div className="flex flex-col gap-20">
						<Integration />
						<HassleFree />
						<BatteriesIncluded />
						<Resiliance />
						<Reliability />
						<Scalability />
					</div>
				</div>
			</section>
			<SiteFooter />
		</main>
	)
}
