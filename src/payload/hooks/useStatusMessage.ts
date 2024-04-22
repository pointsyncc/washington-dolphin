import { useState } from 'react'

export const useStatusMessage = () => {
  const [message, setMessage] = useState<{
    type: 'success' | 'danger'
    data: string
  } | null>(null)
  const [status, setStatus] = useState<'idle' | 'pending' | 'failure' | 'success'>('idle')

  const handleAction = async (action: Promise<any>, config?:{ message?: string }) => {
    try {
      await action

      return setMessage({
        type: 'success',
        data: config?.message ?? 'Form Submitted',
      })

      //   setMessage({
      //     type: 'danger',
      //     data: res?.errors?.[0]?.message || 'Internal Server Error',
      //   })
    } catch (error) {
      setStatus('failure')
      setMessage({
        type: 'danger',
        data: error?.errors?.[0]?.message || 'Something went wrong.',
      })
    } finally {
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
      //   setMessage({
      //     type: 'danger',
      //     data: 'Something went wrong.',
      //   })
    }
  }

  return {
    message,
    setMessage,
    status,
    setStatus,
    handleAction
  }
}
