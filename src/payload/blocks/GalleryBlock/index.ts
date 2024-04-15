import type { Block } from 'payload/types'

export const GalleryBlock: Block = {
  slug: 'galleryBlock',
  labels: {
    singular: {
        en: 'Gallery Block',
        hr: 'Galerijski Blok',
    },
    plural: {
        en: 'Gallery Blocks',
        hr: 'Galerijski Blokovi',
    }
  },
  fields: [
    {
      name: 'images',
      label: {
        en: 'Images',
        hr: 'Slike',
      },
      type: 'array',
      minRows: 1,
      fields: [
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
          name: 'caption',
          type: 'text',
          label: {
            en: 'Caption',
            hr: 'Naslov',
          },
        },
      ],
    },
  ],
}
