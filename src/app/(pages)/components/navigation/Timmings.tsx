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

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

type TimmingsModalProps = {
  openningTime: string
  closingTime: string
  timmings: Topbar['timmings']
}

const TimmingsModal = ({ openningTime, closingTime, timmings }: TimmingsModalProps) => {
  const formattedDaysTimmings = []
  for (let key in timmings) {
    const time = timmings[key]
    const openningTime = formatTime(time?.openningTime)
    const closingTime = formatTime(time?.closingTime)
    formattedDaysTimmings.push({
      time: time.closed ? 'ZATVORENO' : `${openningTime} - ${closingTime}`,
      label: key,
    })
  }
  return (
    <Modal>
      <ModalTrigger asChild>
        <button className="flex items-center gap-2 ">
          <FaClock className="text-secondary" />
          {openningTime} - {closingTime}h
        </button>
      </ModalTrigger>
      <ModalContent className="bg-secondary border-secondary ">
        <div className="space-y-5">
          <Heading level={2} className="flex gap-4 items-center justify-center">
            <FaClock /> Radno vrijeme
          </Heading>
          <ul className="space-y-5">
            {formattedDaysTimmings.map((dayTimming, i) => (
              <li key={i} className="capitalize">
                {dayTimming.label}: {dayTimming.time}h
              </li>
            ))}
          </ul>
          <LinkWithIcon iconClassName='text-body-foreground' className='flex items-center justify-end' href="/contect" icon={MdArrowOutward} iconPosition='append'>Pošalji upit</LinkWithIcon>
        </div>
      </ModalContent>
    </Modal>
  )
}

export const Timmings = ({ timmings }: { timmings: Topbar['timmings'] }) => {
  const date = new Date()
  const dayOfWeek = WEEKDAYS[date.getDay()]
  const dayObject = timmings?.[dayOfWeek]

  const openningTime = formatTime(dayObject?.openningTime)
  const closingTime = formatTime(dayObject?.closingTime)
  return (
    <div>
      <Text asChild={true} weight="medium">
        <TimmingsModal openningTime={openningTime} closingTime={closingTime} timmings={timmings} />
      </Text>
    </div>
  )
}
