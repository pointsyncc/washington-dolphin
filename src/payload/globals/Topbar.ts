import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'


const translationsOfDays = {
  monday: {
    en: 'Monday',
    hr: 'Ponedjeljak',
  },
  tuesday: {
    en: 'Tuesday',
    hr: 'Utorak',
  },
  wednesday: {
    en: 'Wednesday',
    hr: 'Srijeda',
  },
  thursday: {
    en: 'Thursday',
    hr: 'Četvrtak',
  },
  friday: {
    en: 'Friday',
    hr: 'Petak',
  },
  saturday: {
    en: 'Saturday',
    hr: 'Subota',
  },
  sunday: {
    en: 'Sunday',
    hr: 'Nedjelja',
  },
}



export const Topbar: GlobalConfig = {
  slug: 'topbar',
  label: {
      en: 'Topbar',
      hr: 'Gornja traka',
  },
  access: {
    read: () => true,
  },
  fields: [
    link({
      appearances: false,
      overrides: {
        name: 'location',
        label: {
          en: 'Location',
          hr: 'Lokacija',
        },
      },
    }),
    link({
      appearances: false,
      overrides: {
        name: 'email',
        label: {
          en: 'Email',
          hr: 'Email adresa',
        },
      },
    }),

    link({
      appearances: false,
      overrides: {
        name: 'phone',
        label: {
          en: 'Phone',
          hr: 'Broj telefona',
        },
      },
    }),
    {
      name: 'timmings',
      label: {
        en: 'Working hours',
        hr: 'Radno vrijeme',
      },
      type: 'group',
      fields: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(
        day => {
          return {
            name: day,
            label:{
                en: translationsOfDays[day].en,
                hr: translationsOfDays[day].hr,
            },
            type: 'group',
            fields: [
              {
                name: 'closed',
                label: {
                  en: 'Closed',
                  hr: 'Zatvoreno',
                },
                type: 'checkbox',
                defaultValue: false,
              },
              {
                name: 'openningTime',
                label: {
                  en: 'Openning time',
                  hr: 'Vrijeme otvaranja',
                },
                type: 'date',
                admin: {
                  condition: (data, siblingData, { user }) => {
                    if (siblingData.closed) {
                      return false
                    } else {
                      return true
                    }
                  },          
                  date: {
                    pickerAppearance: 'timeOnly',
                  },
                },
              },
              {
                name: 'closingTime',
                label: {
                  en: 'Closing time',
                  hr: 'Vrijeme zatvaranja',
                },
                type: 'date',
                admin: {
                  condition: (data, siblingData, { user }) => {
                    if (siblingData.closed) {
                      return false
                    } else {
                      return true
                    }
                  },          
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
