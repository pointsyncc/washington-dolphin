import type { CollectionConfig } from 'payload/types'
import { stringSimilarity } from 'string-similarity-js'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { equal } from 'assert'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: {
      en: 'Product',
      hr: 'Proizvod',
    },
    plural: {
      en: 'Products',
      hr: 'Proizvodi',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {},
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  endpoints: [
    {
      path: '/search',
      method: 'get',
      handler: async (req, res, next) => {
        const { title } = req.query
        const searchTitle = title as string
        const products = await req.payload.find({
          collection: 'products',
          where: {
            title: { like: searchTitle.toLowerCase() },
          },
        })
        //console.log(products)
        const searchResults = products.docs.filter(product => {
          return (
            stringSimilarity(searchTitle, product.title) > 0.4 ||
            product.title.toLowerCase().startsWith(searchTitle.toLowerCase())
          )
        })
        //return res.send(searchResults)
        return res.send(products)
      },
    },
  ],
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        hr: 'Naziv',
      },
      admin: {
        placeholder: {
          en: 'Enter the product title here',
          hr: 'Ovdje unesite naziv proizvoda',
        },
      },
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        hr: 'Opis',
      },
      admin: {
        placeholder: {
          en: 'Enter the product description here',
          hr: 'Ovdje unesite opis proizvoda',
        },
      },
      type: 'text',
      required: false,
    },
    {
      name: 'categories',
      label: {
        en: 'Category',
        hr: 'Kategorija',
      },
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'price',
      label: {
        en: 'Price',
        hr: 'Cijena',
      },
      type: 'number',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'weight',
      label: {
        en: 'Weight',
        hr: 'Gramaža',
      },
      type: 'number',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
