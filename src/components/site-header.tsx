import Image from 'next/image';
import Link from 'next/link';

export const SiteHeader = () => {
  return (
    <div className="w-full max-w-5xl items-center justify-between lg:flex py-6 sticky top-0 bg-white dark:bg-zinc-950 z-10">
      <Link
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          src="/selium.svg"
          alt="Selium Logo"
          className="dark:invert"
          width={150}
          height={38}
          priority
        />
      </Link>

      <SiteHeaderNav />
    </div>
  );
};

interface NavItem {
  label: string;
  href: string;
  dimage?: string;
  limage?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news/' },
  {
    label: 'GitHub',
    href: 'https://github.com/seliumlabs/selium',
    dimage: 'github-dark.svg',
    limage: 'github-light.svg',
  },
];

const SiteHeaderNav = () => {
  return (
    <nav className="hidden lg:flex gap-6">
      {navItems.map(({ label, href, dimage, limage }) => (
        <Link href={href} className="text-lg font-semibold" key={href}>
          {dimage ? (
            <span>
              <Image
                src={`/images/${dimage}`}
                alt={label}
                className="hidden dark:block"
                width="30"
                height="30"
              />
              <Image
                src={`/images/${limage}`}
                alt={label}
                className="block dark:hidden"
                width="30"
                height="30"
              />
            </span>
          ) : (
            label
          )}
        </Link>
      ))}
    </nav>
  );
};
