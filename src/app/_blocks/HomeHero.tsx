'use client'
import NextJsImage from '@/components/Media/NextImage'
import { cn } from '@/utils/classMerge'
import React, { ComponentPropsWithRef, useState } from 'react'
import Hero from 'src/app/components/common/hero-section'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Product1 from '/public/product-1.jpg'
import Product2 from '/public/product-2.jpg'
import Product3 from '/public/product-3.jpg'

type TGalleryItemTriggerProps = ComponentPropsWithRef<'div'> & {
  children: React.ReactNode
  bgURL: string
  pointClassName?: string
}

const GalleryItemTrigger = ({
  children,
  className,
  pointClassName,
  bgURL,
}: TGalleryItemTriggerProps) => {
  const [open,setOpen] = useState(false)
  return (
    <>
      <button className={cn('flex gap-2 items-center btn-none', className)} onClick={setOpen.bind(null,true)}>
        <div
          className={cn(
            'bg-white border-[#FF9800] rounded-full border-4 w-[19px] h-[19px]',
            pointClassName,
          )}
        ></div>
        <div
          className="flex items-center justify-center bg-contain w-[5.25rem] h-[3.3125rem] rounded-[15px] text-white shadow-[inset_0_0px_0px_5.25rem_rgba(0,0,0,0.20)] font-medium"
          style={{ backgroundImage: `url(${bgURL})` }}
        >
          {children}
        </div>
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[Product1,Product2,Product3]}
        render={{ slide: NextJsImage }}
      />
    </>
  )
}

export const HomeHero = () => {
  return (
    <Hero bgURL="/home-hero.jpg" className="md:h-screen h-screen relative ">
      <GalleryItemTrigger bgURL="/home-hero-cake.jpg" className="absolute top-[58%] left-8">
        Slastice
      </GalleryItemTrigger>
      <GalleryItemTrigger
        bgURL="/home-hero-cake.jpg"
        className="absolute top-[34%] left-[36%] flex-col-reverse"
        pointClassName=""
      >
        Kruh
      </GalleryItemTrigger>
      <GalleryItemTrigger
        bgURL="/home-hero-cake.jpg"
        className="absolute top-[77%] left-[33%] flex-col"
        pointClassName=""
      >
        Bureci
      </GalleryItemTrigger>
      <GalleryItemTrigger
        bgURL="/home-hero-cake.jpg"
        className="absolute top-[84%] left-[58%] flex-col"
        pointClassName=""
      >
        Peciva
      </GalleryItemTrigger>
    </Hero>
  )
}
