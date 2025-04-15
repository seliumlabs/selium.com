import { SpeedInsights } from '@vercel/speed-insights/next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './container';

const date = new Date();
const year = date.getFullYear();

export const SiteFooter = () => {
  return (
    <footer className="mt-16 py-4 w-full">
      <div className="flex justify-end max-w-5xl mx-auto">
        <div className="flex text-left text-xs bg-indigo-500 rounded-md p-2">
          <Link href="https://nicerhino.com">
            <Image
              src="/images/nicerhino.png"
              alt="Nice Rhino logo"
              className="h-8 w-auto"
              width={47}
              height={32}
            />
          </Link>
          <Link
            href="https://nicerhino.com"
            className="pl-2 text-slate-200 hover:no-underline"
          >
            A&nbsp;Nice&nbsp;Rhino
            <br />
            company.
          </Link>
        </div>
      </div>
      <p className="text-xs text-neutral-600 text-center">
        &copy; {year} Selium Labs
      </p>
      <SpeedInsights />
    </footer>
  );
};
