import { Image } from '@/components/Media/Image'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { cn } from '@/utils/classMerge'
import React from 'react'
import product from 'src/app/components/product/product'

const Products = () => {
  const products = [
    {
      name: 'Slastice',
      description: 'Ovdje ide opis slastice.',
      image: {
        url: '/product-1.jpg',
        className: 'max-w-[28.4375rem]',
        alt: 'product 1',
      },
    },
    {
      name: 'Peciva',
      description: 'Ovdje ide opis peciva.',

      image: {
        url: '/product-2.jpg',
        className: 'max-w-[28.4375rem]',
        alt: 'product 2',
      },
      justification: 'right',
      alignment:'top-center'
    },
    {
      name: 'Kruhovi',
      description: 'Ovdje ide opis kruhova.',
      image: {
        url: '/product-3.jpg',
        className: '!w-[37.125rem] !h-[26.4375rem] object-cover max-w-full',
        alt: 'product 3',
      },
      justification: 'center-left',
    },
  ]
  return (
    <Section className="mt-0">
      <div className="max-w-max ml-auto mr-10 space-y-5">
        <Heading level={2}>Nudimo široki izbor proizvoda</Heading>
        <Text className="max-w-[35rem]" level={1}>
          Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u
          vezi s nekim našim proizvodom ili proizvodnim procesom.
        </Text>
      </div>
      <ul>
        {products.map(product => {
            const justification = product.justification === 'right' ? 'items-end text-right ' : product.justification === 'center-left' ? 'mx-auto max-w-max -translate-x-[12%]' : ''
            const imgContainerClass = product.justification === 'right' ? 'flex justify-end' : product.justification === 'center-left' ? 'flex justify-center ' : ''
            const alignment = product.alignment === 'top-center' ? '-mt-[20%]' : ''
          return (
            <li className={cn('flex flex-col space-y-5', justification,alignment)} key={product.name}>
              <Image {...product.image} containerClassName={imgContainerClass} src={product?.image?.url} />
                <div>
                <Heading level={3}>{product.name}</Heading>
              <Text>{product.description}</Text>
                </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Products
