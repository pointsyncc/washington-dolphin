import type { Block } from 'payload/types'

export const History: Block = {
  slug: 'history',
  labels: {
    singular: 'History',
    plural: 'histories',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          label: {
            en: 'Slika',
            hr: 'Slika',
          },
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageSize',
          label: {
            en: 'Slika size',
            hr: 'Slika size',
          },
          type: 'radio',
          defaultValue: 'small',
          options: [
            {
              label: 'small',
              value: 'small',
            },
            {
              label: 'large',
              value: 'large',
            },
          ],
        },
      ],
    },
  ],
}
