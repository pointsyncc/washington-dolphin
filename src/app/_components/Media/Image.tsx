import { cn } from '@/utils/classMerge'
import NextImage, { ImageProps } from 'next/image'

export interface IImageProps extends ImageProps {
  containerClassName?: string
  responsive?: boolean
}

export const Image = ({
  priority,
  responsive = true,
  className = '',
  containerClassName = '',
  ...rest
}: IImageProps) => {
  const containerClasses = cn('w-full relative', containerClassName)
  const imgClasses = cn('object-contain !w-full !relative h-[unset] rounded-sm', className)
  return responsive ? (
    <div className={containerClasses}>
      <NextImage className={imgClasses} fill  {...rest} />
    </div>
  ) : (
    <NextImage className={cn(className,'rounded-sm')} {...rest} />
  )
}
