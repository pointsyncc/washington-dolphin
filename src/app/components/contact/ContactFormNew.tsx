'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { MdArrowOutward } from 'react-icons/md'
import { object, string, type InferType } from 'yup'
import { Loader } from '@/components/feedback/Loader'
import { FormInput } from '@/components/form/controls/FormInput'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/form/form'
import { Text } from '@/components/typography/text/Text'
import { useYupValidationResolver } from '@/hooks/useYupValidationResolver'
import { useStatusMessage } from '@/payload/hooks/useStatusMessage'
import { cn } from '@/utils/classMerge'
import { payloadService } from 'src/app/_services/payload.service'

const validationSchema = object({
  name: string().required('Ovo polje je obavezno'),
  email: string().email().required('Ovo polje je obavezno'),
  subject: string().required('Ovo polje je obavezno'),
  message: string().required('Ovo polje je obavezno'),
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
        body: JSON.stringify({ submissionData: dataToSend, form: data.id }),
      }),
      {
        message: data?.confirmationMessage?.[0]?.children?.[0]?.text,
      },
    )
  }

  if (!data) return null
  return (
    <div className=" xl:max-w-[616px] xl:basis-[616px] xl:mx-0 mx-auto w-full bg-primary pt-[42px] px-[20px] sm:px-[56px] rounded-[20px] pb-[20px]  ">
      {Boolean(message) && (
        <Text
          level={1}
          weight="medium"
          className={cn(message.type === 'danger' ? 'text-danger' : 'text-success')}
        >
          {message?.data}
        </Text>
      )}
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
                          required={input.required}
                          className="p-5 lg:p-6"
                          blockType={input.blockType}
                          placeholder={input.label}
                          {...field}
                        />
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
                <Loader variant="secondary" />
              ) : (
                <>
                  <span>{data.submitButtonLabel ?? 'Pošalji poruku'}</span>
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
