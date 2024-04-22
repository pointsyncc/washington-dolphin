import { Page } from '@/payload/payload-types'

export const homepage: Omit<Page, 'id' | 'createdAt' | 'updatedAt' | 'publishedAt'> = {
  title: 'Home',
  featuredImage: {
    id: '66255eac066d4714729b3244',
    alt: 'Hero',
    prefix: 'web-media',
    filename: 'home-hero.webp',
    mimeType: 'image/webp',
    filesize: 893814,
    width: 5915,
    height: 3943,
    createdAt: '2024-04-21T18:45:00.504Z',
    updatedAt: '2024-04-21T18:45:00.504Z',
    url: 'http://localhost:3000/media/home-hero.webp',
  },
  layout: [
    {
      columns: [
        {
          heading: 'heading',

          description: [
            {
              children: [
                {
                  text: 'Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas kontaktirajte!',
                },
              ],
            },

            {
              children: [
                {
                  text: '',
                },
              ],
            },

            {
              children: [
                {
                  text: '\nImate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u vezi s nekim našim proizvodom ili proizvodnim procesom? \n',
                },
              ],
            },
          ],

          image: {
            id: '66255fd3f62cbfcd3a40704b',
            alt: 'history 1',
            prefix: 'web-media',
            filename: 'history-1.webp',
            mimeType: 'image/webp',
            filesize: 825040,
            width: 5429,
            height: 3619,
            createdAt: '2024-04-21T18:49:55.693Z',
            updatedAt: '2024-04-21T18:49:55.693Z',
            url: 'http://localhost:3000/media/history-1.webp',
          },
          imageSize: 'small',
          id: '6625603fd6584f23a0fc093e',
        },

        {
          heading: '',

          description: [
            {
              children: [
                {
                  text: 'Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u vezi s nekim našim proizvodom ili proizvodnim procesom? Želite nam se obratiti radi ostvarenja ili unaprijeđenja poslovne suradnje? Nemojte čekati, slobodno nas kontaktirajte!\n',
                },
              ],
            },
          ],

          image: {
            id: '66256023f62cbfcd3a407054',
            alt: 'History 2',
            prefix: 'web-media',
            filename: 'history-2.webp',
            mimeType: 'image/webp',
            filesize: 1055318,
            width: 5699,
            height: 3799,
            createdAt: '2024-04-21T18:51:15.147Z',
            updatedAt: '2024-04-21T18:51:15.147Z',
            url: 'http://localhost:3000/media/history-2.webp',
          },
          imageSize: 'large',
          id: '6625603fd6584f23a0fc093f',
        },
      ],
      id: '6625603fd6584f23a0fc093d',
      blockType: 'history',
    },

    {
      heading: 'Heading',
      description: 'Description',

      products: [
        {
          justification: 'left',
          alignment: 'top',

          product: {
            id: '6623eddedde743da44f34199',
            title: 'Product 1',
            description: 'product 1 dsescription',
            _status: 'published',
            createdAt: '2024-04-20T16:31:26.508Z',
            updatedAt: '2024-04-20T16:31:26.508Z',
          },

          image: {
            id: '66255fb8f62cbfcd3a407042',
            alt: 'Product 1',
            prefix: 'web-media',
            filename: 'product-1.webp',
            mimeType: 'image/webp',
            filesize: 342150,
            width: 5343,
            height: 3562,
            createdAt: '2024-04-21T18:49:28.474Z',
            updatedAt: '2024-04-21T18:49:28.474Z',
            url: 'http://localhost:3000/media/product-1.webp',
          },
          id: '66256f2bc0e5ff45ab07eae9',
        },

        {
          justification: 'right',
          alignment: 'top-center',

          product: {
            id: '6623ee7cdde743da44f34261',
            title: 'Product 2',
            description: 'Product 2 description',
            _status: 'published',
            createdAt: '2024-04-20T16:34:04.514Z',
            updatedAt: '2024-04-20T16:34:04.514Z',
          },

          image: {
            id: '66256e4ffaeb1ccc9c2f24d0',
            alt: 'Product 2',
            prefix: 'web-media',
            filename: 'product-2.webp',
            mimeType: 'image/webp',
            filesize: 439542,
            width: 6000,
            height: 4000,
            createdAt: '2024-04-21T19:51:43.876Z',
            updatedAt: '2024-04-21T19:51:43.876Z',
            url: 'http://localhost:3000/media/product-2.webp',
          },
          id: '66256f84c0e5ff45ab07eaea',
        },

        {
          justification: 'center-left',
          alignment: 'top',

          product: {
            id: '6623ee7cdde743da44f34261',
            title: 'Product 2',
            description: 'Product 2 description',
            _status: 'published',
            createdAt: '2024-04-20T16:34:04.514Z',
            updatedAt: '2024-04-20T16:34:04.514Z',
          },

          image: {
            id: '66256e91faeb1ccc9c2f24dc',
            alt: 'Product',
            prefix: 'web-media',
            filename: 'product-3.webp',
            mimeType: 'image/webp',
            filesize: 587444,
            width: 4000,
            height: 6000,
            createdAt: '2024-04-21T19:52:49.890Z',
            updatedAt: '2024-04-21T19:52:49.890Z',
            url: 'http://localhost:3000/media/product-3.webp',
          },
          id: '66256fa4c0e5ff45ab07eaeb',
        },
      ],
      id: '66256f25c0e5ff45ab07eae8',
      blockType: 'homeProducts',
    },

    {
      heading: 'Kontaktirajte nas',
      description:
        'Imate savjet ili prijedlog kojeg bi htjeli podijeliti s nama, želite postaviti pitanje u vezi s nekim našim proizvodom ili proizvodnim procesom?',

      background: {
        id: '66261e61897707e0f8aa6822',
        prefix: 'web-media',
        filename: 'bg-2.webp',
        mimeType: 'image/webp',
        filesize: 107910,
        width: 1468,
        height: 498,
        createdAt: '2024-04-22T08:22:57.415Z',
        updatedAt: '2024-04-22T08:22:57.415Z',
        url: 'http://localhost:3000/media/bg-2.webp',
      },

      contactForm: {
        id: '6625745e69541ce6fc138854',
        title: 'Contact',

        fields: [
          {
            name: 'name',
            label: 'Name',
            width: 50,
            required: true,
            id: '6625745edc8c4d5a84906847',
            blockType: 'text',
          },

          {
            name: 'email',
            label: 'Email',
            width: 50,
            required: true,
            id: '6625745edc8c4d5a84906848',
            blockType: 'email',
          },

          {
            name: 'subject',
            label: 'Subject',
            width: 100,
            required: true,
            id: '6625745edc8c4d5a84906849',
            blockType: 'text',
          },

          {
            name: 'message',
            label: 'Message',
            width: 100,
            id: '6625745edc8c4d5a8490684a',
            blockType: 'textarea',
          },
        ],
        submitButtonLabel: 'Submit',
        confirmationType: 'message',

        confirmationMessage: [
          {
            children: [
              {
                text: 'Success',
              },
            ],
          },
        ],

        redirect: {
          type: 'reference',
        },

        emails: [],
        createdAt: '2024-04-21T20:17:34.187Z',
        updatedAt: '2024-04-22T09:28:29.681Z',
      },
      id: '66261e55de89b7ec880f67e1',
      blockType: 'homeContact',
    },
  ],
  slug: 'home',

  meta: {},
  _status: 'published',
}
