'use client'
import { Input } from '@/components/form/controls/TextInput'
import { useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

interface Props {
  placeholder?: string
  disabled?: boolean
}

const SearchForm = ({ placeholder, disabled }: Props) => {
  const searchParams = useSearchParams()
  const timeoutId = useRef(null)
  const pathname = usePathname()
  const router = useRouter()
  const params = new URLSearchParams(searchParams)
  const searchHandler = e => {
    const query = e.target.value as string
    if (!query.length) {
      params.delete('title')
      router.push(pathname + '?' + params.toString(), {
        scroll: false,
      })
    }

    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => {
      if (query) {
        params.set('title', query)
        router.push(pathname + '?' + params.toString(), {
          scroll: false,
        })
      }
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [])

  return (
    <div className="relative  mx-auto w-[90%]  lg:w-[305px] mt-[25px] lg:mt-0 ">
      <FaSearch className="absolute top-[12px] left-[15px] text-[#223333ad]" />
      <Input
        type="text"
        className="pl-[40px] text-[#223333ad] rounded-[0px] bg-[#FFFCE3]"
        placeholder={placeholder ?? 'Pretraži proizvode...'}
        defaultValue={params.get('title') ? params.get('title') : ''}
        disabled={disabled}
        onChange={searchHandler}
      />
    </div>
  )
}

export default SearchForm
