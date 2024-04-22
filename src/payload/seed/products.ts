import { Product } from '../payload-types'

export const Products: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Burek sa sirom',
    description: 'Ovo je opis proizvoda.',

    categories: ['6617a389b175630618ad7d12'],
    _status: 'published',
    price: 2,
    weight: 60,
  },
]
