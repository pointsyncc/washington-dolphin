import { Category, Product as ProductType } from '@/payload/payload-types'
import { Suspense } from 'react'
import { fetchDocs } from 'src/app/_api/fetchDocs'
import HeroSection from '../../components/common/hero-section'
import CategoriesSection from '../../components/product/categories'
import Product from '../../components/product/product'
import Search from '../../components/product/search'

const Products = async ({searchParams: { category }}: {searchParams: { category: string }}) => {


  const products: ProductType[] = await fetchDocs('products')
  const filteredProducts = products.filter(product => {
    const productCategory = typeof product.categories[0] === 'string' ? product.categories[0] : product.categories[0].title
    return productCategory.toLowerCase() === category.toLowerCase()
  })
  console.log(filteredProducts)
  const categories: Category[] = await fetchDocs('categories')
  // category search param from url
  console.log(category)
  return (
    <>
      <HeroSection pageTitle="Naši proizvodi" pageName="product" />
      <Suspense>
      <div className="flex lg:flex-row flex-col items-center justify-between md:px-[35px] mt-[60px] w-full">
        <CategoriesSection categories={categories} />
       
          <Search />
        
      </div>
      <div className="flex justify-center flex-wrap pt-[20px] lg:pt-[80px]">
        {filteredProducts.map((product, i) => (
          <Product
            title={product.title}
            description={product.description}
            energy={product.price}
            weight={product.weight}
            key={product.title + i}
          />
        ))}
      </div>
      </Suspense>
    </>
  )
}

export default Products
