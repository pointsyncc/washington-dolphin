import React, { Fragment } from 'react'
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
    <Link href={'/oglasi-za-posao/' + href} legacyBehavior>
      <div className="shadow-sm bg-[#FFFCE3] ] border-[1px] border-[#573400]/40 lg:min-w-[450px]  rounded-[20px] w-full lg:w-[450px] basis-[100%] p-[24px] lg:m-[20px] hover:translate-y-[-10px] transition-all cursor-pointer">
        <div className="flex justify-between items-center">
          <p className="!text-[12.5px] opacity-85 space-y-1 lg:space-y-2">
            Objavljeno: {formatDate(publishedAt)}
          </p>
          <Link href={'/oglasi-za-posao/' + href}>
            <MdArrowOutward className="text-xl" />
          </Link>
        </div>
        <h3 className="font-[500] text-[18px] line-clamp-2 visible" title={title}>
          {title}
        </h3>
        <p
          className="text-[#573400]/80 line-clamp-3 visible leading-6 mt-2"
          title={shortDescription}
        >
          {shortDescription}
        </p>
        <div className="flex justify-between items-center pt-[49px]">
          <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-2 items-start lg:items-center w-full text-primary">
            {
              <p className="m-0 !text-[12.5px]">
                {deadline ? 'Prijave traju do: ' + formatDate(deadline) : 'Nema roka prijave'}
              </p>
            }
            {salary && (
              <Fragment>
                <p className="m-0 block lg:hidden !text-[12.5px] bg-[#cda56a] px-4 py-0 rounded-sm">
                  Plaća: {salary} EUR
                </p>
                <p className="m-0 hidden lg:block text-xs bg-[#cda56a] px-4 py-2.5 rounded-sm">
                  Plaća: {salary} EUR
                </p>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JobListingCard
