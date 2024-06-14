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
}

const navItems: NavItem[] = [
  // { label: 'I/O', href: '/io' },
  // { label: 'Cloud', href: '/cloud' },
  // { label: 'Docs', href: '/docs' },
  // { label: 'Blog', href: '/blog' },
  // { label: 'About', href: '/about' },
];

const SiteHeaderNav = () => {
  return (
    <nav className="hidden lg:flex gap-6">
      {navItems.map(({ label, href }) => (
        <Link href={href} className="text-lg font-semibold" key={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
};
