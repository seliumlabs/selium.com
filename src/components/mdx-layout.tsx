import { ReactNode } from 'react';
import { Container } from './container';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export const MdxLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-12 items-center py-6">
      <SiteHeader />
      <Container>{children}</Container>
      <SiteFooter />
    </div>
  );
};
