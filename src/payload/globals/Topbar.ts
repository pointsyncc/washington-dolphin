import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Topbar: GlobalConfig = {
  slug: 'topbar',
  access: {
    read: () => true,
  },
  fields: [
    link({
      appearances: false,
      overrides: {
        name: 'location',
      },
    }),
    link({
      appearances: false,
      overrides: {
        name: 'email',
      },
    }),

    link({
      appearances: false,
      overrides: {
        name: 'phone',
      },
    }),
    {
      name: 'timmings',
      type: 'group',
      fields: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(
        day => {
          return {
            name: day,
            label:{
                en:day,
                hr:day
            },
            type: 'group',
            fields: [
              {
                name: 'closed',
                type: 'checkbox',
                defaultValue: day === 'sunday' ? true : false,
              },
              {
                name: 'openningTime',
                type: 'date',
                required: true,
                admin: {
                  date: {
                    pickerAppearance: 'timeOnly',
                  },
                },
              },
              {
                name: 'closingTime',
                type: 'date',
                required: true,
                admin: {
                  date: {
                    pickerAppearance: 'timeOnly',
                  },
                },
              },
            ],
          }
        },
      ),
    },
  ],
}
