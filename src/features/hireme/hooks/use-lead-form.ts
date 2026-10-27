import type { LeadIssue, LeadPayload } from '@/shared/types'
import { zodResolver } from '@/shared/utils'
import { useForm } from 'react-hook-form'
import { sendLead } from '../api/send-lead'
import { LEAD_MESSAGES, leadSchema, type LeadFormValues } from '../schemas/lead.schema'

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

  const applyServerIssues = (issues: LeadIssue[] = []) => {
    for (const issue of issues) {
      if (isLeadField(issue.field)) {
        form.setError(issue.field, { type: 'server', message: LEAD_MESSAGES[issue.field] })
      }
    }
  }

  const onSubmit = form.handleSubmit(async payload => {
    try {
      const response = await sendLead(payload)

      if (response.success) return

      applyServerIssues(response.issues)
      form.setError('root.server', { type: 'server', message: SERVER_ERROR })
    } catch {
      form.setError('root.server', { type: 'network', message: NETWORK_ERROR })
    }
  })

  const { errors, isSubmitting, isSubmitSuccessful } = form.formState

  return {
    register: form.register,
    onSubmit,
    errors,
    isSubmitting,
    isSuccess: isSubmitSuccessful && !errors.root
  }
}
