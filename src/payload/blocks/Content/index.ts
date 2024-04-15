import type { Block } from 'payload/types'

import richText from '../../fields/richText'

/* const columnFields: Field[] = [
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
] */

export const Content: Block = {
  slug: 'content',
  fields: [
    richText(),
  ],
}
