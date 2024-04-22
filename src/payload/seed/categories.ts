import { Category } from '../payload-types'

export const categories: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Burek',
    breadcrumbs: [
      {
        doc: '66263df4ee0aec800de9f6ed',
        label: 'Burek',
        id: '66263df48cbc069a68428a92',
      },
    ],
  },
]
