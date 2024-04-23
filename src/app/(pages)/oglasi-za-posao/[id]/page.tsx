import RichText from '@/components/RichText'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Form, JobListing } from '@/payload/payload-types'
import { FaLocationDot } from 'react-icons/fa6'
import { ContactForm } from 'src/app/components/contact/ContactFormNew'
import NotFound from '../../not-found'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { id } }) {
  let job: JobListing | null = null

  try {
    /* job = await fetchDoc({
      collection: 'job-listings',
      id: id,
    }) */
    job = await await fetch(`http://localhost:3000/api/job-listings/${id}`).then(res => res.json())
  } catch (error) {
    console.error(error)
  }
  if (!job) return NotFound()

  const croatianDate = new Date(job.createdAt).toLocaleDateString('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const croatianDeadlineDate = new Date(job.deadline).toLocaleDateString('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <main className="max-w-[1200px] m-auto mt-28 lg:mt-36 px-4">
      <div className="mb-6">
        <div className="flex items-center justify-start gap-2">
          <p className="opacity-70">Objavljeno: {croatianDate}</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-bold">{job.title}</h1>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-md px-6 py-1 rounded-md underline">
              Prijave traju do: {croatianDeadlineDate}
            </p>
          </div>
        </div>
        <p className="flex items-center gap-2 my-4 opacity-95">
          <FaLocationDot className="text-lg" />
          {job.location}
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <RichText content={job.description} className='mb-8 lg:mb-0' />
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
        <div className='mt-10 flex'>
          <p className='text-md font-medium bg-secondary px-6 py-1 rounded-md'>Plaća: {job.salary} EUR</p>
        </div>
        )}
      </div>
    </main>
  )
}
