'use client'
import RichText from '@/components/RichText'
import { Heading } from '@/components/typography/heading/Heading'
import { Text } from '@/components/typography/text/Text'
import { Form, JobListing } from '@/payload/payload-types'
import { FaLocationDot } from 'react-icons/fa6'
import { ContactForm } from 'src/app/components/contact/ContactFormNew'
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  ViberShareButton,
} from 'react-share'
import { EmailIcon, FacebookIcon, WhatsappIcon, ViberIcon } from 'react-share'
import { FaCopy } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
interface PageClientProps {
  job: JobListing
}

export default function PageClient({ job }: PageClientProps): JSX.Element {
  const formatDate = (date: string) => {
    const _date = new Date(date)
    return _date.toLocaleDateString('hr-HR')
  }

  //get current url using nextjs router
  const currentUrl = process.env.NEXT_PUBLIC_SERVER_URL + usePathname()

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl)
    alert('Link je kopiran u međuspremnik')
  }

  return (
    <main className="max-w-[1200px] m-auto mt-20 lg:mt-36 px-4">
      <div className="mb-0 lg:mb-6">
        <div className="flex w-full justify-between">
          <p className="opacity-70 !text-[12.5px] block lg:hidden">
            Objavljeno: {formatDate(job.createdAt)}
          </p>
          <p className="opacity-70 hidden lg:block">Objavljeno: {formatDate(job.createdAt)}</p>
          <p className="!text-[12.5px] block lg:hidden rounded-md underline">
            {job.deadline ? 'Prijave traju do: ' + formatDate(job.deadline) : 'Nema roka prijave'}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-bold line-clamp-2 text-wrap" title={job.title}>
            {job.title}
          </h1>
          <div className="hidden lg:flex flex-col items-start justify-center gap-2">
            <p className="text-md px-6 py-1 rounded-md underline">
              {job.deadline ? 'Prijave traju do: ' + formatDate(job.deadline) : 'Nema roka prijave'}
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
          <div className="mb-4">
            <p className="font-bold text-lg mb-4">Opis oglasa:</p>
            <RichText content={job.description} className="mb-8 lg:mb-0" />
            {job.salary && (
              <p className="flex max-w-fit lg:hidden !text-[12.5px] font-medium bg-secondary px-5 py-1 rounded-md ">
                Plaća: {job.salary} EUR
              </p>
            )}
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

        <div className="mt-10 flex justify-center lg:justify-between items-center">
          {job.salary && (
            <p className="hidden lg:block font-medium bg-secondary px-6 py-1 rounded-md">
              Plaća: {job.salary} EUR
            </p>
          )}
          <div className="hidden lg:flex items-center justify-center gap-4">
            <p className="">Podijeli sa drugima: </p>
            <button onClick={() => handleCopy()}>
              <FaCopy size={32} />
            </button>
            <EmailShareButton url={currentUrl} subject={job.title} body={job.shortDescription}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookShareButton url={currentUrl} hashtag="#pekarna-mario">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={currentUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <ViberShareButton url={currentUrl} title={job.title}>
              <ViberIcon size={32} round />
            </ViberShareButton>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center gap-4 pb-16 mt-6">
        <p className="!text-[12.5px]">Podijeli sa drugima: </p>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => handleCopy()}>
            <FaCopy size={26} />
          </button>
          <EmailShareButton url={currentUrl} subject={job.title} body={job.shortDescription}>
            <EmailIcon size={26} round />
          </EmailShareButton>
          <FacebookShareButton url={currentUrl} hashtag="#pekarna-mario">
            <FacebookIcon size={26} round />
          </FacebookShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon size={26} round />
          </WhatsappShareButton>
          <ViberShareButton url={currentUrl} title={job.title}>
            <ViberIcon size={26} round />
          </ViberShareButton>
        </div>
      </div>
    </main>
  )
}
