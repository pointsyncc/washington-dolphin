'use client'
import { Category, Product as ProductType } from '@/payload/payload-types'
import { useSearchParams } from 'next/navigation'
import React, { Fragment, Suspense, useEffect, useState } from 'react'
import type { Page } from '../../../payload/payload-types'
import CategoriesSection from '../../components/product/categories'
import Product from '../../components/product/product'
import Search from '../../components/product/search'
import axios from 'axios'
import { Loader } from '@/components/feedback/Loader'

type Props = Extract<Page['layout'][0], { blockType: 'productsBlock' }> & {
  id?: string
}

export const ProductsBlock: React.FC<Props> = props => {
  const { products, categories } = props
  const [tsProducts, setProducts] = useState<ProductType[]>(products as ProductType[])
  const [showLoader, setShowLoader] = useState(true)
  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const title = searchParams.get('title')
  const filteredProducts = tsProducts.filter(product => {
    console.log(product)
    if (category) {
      const productCategory =
        typeof product.categories[0] === 'string'
          ? product.categories[0]
          : product.categories[0].title
      return productCategory.toLowerCase() === category.toLowerCase()
    }
    return products
  }) as ProductType[]
  const searchHandler = async () => {
    console.log('title-value', title)
    try {
      setShowLoader(true)
      const response = await axios.get(`/api/products/search?title=${title}`)
      setProducts(response.data.docs as ProductType[])

      //set the search query in the url
    } catch (error) {
      console.error(error)
    } finally {
      setShowLoader(false)
    }
  }
  useEffect(() => {
    if (title) {
      searchHandler()
    } else {
      setProducts(products as ProductType[])
    }
  }, [title])

  return (
    <Fragment>
      <Suspense>
        <div className="flex lg:flex-row flex-col items-center justify-between md:px-[35px] mt-[60px] w-full">
          {categories && <CategoriesSection categories={categories as Category[]} />}

          <Search />
        </div>
        {showLoader ? (
          <Loader variant="primary" />
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
    </Fragment>
  )
}
