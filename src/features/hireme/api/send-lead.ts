import { ApiConfig } from '@/shared/config'
import type { LeadPayload, LeadResponse } from '@/shared/types'
import { LeadRequestError } from './lead-request-error'

type LeadSuccess = Extract<LeadResponse, { success: true }>

export async function sendLead(payload: LeadPayload): Promise<LeadSuccess> {
  if (!ApiConfig.BASE_URL) {
    throw new Error('VITE_API_URL is not set — add it to .env and restart Vite')
  }

  const response = await fetch(ApiConfig.CONTACT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const isJson = response.headers.get('content-type')?.includes('application/json')

  if (!isJson) {
    throw new Error(`Unexpected ${response.status} response from ${ApiConfig.CONTACT} (not JSON)`)
  }

  const data: LeadResponse = await response.json()

  if (!data.success) {
    throw new LeadRequestError(data.error, data.issues)
  }

  return data
}
