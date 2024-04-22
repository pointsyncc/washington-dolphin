import type { Block } from 'payload/types'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'heros',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
  ],
}
