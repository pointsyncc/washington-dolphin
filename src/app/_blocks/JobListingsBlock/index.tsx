import React from 'react'

import JobListingCard from '@/components/JobListingCard'
import { LinkWithIcon } from '@/components/navigation/LinkWithIcon'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { MdArrowOutward } from 'react-icons/md'
import { ContactForm } from 'src/app/components/contact/ContactFormNew'
import type { Form, JobListing, Page } from '../../../payload/payload-types'
import Search from '../../components/product/search'

type Props = Extract<Page['layout'][0], { blockType: 'jobListingsBlock' }>

export const JobListingsBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { jobListings, notificationEmails: form } = props

  return (
    <div className="py-10 px-4">
      <div className="space-y-4">
        <p className="text-center">Prelistaj naše oglase i pronađi savršeni posao za sebe.</p>
        <Search placeholder="Pretraži poslove..." disabled={jobListings.length === 0} />
      </div>
      <div className="max-w-[1200px] m-auto px-4 mt-6">
        <main className="mt-6 gap-2 lg:gap-6 flex-wrap lg:mt-12 flex justify-center items-center">
          {jobListings.length > 2 ? (
            jobListings.map((job, index) => {
              const { title, shortDescription, salary, id, createdAt, deadline } = job as JobListing
              return (
                <JobListingCard
                  title={title}
                  shortDescription={shortDescription}
                  key={index}
                  href={id}
                  publishedAt={createdAt}
                  deadline={deadline}
                  salary={salary}
                />
              )
            })
          ) : (
            <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-stretch">
              <div className="flex flex-col gap-8 lg:gap-3 items-center lg:items-start justify-center lg:justify-between max-w-[550px] mb-0">
                <div className="space-y-2">
                  <p className="text-4xl font-bold">{':('}</p>
                  <p>
                    Nažalost trenutno nemamo niti jedan oglas za tebe. Možeš se pretplatit na
                    obavijesti ili nam poslati otvorenu molbu sa svojim podacima.
                  </p>
                </div>
                <LinkWithIcon
                  iconClassName="text-body-foreground"
                  className="flex items-center justify-end hover:text-body-foreground hover:underline"
                  href={'/kontakt'}
                  icon={MdArrowOutward}
                  iconPosition="append"
                >
                  Pošalji otvorenu molbu
                </LinkWithIcon>
              </div>
              <ContactForm
                formData={form as Form}
                contactFormPrepend={
                  <div className="mb-6 space-y-3">
                    <Heading className="text-secondary" level={4}>
                      Pretplati se na obavijesti
                    </Heading>
                    <Text className="text-white" level={4}>
                      Unesi svoju e-mail adresu i pretplati se na obavijesti kada novi oglas za
                      posao bude objavljen.
                    </Text>
                  </div>
                }
              />
            </div>
          )}
        </main>
        {jobListings.length > 0 && (
          <LinkWithIcon
            iconClassName="text-body-foreground"
            className="flex items-center justify-center lg:justify-end mt-6 lg:mt-4 hover:text-body-foreground hover:underline"
            href={'/kontakt'}
            icon={MdArrowOutward}
            iconPosition="append"
          >
            Pošalji otvorenu molbu
          </LinkWithIcon>
        )}
      </div>
    </div>
  )
}
