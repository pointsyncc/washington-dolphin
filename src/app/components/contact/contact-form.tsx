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
const validationSchema = object({
  name: string().required(),
  email: string().required(),
  subject: string().required(),
  message: string().required(),
})
export const ContactForm: React.FC = () => {
  const form = useForm({
    resolver: useYupValidationResolver(validationSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
      subject: '',
    },
  })
  const inputs = [
    {
      component: Input,
      name: 'name',
      placeholder: 'Vaše ime *',
      inputContainerClass: 'sm:basis-[48.5%] sm:max-w-[48.5%] basis-full max-w-full mb-[28px]',
    },
    {
      component: Input,
      type: 'email',
      name: 'email',
      placeholder: 'Vaša e-mail adresa *',
      inputContainerClass: 'sm:basis-[48.5%] sm:max-w-[48.5%] basis-full max-w-full mb-[28px]',
    },
    {
      component: Input,
      name: 'subject',
      placeholder: 'Predmet poruke *',
      inputContainerClass: 'basis-[100%] max-w-[100%] mb-[28px]',
    },
    {
      component: Textarea,
      name: 'message',
      placeholder: 'Vaša poruka *',
      inputContainerClass: 'basis-[100%] max-w-[100%]',
      inputClass: 'h-[200px]',
    },
  ]

  // const [formState, action] = useFormState(actions.createTopic, {
  //   errors: {},
  // })
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger()
    if (!valid) return
  }
  return (
    <div className=" xl:max-w-[500px] xl:basis-[500px] xl:mx-0 mx-auto w-full bg-primary pt-[42px] px-[30px] sm:px-[56px] rounded-[20px] pb-[29px] xl:mt-0 mt-[50px] ">
      <Form {...form}>
        <form action={onSubmit} className="space-y-8">
          <div className="flex flex-wrap justify-between gap-2">
            {inputs.map((input, i) => (
              <FormField
                control={form.control}
                key={input.name}
                name={input.name as any}
                render={({ field }) => (
                  <FormItem className={`${input.inputContainerClass} relative`}>
                    <FormControl>
                      <input.component
                        className={`${input.name !== 'message' && 'h-[60px]'} pl-[24px] w-full`}
                        placeholder={input.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-danger" />
                  </FormItem>
                )}
              />
            ))}
          </div>

         <div className='flex justify-end pt-[10px] sm:pt-[20px]'>
         <button
            type="submit"
            className="rounded-[10px] lg:mx-0 text-[20px] font-[500] text-secondary hover:text-white transition-all flex items-center justify-end"
          >
            <span>Pošalji poruku</span>
            <MdArrowOutward className="ml-[10px]" />
          </button>
         </div>
        </form>
      </Form>
    </div>
  )
}
