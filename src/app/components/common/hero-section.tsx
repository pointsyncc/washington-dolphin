import { url } from 'inspector'
import React from 'react'

interface HeroSectionProps {
  pageTitle: string
  bgURL: string
}

const HeroSection = ({ pageTitle, bgURL }: HeroSectionProps) => {
  const imageSource = `${bgURL}`
  return (
    <div
      style={{ backgroundImage: `url(${imageSource})` }}
      className={`bg-no-repeat bg-cover w-full h-[340px] md:h-[500px] flex items-end rounded-[20px]`}
    >
      <h1 className="text-white sm:text-5xl text-xl font-[700] sm:pl-[60px] sm:pb-[60px] pl-[20px] pb-[20px]">
        {pageTitle}
      </h1>
    </div>
  )
}

export default HeroSection
