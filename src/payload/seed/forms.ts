import { Form } from '../payload-types'

export const forms: Omit<Form, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Contact form',
    fields: [
      {
        name: 'name',
        label: 'Ime i prezime',
        width: 50,
        required: true,
        blockType: 'text',
      },

      {
        name: 'email',
        label: 'E-mail adresa',
        width: 50,
        required: true,
        blockType: 'email',
      },

      {
        name: 'subject',
        label: 'Predmet',
        width: 100,
        required: true,
        blockType: 'text',
      },

      {
        name: 'message',
        label: 'Poruka',
        width: 100,
        blockType: 'textarea',
      },
    ],
    submitButtonLabel: 'Pošalji poruku',
    confirmationType: 'message',

    confirmationMessage: [
      {
        children: [
          {
            text: 'Tvoja poruka je uspešno poslana!',
          },
        ],
      },
    ],

    redirect: {
      type: 'reference',
    },

    emails: [
      {
        emailTo: 'kristijan.vidovic@pointsyncc.com',
        replyTo: 'pekarna.mario@gmail.com',
        emailFrom: 'info@pekarnamario.hr',
        subject: 'WEB - Nova poruka od {{name}}',
        message: [
          {
            children: [
              {
                text: 'Ime i prezime: {{name}}',
              },
            ],
          },
          {
            children: [
              {
                text: 'E-mail adresa: {{email}}',
              },
            ],
          },
          {
            children: [
              {
                text: 'Predmet poruke: {{subject}}',
              },
            ],
          },
          {
            children: [
              {
                text: 'Poruka:',
              },
            ],
          },
          {
            children: [
              {
                text: '{{message}}',
              },
            ],
          },
        ],
      },
      {
        emailTo: '{{email}}',
        replyTo: 'pekarna.mario@gmail.com',
        emailFrom: 'info@pekarnamario.hr',
        subject: 'Uspješno smo zaprimili Vašu poruku ',
        message: [
          {
            children: [
              {
                text: 'Poštovani,',
              },
            ],
          },
          {
            children: [
              {
                text: 'Uspješno smo zaprimili Vašu poruku na web stranici "',
              },
              {
                children: [
                  {
                    text: 'Pekarna Mario',
                  },
                ],
                linkType: 'custom',
                newTab: true,
                type: 'link',
                url: 'https://pekarnamario.hr',
              },
              {
                text: '" te ćemo Vam odgovoriti u najkraćem mogućem roku.',
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
                text: '',
              },
            ],
          },
          {
            children: [
              {
                text: '--------------------------------------------',
              },
            ],
          },
          {
            children: [
              {
                text: 'Ovo je automatski generirana poruka, molimo Vas da ne odgovarate na nju.',
              },
            ],
          },
        ],
      },
    ],
  },
]
