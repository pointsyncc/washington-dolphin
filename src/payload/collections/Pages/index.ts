import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Content } from '../../blocks/Content'
import { FormBlock } from '../../blocks/Form'
import { GalleryBlock } from '../../blocks/GalleryBlock'
import { slugField } from '../../fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidatePage } from './hooks/revalidatePage'
import { ProductsBlock } from '../../blocks/ProductsBlock'
import { Hero } from '../../blocks/Hero'
import { History } from '../../blocks/History'
import { HomeProducts } from '../../blocks/HomeProducts'
import { HomeContact } from '../../blocks/HomeContact'
import { HomeHero } from '../../blocks/HomeHero'
import { Contact } from '../../blocks/Contact'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: {
      en: 'Page',
      hr: 'Stranica',
    },
    plural: {
      en: 'Pages',
      hr: 'Stranice',
    }
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, documentInfo, locale }) => {
        return `http://localhost:3000/api/preview?url=${encodeURIComponent(
          `http://localhost:3000/${data.slug}`,
        )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
      },
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
/*     afterRead: [populateArchiveBlock], */
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        hr: 'Naslov',
      },
      required: true,
    },
   {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    }, 
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Featured Image',
        hr: 'Naslovna slika',
      },
      required: false,
    },
   /*  {
      name: 'showWorkingSundays',
      type: 'checkbox',
      label: {
        en: 'Show working Sundays',
        hr: 'Prikaži radne nedjelje',
      },
      admin: {
        position: 'sidebar',
      },
      required: true,
    }, */
  {
      type: 'tabs',
      tabs: [
  /*       {
          label: 'Hero',
          fields: [hero],
        }, */
        {
          label: {
            en: 'Content',
            hr: 'Sadržaj',
          },
          fields: [
            {
              name: 'layout',
              label: {
                en: 'Layout',
                hr: 'Raspored',
              },
              type: 'blocks',
              required: false,
              blocks: [Content, FormBlock, GalleryBlock, ProductsBlock,Hero,History,HomeProducts,HomeContact,HomeHero,Contact],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
