'use client'
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
import { useEffect, useState } from 'react'

interface THeaderProps extends THeader {
  topbar: Topbar
  hasFeaturedImage?: boolean
  slug?: string
}

export const Header = ({ logo, navItems, topbar, hasFeaturedImage, slug }: THeaderProps) => {
  const links: TLinkWithIconProps[] = [
    {
      icon: FaMapMarkerAlt,
      href: topbar?.location?.url ?? 'https://maps.app.goo.gl/Tow1vwwy4AweQLMh8',
      children: topbar?.location?.label ?? 'Zagrebačka cesta 45, 10382, Goričica',
      className: 'lg:flex',
    },
    {
      icon: FaEnvelope,
      href: `mailto:${topbar?.email?.url ?? 'pekarnamario@gmail.com'}`,
      children: topbar?.email?.label ?? 'pekarnamario@gmail.com',
      className: 'lg:flex',
    },
    {
      icon: FaPhone,
      href: `tel:${topbar?.phone?.url ?? '+385 98 139 1548'}`,
      children: topbar?.phone?.label ?? '+385 98 139 1548',
      className: 'lg:flex',
    },
  ]

  const [bgColor, setBgColor] = useState('bg-transparent')

  useEffect(() => {
    console.log(slug)
    if (hasFeaturedImage || slug) {
      setBgColor('bg-transparent')
    } else {
      setBgColor('bg-[#573400] lg:bg-transparent')
    }
  }, [hasFeaturedImage, slug])

  return (
    <header
      className={cn(
        bgColor,
        'absolute w-full  left-0 z-50 py-1.5 xl:py-1 header transition-[top] ease-in-out duration-500',
      )}
    >
      <Container className="flex justify-between items-center">
        <Logo logo={logo as Media} className="" />
        <nav className="ml-auto bg-primary rounded-lg mx-[22px] px-4 lg:block hidden">
          <NavItems navItems={navItems} linkClassName="text-white" />
        </nav>

        <MobileNav navItems={navItems}>
          <ContactInfo className="text-black mt-auto p-4 !text-[13px]" links={links} />
        </MobileNav>
      </Container>
    </header>
  )
}
