'use client'
import { Text } from '@/components/typography/text/Text'
import { Topbar } from '@/payload/payload-types'
import React from 'react'
import { FaClock } from 'react-icons/fa6'

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

export const Timmings = (props: { timmings: Topbar['timmings'] }) => {
  const getFormattedTime = (time: string) => {
    const date = new Date(time)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }
  const date = new Date()
  const dayOfWeek = WEEKDAYS[date.getDay()]
  const dayObject = props?.timmings?.[dayOfWeek]

  const openningTime = getFormattedTime(dayObject?.openningTime)
  const closingTime = getFormattedTime(dayObject?.closingTime)
  return (
    <div>
      <Text asChild={true} weight='medium'>
        <button className="flex items-center gap-2 ">
          <FaClock className="text-secondary" />
          {openningTime} - {closingTime}
        </button>
      </Text>
    </div>
  )
}
