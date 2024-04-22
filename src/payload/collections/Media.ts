import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      en: 'Media',
      hr: 'Medij',
    },
    plural: {
      en: 'Media',
      hr: 'Mediji',
    }
  },
  upload: {
    staticURL: '/media',
    staticDir: path.resolve(__dirname, '../../../media'),
    formatOptions: {
      format: 'webp',
      options: {
        quality: 50,
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
/*     {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    }, */
  ],
}
