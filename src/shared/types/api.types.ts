// Mirrors POST /api/contact in hireme-backend
export interface LeadPayload {
  name: string
  email: string
  projectDescription: string
}

export interface LeadIssue {
  field: string
  message: string
}

export type LeadResponse =
  { success: true; message: string } | { success: false; error: string; issues?: LeadIssue[] }
