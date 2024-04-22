'use client'

import React from 'react'

import { Input, InputProps } from './TextInput'
import { Textarea, TextareaProps } from './TextArea'

export type TFormControl = {
  blockType:
    | 'number'
    | 'checkbox'
    | 'country'
    | 'email'
    | 'message'
    | 'select'
    | 'state'
    | 'text'
    | 'textarea'
} & (InputProps | TextareaProps)

export const FormInput = ({ blockType, ...rest }: TFormControl) => {
  switch (blockType) {
    case 'text':
      return <Input {...(rest as InputProps)} />
    case 'textarea':
      return <Textarea {...(rest as TextareaProps)} />

    default:
      return <Input {...(rest as InputProps)} />
  }
}

