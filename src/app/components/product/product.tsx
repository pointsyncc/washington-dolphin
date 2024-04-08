import React from 'react'
import { GoLaw } from 'react-icons/go'
import { FaFire } from 'react-icons/fa'

interface Props {
  title: string
  description: string
  weight: number | string
  energy: number | string
}
const product = ({ title, description, energy, weight }: Props) => {
  return (
    <div className="shadow-lg bg-[#FFFCE3] w-[33%] rounded-[20px] basis-[100%] max-w-[100%] sm:basis-[45%] sm:max-w-[45%] lg:basis-[25%] lg:max-w-[25%] p-[24px] lg:m-[20px] m-[12px]  hover:translate-y-[-10px] transition-all cursor-pointer">
      <h3 className="font-[500] text-[18px]">{title}</h3>
      <p className="text-[#223333ad]">{description}</p>
      <div className="flex justify-between items-center pt-[49px]">
        <div className="flex text-primary items-center">
          <GoLaw />
          <p className="m-0 pl-[10px]">{weight}</p>
        </div>
        <div className="flex text-secondary items-center">
          <FaFire />
          <p className="m-0 pl-[10px]">{energy}</p>
        </div>
      </div>
    </div>
  )
}

export default product
