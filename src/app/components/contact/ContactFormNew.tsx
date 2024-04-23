'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { MdArrowOutward } from 'react-icons/md'
// import { useRouter, useSearchParams } from 'next/navigation'

import { object, string, type InferType } from 'yup'
// import { RenderParams } from '@/components/RenderParams'
import { Loader } from '@/components/feedback/Loader'
import { FormInput } from '@/components/form/controls/FormInput'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/form/form'
import { Text } from '@/components/typography/text/Text'
import { useYupValidationResolver } from '@/hooks/useYupValidationResolver'
import { useStatusMessage } from '@/payload/hooks/useStatusMessage'
import { type Form as PayloadForm } from '@/payload/payload-types'
import { cn } from '@/utils/classMerge'
import { payloadService } from 'src/app/_services/payload.service'
const validationSchema = object({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required(),
})

type FormData = Required<InferType<typeof validationSchema>>
type TContactProps = {
  formData: any
  contactFormPrepend?: React.ReactNode
}

export const ContactForm = ({ formData: data, contactFormPrepend }: TContactProps) => {
  const form = useForm({
    resolver: useYupValidationResolver(validationSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
      subject: '',
    },
  })
  const { status, message, setStatus, setMessage, handleAction } = useStatusMessage()
  const onSubmit = async (formData: FormData) => {

    const dataToSend = Object.entries(formData).map(([name, value]) => ({
      field: name,
      value,
    }))


    handleAction(
      payloadService(`/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ submissionData:dataToSend, form: data.id }),
      }),
      {
        message: data?.confirmationMessage?.[0]?.children?.[0]?.text,
      },
    )
    // const valid = await form.trigger()
    // if (!valid) return
  }

  if (!data) return null
  return (
    <div className=" xl:max-w-[616px] xl:basis-[616px] xl:mx-0 mx-auto w-full bg-primary pt-[42px] px-[20px] sm:px-[56px] rounded-[20px] pb-[20px]  ">
      {Boolean(message) &&  <Text level={1} weight='medium' className={cn(message.type === 'danger' ? 'text-danger' : 'text-success')}>{message?.data}</Text>}
      {Boolean(contactFormPrepend) ? contactFormPrepend : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-wrap justify-between gap-2 gap-y-4">
            {data?.fields?.map((input, i) => {
              const width =
                input.width <= 50
                  ? 'basis-[100%] max-w-[100%] sm:basis-[48.5%] sm:max-w-[48.5%]'
                  : 'basis-[100%] max-w-[100%]'

              return (
                <FormField
                  control={form.control}
                  key={input.name}
                  name={input.name as any}
                  render={({ field }) => (
                    <FormItem className={`${width} relative`}>
                      <FormControl>
                        <FormInput
                        className='p-5 lg:p-6'
                          blockType={input.blockType}
                          placeholder={input.label}
                          {...field}
                        />
                        {/* <input.component
                          className={`${input.name !== 'message' && 'h-[60px]'} pl-[24px] w-full`}
                          placeholder={input.placeholder}
                          {...field}
                        /> */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-[10px] lg:mx-0 text-[15px] font-[500] text-secondary hover:text-white transition-all flex items-center justify-end"
            >
              {status === 'pending' ? (
                <Loader variant='secondary' />
              ) : (
                <>
                  <span>Pošalji poruku</span>
                  <MdArrowOutward className="ml-[10px]" />
                </>
              )}
            </button>
          </div>
        </form>
      </Form>
    </div>
  )
}
