import type { ContactLink } from '@/shared/types';

// Contacts with an empty href are not rendered
export const CONTACTS: ContactLink[] = [
  {
    label: 'GitHub',
    value: '@iwasalloverher66',
    href: 'https://github.com/iwasalloverher66'
  },
  {
    label: 'Email',
    value: '',
    href: ''
  },
  {
    label: 'Telegram',
    value: '',
    href: ''
  }
]
