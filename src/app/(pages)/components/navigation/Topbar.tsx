import React from 'react'

import { LinkWithIcon, TLinkWithIconProps } from '@/components/navigation/LinkWithIcon'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

import { Topbar } from '@/payload/payload-types'

import { Container } from '@/components/grid/Container'
import { FaMapMarker } from 'react-icons/fa'
import { Text } from '@/components/typography/text/Text'
import { Timmings } from './Timmings'

type TTopbarProps = Topbar

const TopBar = async (topbar: TTopbarProps) => {
  const links: TLinkWithIconProps[] = [
    {
      icon: FaMapMarker,
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
    <Container className="py-4">
      <div className="gap-2 lg:gap-0 items-center flex-col lg:flex-row flex lg:justify-between">
        <ul className="flex-col sm:flex-row flex gap-0 sm:gap-4">
          {links.map(link => (
            <li key={link.children.toString()}>
              <LinkWithIcon {...link} />
            </li>
          ))}
        </ul>
          <Timmings timmings={topbar?.timmings}/>
      </div>
    </Container>
  )
}
export { TopBar }
