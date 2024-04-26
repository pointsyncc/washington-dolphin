import type { Block } from 'payload/types'
import link from '../fields/link'

export const HomeHero: Block = {
  slug: 'homeHero',
  labels: {
    singular: 'Home hero',
    plural: 'Home heros',
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
    link({
      appearances: false,
      overrides: {
        name: 'cta',
      },
    }),
    link({
      appearances: false,
      overrides: {
        name: 'galleryLink',
      },
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
