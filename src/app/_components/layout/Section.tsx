import { Image } from '@/components/Media/Image'
import { Container, TContainerProps } from '@/components/grid/Container'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { cn } from '@/utils/classMerge'
import { Slot } from '@radix-ui/react-slot'
import React, { ComponentPropsWithoutRef, ElementType } from 'react'

type TSectionProps<T extends ElementType> = ComponentPropsWithoutRef<'section'> & {
  withContainer?: boolean
  containerProps?: TContainerProps<T>
  sectionPrepend?: React.ReactNode
  sectionAppend?: React.ReactNode
  asChild?: T
  variant?: 'dark' | 'light',
  

}

export const Section = <T extends ElementType>({
  asChild,
  children,
  withContainer = true,
  className,
  containerProps,
  variant = 'light',
  ...rest
}: TSectionProps<T>) => {
  const classes = cn(
    'py-12 mt-6',
    variant === 'dark' ? 'bg-body-foreground text-secondary' : '',
    className,
  )
  const Comp = asChild ? Slot : 'section'
  return <Comp className={classes} {...rest}>{withContainer ? <Container {...containerProps}>{children}</Container> : children}</Comp>
}
