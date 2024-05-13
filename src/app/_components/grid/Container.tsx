'use client'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/classMerge'
import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ContainerGridSizes = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const containerClasses = cva('px-4', {
  variants: {
    fluid: {
      true: 'max-w-none',
      xs: 'container',
      sm: 'sm:container',
      md: 'md:container',
      lg: 'lg:container',
      xl: 'xl:container',
      xxl: 'xxl:container',
      '2xl': '2xl:container',
      '3xl': '3xl:container',
    },
    oneSide: {
      none: '',
      xs: 'container !one-side-container !mr-0 pr-0 [&>*]:mr-0',
      sm: 'sm:container sm:!one-side-container sm:!mr-0 sm:pr-0 [&>*]:mr-0',
      md: 'md:container md:!one-side-container md:!mr-0 md:pr-0 [&>*]:mr-0',
      lg: 'lg:container lg:!one-side-container lg:!mr-0 lg:pr-0 [&>*]:mr-0',
      xl: 'xl:container xl:!one-side-container xl:!mr-0 xl:pr-0 [&>*]:mr-0',
      '2xl': '2xl:container 2xl:!one-side-container 2xl:!mr-0 2xl:pr-0 [&>*]:mr-0',
    },
  },

  defaultVariants: {
    fluid: 'xl',
    oneSide: 'none',
  },
})

type TContainerProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T> &
  VariantProps<typeof containerClasses>

const Container = <C extends ElementType>({
  as,
  children,
  fluid,
  oneSide,
  className = '',
  ...rest
}: TContainerProps<C>) => {
  const Component = as || 'div'
  const _className = cn(containerClasses({ fluid, oneSide }), className)

  return (
    <Component {...rest} className={_className}>
      {children}
    </Component>
  )
}

export { Container, containerClasses, type TContainerProps }
