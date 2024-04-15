import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: {
      en: 'Category',
      hr: 'Kategorija',
    },
    plural: {
      en: 'Categories',
      hr: 'Kategorije',
    },
    },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        hr: 'Naslov',
      },
      required: true,
      admin: {
        placeholder: {
          en: 'Enter the category title here',
          hr: 'Ovdje unesite naslov kategorije',
        }
      },
      type: 'text',
    },
  ],
}

export default Categories
