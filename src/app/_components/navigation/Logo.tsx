import React from 'react'
import { Link, TLinkProps } from './Link'
import { Image } from '../Media/Image'
import { Media } from '@/payload/payload-types'

type TLogoProps = TLinkProps & {
  logo: Media
}

export const Logo = ({ logo, ...rest }: TLogoProps) => {
  return (
    <Link {...rest} href="/">
      <Image
        className="sm:max-w-[13.5rem]"
        src={logo?.url}
        alt={logo?.alt}
        width={logo?.width}
        height={logo?.height}
        responsive={false}
      />
    </Link>
  )
}
