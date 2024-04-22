import React from 'react'
import { ContactForm } from './contact-form'
import qs from 'qs'
import { payloadService } from 'src/app/_services/payload.service'
export const Contact = async () => {
  const query = qs.stringify(
    {
      where: {
        title: {
          // property name to filter on
          equals: 'contact', // operator to use and value to compare against
        },
      },
      limit: 1,
      locale: 'hr',
      draft: false,
      depth: 1,
    },
    { addQueryPrefix: true },
  )
  const data = await payloadService(`/forms${query}`)
  const contactFormData = data?.docs?.[0]
  return <ContactForm formData={contactFormData}/>
}
