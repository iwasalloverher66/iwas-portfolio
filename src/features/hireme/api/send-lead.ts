import { ApiConfig } from '@/shared/config';
import type { LeadPayload, LeadResponse } from '@/shared/types';

export async function sendLead(payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch(ApiConfig.CONTACT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  return response.json()
}
