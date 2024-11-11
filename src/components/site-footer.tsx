import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const date = new Date();
const year = date.getFullYear();

export const SiteFooter = () => {
  return (
    <footer className="mt-16 py-4 text-neutral-600 text-center">
      <p className="text-xs">&copy; {year} Selium Labs</p>
      <GoogleAnalytics gaId="G-0K0K8BGVDP" />
      <SpeedInsights />
    </footer>
  );
};
