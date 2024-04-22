'use client'
import { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { Gallery, Image } from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { Page } from '../../../payload/payload-types'

interface CustomImage extends Image {
  original: string
}

type Props = Extract<Page['layout'][0], { blockType: 'galleryBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const GalleryBock: React.FC<Props> = props => {
  const { images: _images } = props

  const images = _images.map(img => {
    let src = typeof img.image === 'string' ? img.image : img.image?.url
    let width = typeof img.image === 'string' ? 0 : img.image?.width
    let height = typeof img.image === 'string' ? 0 : img.image?.height
    return {
      src: src,
      //original: src,
      width: width,
      height: height,
      //caption: img.caption,
    }
  })

  const [index, setIndex] = useState(-1)

  const handleClick = (index: number, item: CustomImage) => setIndex(index)

  return (
    <div>
      <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
      {/*       <PhotoAlbum
      layout="rows"
      photos={images}
      renderPhoto={NXImage}
      defaultContainerWidth={1200}
      sizes={{ size: "calc(100vw - 240px)" }}
    /> */}
      <Lightbox slides={images} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </div>
  )
}
