'use client'
import { MdArrowOutward } from 'react-icons/md'
import React, { Fragment, useCallback, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
// import { useRouter, useSearchParams } from 'next/navigation'

import { type InferType, object, string } from 'yup'
// import { RenderParams } from '@/components/RenderParams'
import { useYupValidationResolver } from '@/hooks/useYupValidationResolver'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form/form'
import { Input } from '@/components/form/controls/TextInput'
import { Textarea } from '@/components/form/controls/TextArea'
import { FormInput } from '@/components/form/controls/FormInput'
import { type Form as PayloadForm } from '@/payload/payload-types'
import { useStatusMessage } from '@/payload/hooks/useStatusMessage'
import { payloadService } from 'src/app/_services/payload.service'
import { Loader } from '@/components/feedback/Loader'
import { Text } from '@/components/typography/text/Text'
import { cn } from '@/utils/classMerge'
const validationSchema = object({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required(),
})

type FormData = Required<InferType<typeof validationSchema>>
type TContactProps = {
  formData: PayloadForm
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
  // const inputs = [
  //   {
  //     component: Input,
  //     name: 'name',
  //     placeholder: 'Vaše ime *',
  //     inputContainerClass: 'sm:basis-[48.5%] sm:max-w-[48.5%] basis-full max-w-full mb-[28px]',
  //   },
  //   {
  //     component: Input,
  //     type: 'email',
  //     name: 'email',
  //     placeholder: 'Vaša e-mail adresa *',
  //     inputContainerClass: 'sm:basis-[48.5%] sm:max-w-[48.5%] basis-full max-w-full mb-[28px]',
  //   },
  //   {
  //     component: Input,
  //     name: 'subject',
  //     placeholder: 'Predmet poruke *',
  //     inputContainerClass: 'basis-[100%] max-w-[100%] mb-[28px]',
  //   },
  //   {
  //     component: Textarea,
  //     name: 'message',
  //     placeholder: 'Vaša poruka *',
  //     inputContainerClass: 'basis-[100%] max-w-[100%]',
  //     inputClass: 'h-[200px]',
  //   },
  // ]

  // const [formState, action] = useFormState(actions.createTopic, {
  //   errors: {},
  // })
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
    <div className=" xl:max-w-[616px] xl:basis-[616px] xl:mx-0 mx-auto w-full bg-primary pt-[42px] px-[30px] sm:px-[56px] rounded-[20px] pb-[29px]  ">
      {Boolean(message) &&  <Text level={1} weight='medium' className={cn(message.type === 'danger' ? 'text-danger' : 'text-success')}>{message?.data}</Text>}
      {Boolean(contactFormPrepend) ? contactFormPrepend : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

          <div className="flex justify-end pt-[10px] sm:pt-[20px]">
            <button
              type="submit"
              className="rounded-[10px] lg:mx-0 text-[20px] font-[500] text-secondary hover:text-white transition-all flex items-center justify-end"
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
