import { url } from 'inspector';
import React from 'react'
// interface Props{
//     imageSource:string;
// }
const HeroSection = ({ pageTitle,pageName }: { pageTitle: string;pageName:string; }) => {
  console.log(pageName)
  const imageSource=`/${pageName}/bg.png`
  return (
    <div style={{backgroundImage:`url(${imageSource})`}} className={`bg-no-repeat bg-cover w-full h-[500px] flex items-end mb-[80px] rounded-[20px]`}>
      <h1 className='text-white text-5xl font-[700] pl-[60px] pb-[60px]'>{pageTitle}</h1>
   </div>
  )
}

export default HeroSection
