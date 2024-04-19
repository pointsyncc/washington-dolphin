'use client'
import { Text } from '@/components/typography/text/Text'
import { Topbar } from '@/payload/payload-types'
import React from 'react'

const WEEKDAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

export const Timmings = (props: { timmings: Topbar['timmings'] }) => {
  const date = new Date()
  const dayOfWeek = WEEKDAYS[date.getDay()]
  const dayObject = props?.timmings?.[dayOfWeek]
  const openningDate = new Date(dayObject?.openningTime)
  const openningTime = `${openningDate.getHours()}:${openningDate.getMinutes()}`
  const closingDate = new Date(dayObject?.closingTime)
  const closingTime = `${closingDate.getHours()}:${closingDate.getMinutes()}`
  return (
    <div>
      <Text asChild={true}>
        <button>
          {openningTime} - {closingTime}
        </button>
      </Text>
    </div>
  )
}
