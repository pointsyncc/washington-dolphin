import React from 'react'

import { cn } from '@/utils/classMerge'

export type THeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  alt?: boolean
}
const fontSizes = {
  h1: 'text-lg xl:text-2xl',
  h2: 'text-lg xl:text-lg',
  h3: 'text-lg xl:text-lg',
  h4: 'text-[1rem] md:text-xl xl:text-[1.25rem]',
  h5: 'text-base xl:text-2xl',
  h6: 'text-sm xl:text-base',
}

export const Heading = ({ children, className, level = 1, ...rest }: THeadingProps) => {
  const Heading = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const sizes = fontSizes
  const classNames = cn('leading-tight font-medium', sizes[Heading], className)
  return (
    <Heading {...rest} className={classNames}>
      {children}
    </Heading>
  )
}
