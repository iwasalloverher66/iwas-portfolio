import type { LeadIssue } from '@/shared/types';

// Thrown when the backend answers with { success: false }, so the mutation ends up in the error state
export class LeadRequestError extends Error {
  issues: LeadIssue[]

  constructor(message: string, issues: LeadIssue[] = []) {
    super(message)
    this.name = 'LeadRequestError'
    this.issues = issues
  }
}
