import { useMutation } from '@tanstack/react-query';
import { sendLead } from '../api/send-lead';

export function useSendLead() {
  return useMutation({
    mutationKey: ['lead', 'send'],
    mutationFn: sendLead
  })
}
