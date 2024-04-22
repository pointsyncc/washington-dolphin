import React from 'react'
import { Container } from '../grid/Container'
import { Logo } from './Logo'
import { Link } from './Link'
import { cn } from '@/utils/classMerge'
import { type Header as THeader } from '@/payload/payload-types'
export const Header = ({ logo, navItems }: THeader) => {
  return (
    <header
      className={cn(
        'fixed w-full top-24 left-0 z-50 py-6 xl:py-1 header transition-[top] ease-in-out duration-500 op-[120px] lg:top-[70px]',
      )}
    >
      <Container className="flex justify-between items-center ">
        <Logo logo={logo} />
        <nav className="ml-auto bg-[#57340099] rounded-lg mx-[22px] px-4">
          <ul className="flex items-center gap-2">
            {navItems?.map(({ link }) => {
              const { type, reference, url, label } = link
              const href =
                type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
                  ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
                      reference.value.slug
                    }`
                  : url
              return (
                <li key={url}>
                  <Link
                    href={href}
                    className={cn('py-4 block px-3 xl:px-4 rounded-md transition-colors text-white')}
             
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
