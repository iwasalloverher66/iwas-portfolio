import type { LeadPayload } from '@/shared/types'
import { z } from 'zod'

export const LEAD_MESSAGES: Record<keyof LeadPayload, string> = {
  name: 'Name must be at least 2 characters',
  email: 'Enter a valid email',
  projectDescription: 'Tell me a bit more — at least 10 characters'
}

export const leadSchema = z.object({
  name: z.string().trim().min(2, LEAD_MESSAGES.name),
  email: z.string().trim().pipe(z.email(LEAD_MESSAGES.email)),
  projectDescription: z.string().trim().min(10, LEAD_MESSAGES.projectDescription)
}) satisfies z.ZodType<LeadPayload>

export type LeadFormValues = z.input<typeof leadSchema>
