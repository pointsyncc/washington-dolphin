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
  const links = [
    {
      icon: FaMapMarkerAlt,
      href: topbar?.location?.url ?? 'https://maps.app.goo.gl/Tow1vwwy4AweQLMh8',
      children: topbar?.location?.label ?? 'Zagrebačka cesta 45, 10382, Goričica',
      containerClassName: 'hidden lg:flex'
    },
    {
      icon: FaEnvelope,
      href: `mailto:${topbar?.email?.url ?? 'pekarnamario@gmail.com'}`,
      children: topbar?.email?.label ?? 'pekarnamario@gmail.com',
      containerClassName: 'hidden lg:flex'
    },
    {
      icon: FaPhone,
      href: `tel:${topbar?.phone?.url ?? '+385 98 139 1548'}`,
      children: topbar?.phone?.label ?? '+385 98 139 1548',
      containerClassName: 'hidden lg:flex'
    },
  ]

  return (
    <div className="py-3 lg:py-4 flex justify-center">
      <Container>
        <div className="gap-2 lg:gap-0 sm:items-center flex-col lg:flex-row flex lg:justify-between">
          <ContactInfo
            className='flex-1'
            links={links}
            contactInfoAppend={
              <li className='lg:ml-auto flex items-center justify-center'>
                <Timmings timmings={topbar?.timmings} timmingsLink={topbar?.timmingsLink}/>
              </li>
            }
          />
        </div>
      </Container>
    </div>
  )
}
export { TopBar }
