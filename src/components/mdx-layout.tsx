import { ReactNode } from 'react'
import { Container } from './container'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'
import Link from 'next/link'

export type TocItem = {
  label: string
  href: string
  isActive?: boolean
  items?: TocItem[]
}

export const MdxLayout = ({
  children,
  toc,
}: {
  children: ReactNode
  toc?: TocItem[]
}) => {
  return (
    <div className="flex flex-col gap-12 items-center py-6">
      <SiteHeader />
      <Container>
        <div className="grid grid-cols-8">
          {toc && <DocsNav data={toc} />}
          <DocsContent>{children}</DocsContent>
        </div>
      </Container>
      <SiteFooter />
    </div>
  )
}

const DocsContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="col-span-5 prose prose-neutral dark:prose-invert lg:prose-lg">
      {children}
    </div>
  )
}

const DocsNav = ({ data }: { data: TocItem[] }) => {
  return (
    <div className="col-span-3">
      <ul>
        {data.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block py-2 hover:underline ${item.isActive ? 'font-bold underline' : ''}`}
            >
              {item.label}
            </Link>
            {item.items && <DocsNav data={item.items} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
