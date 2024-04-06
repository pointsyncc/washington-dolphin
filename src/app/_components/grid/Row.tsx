import { cn } from '@/utils/classMerge'

export interface IRowProps<T extends React.ElementType> {
  as?: T
}

const Row = <T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: IRowProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof IRowProps<T>>) => {
  const Comp = as || 'div'
  return (
    <Comp
      className={cn(
        '[&>*]:w-full [&>*]:flex-shrink-0 [&>*]:max-w-full',
        'flex',
        'flex-wrap',
        'row-gap',
        className,
      )}
    >
      {children}
    </Comp>
  )
}

export { Row }
