'use client'
import { Input } from '@/components/form/controls/TextInput'
import { FaSearch } from 'react-icons/fa'
const SearchForm = () => {
  const searchHandler = e => {
    console.log(e.target)
  }
  return (
    <div className="relative w-full  sm:w-[305px] h-[48px]">
      <FaSearch className="absolute top-[10px] left-[10px] text-[#223333ad]" />
      <Input
        type="text"
        className="pl-[35px] text-[#223333ad]"
        placeholder={'Pretraži proizvode'}
        onChange={searchHandler}
      />
    </div>
  )
}

export default SearchForm
