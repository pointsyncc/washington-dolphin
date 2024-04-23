'use client'
import { Link } from '@/components/navigation/Link'
import { LinkWithIcon } from '@/components/navigation/LinkWithIcon'
import { Modal, ModalContent, ModalTrigger } from '@/components/surfaces/Modal'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Topbar } from '@/payload/payload-types'
import React, { useMemo } from 'react'
import { FaClock } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'
import { formatTime } from 'src/app/_utilities/formatDateTime'

const WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const CROTIAN_TRANSLATED_WEEKDAYS = {
  monday: 'Ponedjeljak',
  tuesday: 'Utorak',
  wednesday: 'Srijeda',
  thursday: 'Četvrtak',
  friday: 'Petak',
  saturday: 'Subota',
  sunday: 'Nedjelja',
}

type TimmingsModalProps = {
  openningTime: string
  closingTime: string
  timmings: Topbar['timmings']
  closed: boolean
  link:Topbar['timmingsLink']
}

const TimmingsModal = ({
  openningTime,
  closingTime,
  closed,
  timmings,
  link,
}: TimmingsModalProps) => {
  //console.log(timmings, 'TIMMINGS')
  const formattedDaysTimmings = []
  for (let key in timmings) {
    const time = timmings[key]
    const openningTime = formatTime(time?.openningTime)
    const closingTime = formatTime(time?.closingTime)
    formattedDaysTimmings.push({
      time: time.closed ? 'ZATVORENO' : `${openningTime} - ${closingTime}h`,
      label: CROTIAN_TRANSLATED_WEEKDAYS[key],
    })
  }

  const { type, reference, url, label } = link ?? {}
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url
  return (
    <Modal>
      <ModalTrigger asChild>
        <button className="flex items-center gap-2 text-sm lg:text-[1rem]">
          <FaClock className="text-secondary text-sm lg:text-lg" />
          Radno vrijeme:{' '}
          <span className='font-bold'>
          {closed ? 'Trenutno zatvoreno' : `${openningTime} - ${closingTime}h`}
          </span>
        </button>
      </ModalTrigger>
      <ModalContent className="bg-secondary border-secondary">
        <div className="space-y-5">
          <Heading level={3} className="flex gap-4 items-center justify-center mb-2">
            <FaClock /> Radno vrijeme
          </Heading>
          <ul className="space-y-5">
            {formattedDaysTimmings.map((dayTimming, i) => (
              <li key={i} className="capitalize">
                {dayTimming.label}: {dayTimming.time}
              </li>
            ))}
          </ul>
          {Boolean(href && label) && (
            <LinkWithIcon
              iconClassName="text-body-foreground"
              className="flex items-center justify-end hover:text-body-foreground hover:underline"
              href={href}
              icon={MdArrowOutward}
              iconPosition="append"
            >
              {label}
            </LinkWithIcon>
          )}
        </div>
      </ModalContent>
    </Modal>
  )
}

export const Timmings = ({
  timmings,
  timmingsLink,
}: {
  timmings: Topbar['timmings']
  timmingsLink: Topbar['timmingsLink']
}) => {
  const date = new Date()
  const dayOfWeek = WEEKDAYS[date.getDay()]
  const dayObject = timmings?.[dayOfWeek]

  const openningTime = formatTime(dayObject?.openningTime)
  const closingTime = formatTime(dayObject?.closingTime)
  const closed = dayObject.closed
  return (
    <div>
      <Text asChild={true} weight="medium">
        <TimmingsModal
          closed={closed}
          openningTime={openningTime}
          closingTime={closingTime}
          timmings={timmings}
          link={timmingsLink}
        />
      </Text>
    </div>
  )
}
