import { Page } from '@/payload/payload-types'

export const productsPage: Omit<Page, 'id' | 'createdAt' | 'updatedAt' | 'publishedAt'> = {
  title: 'Proizvodi',
  featuredImage: '{{FEATURED_IMAGE_ID}}',
  layout: [
    {
      products: [
        {
          id: '{{PRODUCT_ID}}',
          title: 'Burek sa sirom',
          description: 'Ovo je opis proizvoda.',
          categories: ['{{CATEGORY_ID}}'],
          price: 2,
          weight: 60,
          _status: 'published',
          createdAt: '2024-04-22T12:21:13.952Z',
          updatedAt: '2024-04-22T12:21:13.952Z',
        },
      ],
      categories: [
        {
          id: '{{CATEGORY_ID}}',
          title: 'Burek',
          breadcrumbs: [
            {
              doc: '{{CATEGORY_ID}}',
              label: 'Burek',
            },
          ],
          createdAt: '2024-04-22T12:21:13.953Z',
          updatedAt: '2024-04-22T12:21:14.016Z',
        },
      ],
      blockType: 'productsBlock',
    },
  ],
  slug: 'proizvodi',
  meta: {},
  _status: 'published',
}
