import { cn } from '@/utils/classMerge'

type ColType =
  | 'auto'
  | number
  | { span?: boolean | 'auto' | number; offset?: number; order?: 'first' | 'last' | number }

interface Icolprops<T extends React.ElementType = 'div'> {
  lg?: ColType
  md?: ColType
  sm?: ColType
  xl?: ColType
  xs?: ColType
  xxl?: ColType
  as?: T
}

const getColClasses = (
  prefix: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  cols: ColType,
  totalCols = 12,
) => {
  const _prefix = prefix ? prefix + ':' : prefix
  const autoMap = {
    xs: 'flex-[1_0_0] w-auto w-full',
    sm: 'sm:flex-[1_0_0] sm:w-auto w-full',
    md: 'md:flex-[1_0_0] md:w-auto w-full',
    lg: 'lg:flex-[1_0_0] lg:w-auto w-full',
    xl: 'xl:flex-[1_0_0] xl:w-auto w-full',
    xxl: '2xl:flex-[1_0_0] 2xl:w-auto w-full',
  }
  if (cols === 'auto') return autoMap[prefix]

  const booleanMap = {
    xs: 'flex-1 w-auto w-full',
    sm: 'sm:flex-1 sm:w-auto w-full',
    md: 'md:flex-1 md:w-auto w-full',
    lg: 'lg:flex-1 lg:w-auto w-full',
    xl: 'xl:flex-1 xl:w-auto w-full',
    xxl: '2xl:flex-1 2xl:w-auto w-full',
  }

  if (typeof cols === 'boolean') return booleanMap[prefix]

  const colsMap = {
    xs: {
      '1': '!w-1/12 !flex-[0_0_auto]',
      '2': '!w-2/12 !flex-[0_0_auto]',
      '3': '!w-3/12 !flex-[0_0_auto]',
      '4': '!w-4/12 !flex-[0_0_auto]',
      '5': '!w-5/12 !flex-[0_0_auto]',
      '6': '!w-6/12 !flex-[0_0_auto]',
      '7': '!w-7/12 !flex-[0_0_auto]',
      '8': '!w-8/12 !flex-[0_0_auto]',
      '9': '!w-9/12 !flex-[0_0_auto]',
      '10': '!w-10/12 !flex-[0_0_auto]',
      '11': '!w-11/12 !flex-[0_0_auto]',
      '12': '!w-full !flex-[0_0_auto]',
    },
    sm: {
      '1': 'sm:!w-1/12   sm:!flex-[0_0_auto]',
      '2': 'sm:!w-2/12   sm:!flex-[0_0_auto]',
      '3': 'sm:!w-3/12   sm:!flex-[0_0_auto]',
      '4': 'sm:!w-4/12   sm:!flex-[0_0_auto]',
      '5': 'sm:!w-5/12   sm:!flex-[0_0_auto]',
      '6': 'sm:!w-6/12   sm:!flex-[0_0_auto]',
      '7': 'sm:!w-7/12   sm:!flex-[0_0_auto]',
      '8': 'sm:!w-8/12   sm:!flex-[0_0_auto]',
      '9': 'sm:!w-9/12   sm:!flex-[0_0_auto]',
      '10': 'sm:!w-10/12   sm:!flex-[0_0_auto]',
      '11': 'sm:!w-11/12   sm:!flex-[0_0_auto]',
      '12': 'sm:!w-full  sm:!flex-[0_0_auto]',
    },
    md: {
      '1': 'md:!w-1/12  md:!flex-[0_0_auto]',
      '2': 'md:!w-2/12  md:!flex-[0_0_auto]',
      '3': 'md:!w-3/12  md:!flex-[0_0_auto]',
      '4': 'md:!w-4/12  md:!flex-[0_0_auto]',
      '5': 'md:!w-5/12  md:!flex-[0_0_auto]',
      '6': 'md:!w-6/12  md:!flex-[0_0_auto]',
      '7': 'md:!w-7/12  md:!flex-[0_0_auto]',
      '8': 'md:!w-8/12  md:!flex-[0_0_auto]',
      '9': 'md:!w-9/12  md:!flex-[0_0_auto]',
      '10': 'md:!w-10/12  md:!flex-[0_0_auto]',
      '11': 'md:!w-11/12  md:!flex-[0_0_auto]',
      '12': 'md:!w-full md:!flex-[0_0_auto]',
    },
    lg: {
      '1': 'lg:!w-1/12  lg:!flex-[0_0_auto]',
      '2': 'lg:!w-2/12  lg:!flex-[0_0_auto]',
      '3': 'lg:!w-3/12  lg:f!lex-[0_0_auto]',
      '4': 'lg:!w-4/12  lg:!flex-[0_0_auto]',
      '5': 'lg:!w-5/12  lg:!flex-[0_0_auto]',
      '6': 'lg:!w-6/12  lg:!flex-[0_0_auto]',
      '7': 'lg:!w-7/12  lg:!flex-[0_0_auto]',
      '8': 'lg:!w-8/12  lg:!flex-[0_0_auto]',
      '9': 'lg:!w-9/12  lg:!flex-[0_0_auto]',
      '10': 'lg:!w-10/12  lg:!flex-[0_0_auto]',
      '11': 'lg:!w-11/12  lg:!flex-[0_0_auto]',
      '12': 'lg:!w-full lg:!flex-[0_0_auto]',
    },
    xl: {
      '1': 'xl:!w-1/12  xl:!flex-[0_0_auto]',
      '2': 'xl:!w-2/12  xl:!flex-[0_0_auto]',
      '3': 'xl:!w-3/12  xl:!flex-[0_0_auto]',
      '4': 'xl:!w-4/12  xl:!flex-[0_0_auto]',
      '5': 'xl:!w-5/12  xl:!flex-[0_0_auto]',
      '6': 'xl:!w-6/12  xl:!flex-[0_0_auto]',
      '7': 'xl:!w-7/12  xl:!flex-[0_0_auto]',
      '8': 'xl:!w-8/12  xl:!flex-[0_0_auto]',
      '9': 'xl:!w-9/12  xl:!flex-[0_0_auto]',
      '10': 'xl:!w-10/12  xl:!flex-[0_0_auto]',
      '11': 'xl:!w-11/12  xl:!flex-[0_0_auto]',
      '12': 'xl:!w-full xl:!fl!ex-[0_0_auto]',
    },
    xxl: {
      '1': '2xl:!w-1/12  2xl:!flex-[0_0_auto]',
      '2': '2xl:!w-2/12  2xl:!flex-[0_0_auto]',
      '3': '2xl:!w-3/12  2xl:!flex-[0_0_auto]',
      '4': '2xl:!w-4/12  2xl:!flex-[0_0_auto]',
      '5': '2xl:!w-5/12  2xl:!flex-[0_0_auto]',
      '6': '2xl:!w-6/12  2xl:!flex-[0_0_auto]',
      '7': '2xl:!w-7/12  2xl:!flex-[0_0_auto]',
      '8': '2xl:!w-8/12  2xl:!flex-[0_0_auto]',
      '9': '2xl:!w-9/12  2xl:!flex-[0_0_auto]',
      '10': '2xl:!w-10/12  2xl:!flex-[0_0_auto]',
      '11': '2xl:!w-11/12  2xl:!flex-[0_0_auto]',
      '12': '2xl:!w-full 2xl:!flex-[0_0_auto]',
    },
  }

  if (typeof cols === 'number') return colsMap[prefix][cols as unknown as keyof typeof colsMap.xs]

  const colClasses = []
  if (cols.span) {
    if (typeof cols.span === 'boolean') {
      colClasses.push(`${_prefix}flex-1 ${_prefix}:w-auto w-full`)
    } else {
      const colName = cols === totalCols ? 'full' : `${cols.span}/${totalCols}`
      colClasses.push(`${_prefix}w-${colName} w-full ${_prefix}flex-[0_0_auto]`)
    }
  }
  if (cols.order) {
    colClasses.push(`${_prefix}order-${cols.order}`)
  }
}

const Col = <T extends React.ElementType = 'div'>({
  lg,
  md,
  sm,
  xl,
  xs,
  xxl,
  as,
  className,
  children,
  ...rest
}: Icolprops<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Icolprops<T>>) => {
  const Comp = as || 'div'
  let colClasses = []
  if (lg) {
    colClasses.push(getColClasses('lg', lg))
  }
  if (md) {
    colClasses.push(getColClasses('md', md))
  }
  if (sm) {
    colClasses.push(getColClasses('sm', sm))
  }
  if (xl) {
    colClasses.push(getColClasses('xl', xl))
  }
  if (xs) {
    colClasses.push(getColClasses('xs', xs))
  }
  if (xxl) {
    colClasses.push(getColClasses('xxl', xxl))
  }
  if (!md && !sm && !lg && !xs && !xl && !xxl) {
    colClasses.push('flex-[1_0_0]')
  }

  const classes = cn(colClasses.join(' '), 'col-gap', className)
  return (
    <Comp className={classes} {...rest}>
      {children}
    </Comp>
  )
}

export { Col, type ColType, type Icolprops }
