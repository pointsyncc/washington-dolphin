import type { Block } from 'payload/types'

export const HomeProducts: Block = {
  slug: 'homeProducts',
  labels: {
    singular: 'Home Product',
    plural: 'Home Products',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'products',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'justification',
          type: 'radio',
          defaultValue: 'left',
          options: [
            {
              label: 'Left',
              value: 'left',
            },
            {
              label: 'Center left',
              value: 'center-left',
            },
            {
              label: 'Right',
              value: 'right',
            },
          ],
        },
        {
          name: 'alignment',
          type: 'radio',
          defaultValue: 'top',
          options: [
            {
              label: 'top',
              value: 'top',
            },
            {
              label: 'Top center',
              value: 'top-center',
            },
          ],
        },
        {
          name: 'product',
          label: {
            en: 'Product',
            hr: 'Proizvodi',
          },
          type: 'relationship',
          relationTo: 'products',
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
      ],
    },
  ],
}
