import type { Block } from 'payload/types'

export const ProductsBlock: Block = {
  slug: 'productsBlock',
  labels: {
    singular: {
        en: 'Products Block',
        hr: 'Blok proizvoda',
    },
    plural: {
        en: 'Products Blocks',
        hr: 'Blokovi proizvoda',
    }
  },
  fields: [
    {
        name: 'products',
        label: {
            en: 'Products',
            hr: 'Proizvodi',
        },
        type: 'relationship',
        relationTo: 'products',
        hasMany: true,
        required: true,
    },
    {
        name: 'categories',
        label: {
            en: 'Categories',
            hr: 'Kategorije',
        },
        type: 'relationship',
        relationTo: 'categories',
        hasMany: true,
        required: true,
    }
  ],
}
