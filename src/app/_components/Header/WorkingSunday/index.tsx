'use client'
import { WorkSunday } from '@/payload/payload-types'
import React, { Fragment } from 'react'
import { FaRegBell } from 'react-icons/fa6'

interface WorkingSundaysProps {
  workingSundays: WorkSunday['sunday']
}

export default function WorkingSundays({ workingSundays }: WorkingSundaysProps) {

    const [showInfo, setShowInfo] = React.useState(false)

    // check if 
    const generateInfoText = (data: WorkSunday['sunday']) => {
        //find the date that is current sunday or next sunday and return "OVU NEDJELJU NE RADIMO" if .open is false else return "OVU NEDJELJU RADIMO"
        //return the time from and to
        //return the description
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const currentSunday = currentDate.getDate() - currentDay
    const nextSunday = currentSunday + 7
    const currentSundayDate = new Date(currentYear, currentMonth, currentSunday)
    const nextSundayDate = new Date(currentYear, currentMonth, nextSunday)
    const currentSundayData = data.find(sunday => new Date(sunday.date).getTime() === currentSundayDate.getTime())
    const nextSundayData = data.find(sunday => new Date(sunday.date).getTime() === nextSundayDate.getTime())
    const text = []
    if (currentSundayData) {
      text.push(currentSundayData.open ? 'OVU NEDJELJU RADIMO' : 'OVU NEDJELJU NE RADIMO')
      text.push(`${currentSundayData.from} - ${currentSundayData.to}`)
      text.push(currentSundayData.description)
    }
    if (nextSundayData) {
      text.push(nextSundayData.open ? 'SLJEDEĆU NEDJELJU RADIMO' : 'SLJEDEĆU NEDJELJU NE RADIMO')
      text.push(`${nextSundayData.from} - ${nextSundayData.to}`)
      text.push(nextSundayData.description)
    }
    return text
}
  return (
    <Fragment>
        <button className="bg-secondary sm:mb-0 mb-[20px] flex items-center self-center sm:self-end xl:px-[25px] px-[15px]  rounded-[20px] text-white" onClick={() => setShowInfo(!showInfo)}>
    <FaRegBell className="" />
  </button>
    </Fragment>
  )
}
