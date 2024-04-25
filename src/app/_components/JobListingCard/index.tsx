import React from 'react'
import { GoLaw } from 'react-icons/go'
import { FaFire } from 'react-icons/fa'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

interface Props {
  title: string
  shortDescription: string
  publishedAt: string
  deadline?: string
  href: string
  salary?: number
}
const JobListingCard = ({
  title,
  shortDescription,
  href,
  publishedAt,
  deadline,
  salary,
}: Props) => {
  const formatDate = (date: string) => {
    const _date = new Date(date)
    return _date.toLocaleDateString('hr-HR')
  }
  return (
    <Link href={'/oglasi-za-posao/' + href}>
      <div className="shadow-sm bg-[#FFFCE3] min-w-[100%] lg:min-w-[450px] w-full rounded-[20px] max-w-[100%] basis-[100%] p-[24px] lg:m-[20px] hover:translate-y-[-10px] transition-all cursor-pointer">
        <div className='flex justify-between items-center'>
        <p className="!text-[12.5px] opacity-85 space-y-1 lg:space-y-2">Objavljeno: {formatDate(publishedAt)}</p>
        <Link href={'/oglasi-za-posao/' + href}>
          <MdArrowOutward className='text-xl' />
        </Link>
        </div>
        <h3 className="font-[500] text-[18px]">{title}</h3>
        <p className="text-[#573400]/80">{shortDescription}</p>
        <div className="flex justify-between items-center pt-[49px]">
          <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-2 items-start lg:items-center w-full text-primary">
            {<p className="m-0 !text-[12.5px]">{deadline  ? 'Prijave traju do: ' + formatDate(deadline) : 'Nema roka prijave'}</p>}
            {salary && (
              <p className="m-0 text-xs bg-[#cda56a] px-4 py-2.5 rounded-sm">Plaća: {salary} EUR</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobListingCard
