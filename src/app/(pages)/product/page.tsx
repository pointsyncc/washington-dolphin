import React from 'react'
import HeroSection from '../../components/common/hero-section'
import CategoriesSection from '../../components/product/categories'
import Search from '../../components/product/search'
import Product from '../../components/product/product'

const Products = () => {
  const categories = [
    {
      name: 'Kruh',
      value: 'kruh',
    },
    {
      name: 'Peciva',
      value: 'peciva',
    },
    {
      name: 'Bureci',
      value: 'bureci',
    },
    {
      name: 'Pizze',
      value: 'pizze',
    },
    {
      name: 'Kolači',
      value: 'kolaci',
    },
  ]
  const products = [
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
    {
      title: 'Vinogradarski kruh',
      description: 'Ovdje ide opis proizvoda.',
      energy: '500g',
      weight: '350 kcal',
    },
  ]
  return (
    <>
      <HeroSection pageTitle="Naši proizvodi" pageName="product" />
      <div className="flex lg:flex-row flex-col items-center justify-between md:px-[35px]">
        <CategoriesSection categories={categories} />
        <Search />
      </div>
      <div className="flex justify-center flex-wrap pt-[80px]">
        {products.map((product, i) => (
          <Product
            title={product.title}
            description={product.description}
            energy={product.energy}
            weight={product.weight}
            key={product.title + i}
          />
        ))}
      </div>
    </>
  )
}

export default Products
