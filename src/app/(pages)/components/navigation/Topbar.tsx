import React from 'react'

import { LinkWithIcon, TLinkWithIconProps } from '@/components/navigation/LinkWithIcon'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

import { Topbar } from '@/payload/payload-types'

import { Container } from '@/components/grid/Container'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { Timmings } from './Timmings'
import { ContactInfo } from './ContactInfo'

type TTopbarProps = Topbar

const TopBar = async (topbar: TTopbarProps) => {
  const links: TLinkWithIconProps[] = [
    {
      icon: FaMapMarkerAlt,
      href: topbar?.location?.url ?? 'https://maps.app.goo.gl/Tow1vwwy4AweQLMh8',
      children: topbar?.location?.label ?? 'Zagrebačka cesta 45, 10382, Goričica',
    },
    {
      icon: FaEnvelope,
      href: `mailto:${topbar?.email?.url ?? 'pekarnamario@gmail.com'}`,
      children: topbar?.email?.label ?? 'pekarnamario@gmail.com',
    },
    {
      icon: FaPhone,
      href: `tel:${topbar?.phone?.url ?? '+385 98 139 1548'}`,
      children: topbar?.phone?.label ?? '+385 98 139 1548',
    },
  ]

  return (
    <div className="py-4">
      <Container>
        <div className="gap-2 lg:gap-0 items-center flex-col lg:flex-row flex lg:justify-between">
          <ContactInfo links={links} />
          <Timmings timmings={topbar?.timmings} />
        </div>
      </Container>
    </div>
  )
}
export { TopBar }
