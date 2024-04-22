import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const classes = cva(['animate-spin h-5 w-5 block rounded-full border-[5px]'], {
  variants: {
    variant: {
      primary: 'border-primary border-b-primary-foreground',
      secondary: 'border-secondary border-b-white/80',
      white: 'border-white border-b-white/60',
    },
  },
  defaultVariants: {
    variant: 'white',
  },
})
export interface ILoaderProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof classes> {}

export const Loader = ({ className, variant }: ILoaderProps) => {
  return (
    <span
      className={twMerge(
        'animate-spin h-7 w-7 block rounded-full border-[5px]',
        classes({ variant }),
        className,
      )}
    ></span>
  )
}
