import { Header } from '../payload-types'

//omit createdAt and updatedAt from logo Media type
export const header: Omit<Header, 'id' | 'createdAt' | 'updatedAt'> = {
  logo: '{{LOGO_ID}}',
  navItems: [
    {
      link: {
        type: 'custom',
        url: '/',
        label: 'Početna',
      },
    },

    {
      link: {
        type: 'custom',
        url: '/#o-nama',
        label: 'O nama',
      },
    },

    {
      link: {
        type: 'custom',
        url: '/proizvodi',
        label: 'Proizvodi',
      },
    },

    {
      link: {
        type: 'custom',
        url: '/kontakt',
        label: 'Kontakt',
      },
    },
  ],
}
