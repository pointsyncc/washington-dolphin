import { Container } from '../grid/Container'
import { Logo } from './Logo'

import { Media, Topbar, type Header as THeader } from '@/payload/payload-types'
import { cn } from '@/utils/classMerge'

import { ContactInfo } from 'src/app/(pages)/components/navigation/ContactInfo'
import { MobileNav } from './MobileNav'
import { NavItems } from './NavItems'
import { TLinkWithIconProps } from './LinkWithIcon'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

interface THeaderProps extends THeader {
  topbar: Topbar
}

export const Header = ({ logo, navItems, topbar }: THeaderProps) => {
  const links: TLinkWithIconProps[] = [
    {
      icon: FaMapMarkerAlt,
      href: topbar?.location?.url ?? 'https://maps.app.goo.gl/Tow1vwwy4AweQLMh8',
      children: topbar?.location?.label ?? 'Zagrebačka cesta 45, 10382, Goričica',
      className: 'hidden lg:flex',
    },
    {
      icon: FaEnvelope,
      href: `mailto:${topbar?.email?.url ?? 'pekarnamario@gmail.com'}`,
      children: topbar?.email?.label ?? 'pekarnamario@gmail.com',
      className: 'hidden lg:flex',
    },
    {
      icon: FaPhone,
      href: `tel:${topbar?.phone?.url ?? '+385 98 139 1548'}`,
      children: topbar?.phone?.label ?? '+385 98 139 1548',
      className: 'hidden lg:flex',
    },
  ]
  return (
    <header
      className={cn(
        'absolute w-full  left-0 z-50 xl:py-1 header transition-[top] ease-in-out duration-500',
      )}
    >
      <Container className="flex justify-between items-center">
        <Logo logo={logo as Media} />
        <nav className="ml-auto bg-primary rounded-lg mx-[22px] px-4 lg:block hidden">
          <NavItems navItems={navItems} linkClassName="text-white" />
        </nav>

        <MobileNav>
          <NavItems navItems={navItems} className="flex-col" />
          <ContactInfo className="flex-1 text-secondary" links={links} />
        </MobileNav>
      </Container>
    </header>
  )
}
