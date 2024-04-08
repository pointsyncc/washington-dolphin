'use client'
import React from 'react'
import useFilter from '@/hooks/useFilters'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
interface Props {
  categories: { name: string; value: string }[]
}
const categories = ({ categories }: Props) => {
  const { createQueryString } = useFilter()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams as any)
  const currentValue = params.get('category')
  const setCategoryHandler = (value: string) => {
    router.push(pathname + '?' + createQueryString('category', value), {
      scroll: false,
    })
  }
  return (
    <div className="flex flex-wrap w-full   justify-center lg:justify-start items-center md:mt-[0px] mb-[40px]">
      {categories.map((category, i) => (
        <button
          key={category.name}
          className={`md:basis-auto md:max-w-auto basis-auto max-w-auto sm:basis-[100px] sm:max-w-[100px]
          ]  text-[14px] lg:text-[18px]  lg:py-[15px] py-[5px] lg:px-[35px] md:px-[25px] sm:px-[20px] px-[15px] ${currentValue === category.value ? 'bg-primary text-white rounded-[10px] hover:bg-primary-foreground' : 'hover:text-primary'} mt-[15px]`}
          onClick={() => {
            setCategoryHandler(category.value)
          }}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default categories
