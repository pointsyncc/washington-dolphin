import RichText from '@/components/RichText'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Form, JobListing } from '@/payload/payload-types'
import { FaLocationDot } from 'react-icons/fa6'
import { ContactForm } from 'src/app/components/contact/ContactFormNew'

interface PageClientProps {
  job: JobListing
}

export default function PageClient({ job }: PageClientProps): JSX.Element {
  const formatDate = (date: string) => {
    const _date = new Date(date)
    return _date.toLocaleDateString('hr-HR')
  }
  return (
    <main className="max-w-[1200px] m-auto mt-28 lg:mt-36 px-4">
      <div className="mb-6">
        <div className="flex w-full justify-between">
          <p className="opacity-70 !text-[13px] block lg:hidden">Objavljeno: {formatDate(job.createdAt)}</p>
          <p className="opacity-70 hidden lg:block">Objavljeno: {formatDate(job.createdAt)}</p>
          <p className="!text-[13px] block lg:hidden rounded-md underline">
              {job.deadline !== null
                ? 'Prijave traju do:' + formatDate(job.deadline)
                : 'Nema roka prijave'}
            </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-bold line-clamp-2 max-w-[700px]" title={job.title}>{job.title}</h1>
          <div className="hidden lg:flex flex-col items-start justify-center gap-2">
            <p className="text-md px-6 py-1 rounded-md underline">
              {job.deadline !== null
                ? 'Prijave traju do:' + formatDate(job.deadline)
                : 'Nema roka prijave'}
            </p>
          </div>
        </div>
        <p className="!text-[13px] flex items-center gap-2 my-4 opacity-95 lg:hidden">
          <FaLocationDot className="text-lg" />
          {job.location}
        </p>
        <p className="items-center gap-2 my-4 opacity-95 hidden lg:flex">
          <FaLocationDot className="text-lg" />
          {job.location}
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
          <div>
            <p className="font-bold text-lg mb-4">Opis oglasa:</p>
            <RichText content={job.description} className="mb-8 lg:mb-0" />
          </div>
          <ContactForm
            formData={job.form as Form}
            contactFormPrepend={
              <div className="mb-6 space-y-3">
                <Heading className="text-secondary" level={3}>
                  Ispuni prijavu
                </Heading>
                <Text className="text-white" level={3}>
                  Ispuni prijavu za posao i odgovoriti ćemo u najkraćem mogućem roku.
                </Text>
              </div>
            }
          />
        </div>
        {job.salary && (
          <div className="mt-10 flex">
            <p className="text-md font-medium bg-secondary px-6 py-1 rounded-md">
              Plaća: {job.salary} EUR
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
