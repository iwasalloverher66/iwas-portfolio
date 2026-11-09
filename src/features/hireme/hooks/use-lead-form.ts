import type { LeadPayload } from '@/shared/types'
import { zodResolver } from '@/shared/utils'
import { useForm } from 'react-hook-form'
import { LeadRequestError } from '../api/lead-request-error'
import { LEAD_MESSAGES, leadSchema, type LeadFormValues } from '../schemas/lead.schema'
import { useSendLead } from './use-send-lead'

const NETWORK_ERROR = 'Could not reach the server. Please try again later.'
const SERVER_ERROR = 'Something went wrong. Please check the form and try again.'

const DEFAULT_VALUES: LeadFormValues = {
  name: '',
  email: '',
  projectDescription: ''
}

function isLeadField(field: string): field is keyof LeadPayload {
  return field in LEAD_MESSAGES
}

export function useLeadForm() {
  const form = useForm<LeadFormValues, unknown, LeadPayload>({
    resolver: zodResolver(leadSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onTouched'
  })

  const { mutate, isPending, isSuccess } = useSendLead()

  const handleError = (error: Error) => {
    if (!(error instanceof LeadRequestError)) {
      console.error('[hireme] Failed to send lead:', error)
      form.setError('root.server', { type: 'network', message: NETWORK_ERROR })
      return
    }

    // Backend messages are in Russian, so its issues are mapped onto our own field messages
    for (const issue of error.issues) {
      if (isLeadField(issue.field)) {
        form.setError(issue.field, { type: 'server', message: LEAD_MESSAGES[issue.field] })
      }
    }

    form.setError('root.server', { type: 'server', message: SERVER_ERROR })
  }

  const onSubmit = form.handleSubmit(payload => {
    form.clearErrors('root')
    mutate(payload, { onError: handleError })
  })

  return {
    register: form.register,
    onSubmit,
    errors: form.formState.errors,
    isSubmitting: isPending,
    isSuccess
  }
}
