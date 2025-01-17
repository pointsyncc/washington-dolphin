import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const classes = cva('!leading-[1.3]', {
  variants: {
    level: {
      1: 'text-sm md:text-lg xl:text-base',
      2: 'text-xs md:text-sm xl:text-base',
      3: 'text-xs md:text-sm xl:text-sm',
      4: 'text-xs md:text-sm',
      12: 'text-xs xl:text-base',
      13: 'text-xs md:text-sm xl:text-sm',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semiBold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      dark: 'text-dark',
      orange: 'text-orange',
    },
  },
  defaultVariants: {
    weight: 'normal',
    color: 'dark',
    level: 2,
  },
})

export type TTextProps<T extends React.ElementType> = VariantProps<typeof classes> &
  React.ComponentPropsWithoutRef<T> & {
    asChild?: Boolean
    // React.ParamHTMLAttributes<HTMLParagraphElement>
  }

export const Text = <T extends React.ElementType = 'p'>({
  level,
  weight,
  color,
  className,
  children,
  asChild,
  ...rest
}: TTextProps<T>) => {
  const classNames = classes({ level, weight, color, className })
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp className={classNames} {...rest}>
      {children}
    </Comp>
  )
}
