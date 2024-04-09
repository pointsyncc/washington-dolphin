'use client'
import { Input } from '@/components/form/controls/TextInput'
import { FaSearch } from 'react-icons/fa'
const SearchForm = () => {
  const searchHandler = e => {
    console.log(e.target)
  }
  return (
    <div className="relative  mx-auto w-[90%]  lg:w-[305px] mt-[25px] lg:mt-0 ">
      <FaSearch className="absolute top-[12px] left-[15px] text-[#223333ad]" />
      <Input
        type="text"
        className="pl-[40px] text-[#223333ad] rounded-[20px]"
        placeholder={'Pretraži proizvode'}
        onChange={searchHandler}
      />
    </div>
  )
}

export default SearchForm
