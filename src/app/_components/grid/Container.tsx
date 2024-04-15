'use client'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/classMerge'

export type ContainerGridSizes = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const containerClasses = cva('', {
  variants: {
    fluid: {
      true: 'max-w-none px-4',
      xs: 'container',
      sm: 'sm:container',
      md: 'md:container',
      lg: 'lg:container',
      xl: 'xl:container',
      xxl: 'xxl:container',
      '2xl': '2xl:container',
      // '3xl': '3xl:container',
    },
    oneSide: {
      none: '',
      xs: 'container !one-side-container !mr-0 pr-0 [&>*]:mr-0',
      sm: 'container sm:!one-side-container sm:!mr-0 pr-0 [&>*]:mr-0',
      md: 'container md:!one-side-container md:!mr-0 pr-0 [&>*]:mr-0',
      lg: 'container lg:!one-side-container lg:!mr-0 pr-0 [&>*]:mr-0',
      xl: 'container xl:!one-side-container xl:!mr-0 pr-0 [&>*]:mr-0',
      '2xl': 'container xxl:!one-side-container xxl:!mr-0 pr-0 [&>*]:mr-0',
    },
  },

  defaultVariants: {
    fluid: 'xs',
    oneSide: 'none',
  },
})

type TContainerProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerClasses>

const Container = ({ children, fluid, oneSide, className = '', ...rest }: TContainerProps) => {
  const _className = cn(containerClasses({ fluid, oneSide }), className)

  return (
    <div {...rest} className={_className}>
      {children}
    </div>
  )
}

export { Container, containerClasses, type TContainerProps }
