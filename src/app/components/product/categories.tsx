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
    <div className="flex items-center">
      {categories.map((category, i) => (
        <button
          key={category.name}
          className={`text-[18px] py-[15px] px-[35px] ${currentValue === category.value ? 'bg-primary text-white rounded-[10px] hover:bg-primary-foreground' : 'hover:text-primary'}`}
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
