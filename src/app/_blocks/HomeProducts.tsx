import { Image } from '@/components/Media/Image'
import { Section } from '@/components/layout/Section'
import { LinkWithIcon } from '@/components/navigation/LinkWithIcon'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { cn } from '@/utils/classMerge'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export const HomeProducts = ({heading,description,products}:any) => {

  // const _products = [
  //   {
  //     name: 'Slastice',
  //     description: 'Ovdje ide opis slastice.',
  //     image: {
  //       url: '/product-1.jpg',
  //       // className: 'lg:max-w-[28.4375rem] !max-h-[40.625rem] lg:!max-h-[26.4375rem]',
  //       alt: 'product 1',
  //     },
  //   },
  //   {
  //     name: 'Peciva',
  //     description: 'Ovdje ide opis peciva.',

  //     image: {
  //       url: '/product-2.jpg',
  //       // className: 'lg:max-w-[28.4375rem] !max-h-[40.625rem] lg:!max-h-[26.4375rem]',
  //       alt: 'product 2',
  //     },
  //     justification: 'right',
  //     alignment: 'top-center',
  //   },
  //   {
  //     name: 'Kruhovi',
  //     description: 'Ovdje ide opis kruhova.',
  //     image: {
  //       url: '/product-3.jpg',
  //       className: 'lg:max-w-full',
  //       alt: 'product 3',
  //     },
  //     justification: 'center-left',
  //   },
  // ]
  return (
    <Section className="mt-0" containerProps={{ className: 'space-y-6 lg:space-y-0' }}>
      <div className="lg:max-w-max ml-auto mr-10 lg:space-y-5">
        <Heading level={2}>{heading}</Heading>
        <Text className="max-w-[35rem]" level={1}>
          {description}
        </Text>
      </div>
      <ul className="mb-6 space-y-6 lg:space-y-0">
        {products.map((product) => {
          const justification =
            product.justification === 'right'
              ? 'items-end text-right '
              : product.justification === 'center-left'
                ? 'mx-auto lg:max-w-max lg:-translate-x-[12%]'
                : ''
          const imgContainerClass =
            product.justification === 'right'
              ? 'flex justify-end'
              : product.justification === 'center-left'
                ? 'flex justify-center '
                : ''
          const alignment = product.alignment === 'top-center' ? 'lg:!-mt-[20%]' : ''
          return (
            <li
              className={cn('flex flex-col space-y-5', justification, alignment)}
              key={product.id}
            >
              <Image

                containerClassName={imgContainerClass}
                className={cn(
                  'lg:!w-[37.125rem] lg:max-w-[28.4375rem] !h-[26.4375rem] max-w-full object-cover',
                  product.image.className,
                )}
                src={product?.image?.url}
                alt={product?.image?.alt}
              />
              <div>
                <Heading level={3}>{product?.product?.title}</Heading>
                <Text>{product?.product?.description}</Text>
              </div>
            </li>
          )
        })}
      </ul>
      <LinkWithIcon
        href="/products"
        icon={MdArrowOutward}
        iconPosition="append"
        className="justify-end"
      >
        Pogledaj ostale proizvode
      </LinkWithIcon>
    </Section>
  )
}


