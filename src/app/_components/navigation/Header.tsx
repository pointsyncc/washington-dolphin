import React from 'react'
import { Container } from '../grid/Container'
import { Logo } from './Logo'

import { cn } from '@/utils/classMerge'
import { type Header as THeader } from '@/payload/payload-types'

import { NavItems } from './NavItems'
import { MobileNav } from './MobileNav'

export const Header = ({ logo, navItems }: THeader) => {
  return (
    <header
      className={cn(
        'absolute w-full  left-0 z-50 xl:py-1 header transition-[top] ease-in-out duration-500',
      )}
    >
      <Container className="flex justify-between items-center">
        <Logo logo={logo} />
        <nav className="ml-auto bg-primary rounded-lg mx-[22px] px-4 lg:block hidden">
          <NavItems navItems={navItems} linkClassName='text-white' />
        </nav>

        <MobileNav>
          <NavItems navItems={navItems} className='flex-col' />
        </MobileNav>
      </Container>
    </header>
  )
}
