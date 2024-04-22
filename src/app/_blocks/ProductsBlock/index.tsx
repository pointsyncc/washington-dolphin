'use client'
import { Category, Product as ProductType } from '@/payload/payload-types'
import { useSearchParams } from 'next/navigation'
import React, { Fragment, Suspense, useEffect, useState } from 'react'
import type { Page } from '../../../payload/payload-types'
import CategoriesSection from '../../components/product/categories'
import Product from '../../components/product/product'
import Search from '../../components/product/search'
import { Section } from '@/components/layout/Section'
import axios from 'axios'
import { Loader } from '@/components/feedback/Loader'
import qs from 'qs'
type Props = Extract<Page['layout'][0], { blockType: 'productsBlock' }> & {
  id?: string
}

export const ProductsBlock: React.FC<Props> = props => {
  const { products, categories } = props
  const [tsProducts, setProducts] = useState<ProductType[]>(products as ProductType[])
  const [showLoader, setShowLoader] = useState(false)
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const title = searchParams.get('title')
  const filteredProducts = tsProducts.filter(product => {
    console.log(product)
    if (category) {
      const productCategory =
        typeof product?.categories?.[0] === 'string'
          ? product?.categories?.[0]
          : product?.categories?.[0]?.title
      return productCategory?.toLowerCase() === category?.toLowerCase()
    }
    return products
  }) as ProductType[]
  const searchHandler = async () => {
    const query:Record<string,any> = {
      and: [
        {
          title: {
            like: title,
          },
        },
      ],
    }
    if (category) {
      query.and.push({
        'categories.title': {
          contains: category,
        },
      })
    }
    const queryString = qs.stringify(
      { where: query },
      {
        addQueryPrefix: true,
      },
    )
    try {
      setShowLoader(true)
      const response = await axios.get(`/api/products${queryString}`)
      setProducts(response.data.docs as ProductType[])

      //set the search query in the url
    } catch (error) {
      console.error(error)
    } finally {
      setShowLoader(false)
    }
  }
  useEffect(() => {
    if (title || category) {
      searchHandler()
    } else {
      setProducts(products as ProductType[])
    }
  }, [title, category])

  // useEffect(() => {
  //   if (category) {
  //     searchHandler()
  //   }
  // }, [category])

  return (
    <Section className="py-0">
      <Suspense>
        <div className="flex lg:flex-row flex-col items-center justify-between   w-full">
          {categories && <CategoriesSection categories={categories as Category[]} />}

          <Search />
        </div>
        {showLoader ? (
          <Loader variant="primary" className="mt-[20px] lg:mt-[80px] mx-auto h-12 w-12" />
        ) : (
          <div className="flex justify-center flex-wrap pt-[20px] lg:pt-[80px]">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, i) => (
                <Product
                  title={product.title}
                  description={product.description}
                  energy={product.price}
                  weight={product.weight}
                  key={product.title + i}
                />
              ))
            ) : (
              <h6 className="text-center">Niti jedan proizvod nije pronađen.</h6>
            )}
          </div>
        )}
      </Suspense>
    </Section>
  )
}
