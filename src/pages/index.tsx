import { AnimatedLogo } from '@/components/animated-logo';
import { Container } from '@/components/container';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-between">
			<SiteHeader />
			<Container>
				<div className="flex flex-col gap-3">
					<AnimatedLogo />
					<p>Welcome to a new way of computing.</p>
				</div>
			</Container>
			<SiteFooter />
		</main>
	);
}
