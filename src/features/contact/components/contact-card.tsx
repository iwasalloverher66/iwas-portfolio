import type { ContactLink } from '@/shared/types';

interface ContactCardProps {
  contact: ContactLink
}

export default function ContactCard({ contact }: ContactCardProps) {
  const isExternal = contact.href.startsWith('http')

  return (
    <li>
      <a
        href={contact.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        className='group flex items-center justify-between gap-4 rounded-xl border border-(--border) bg-(--bg) p-5 transition-colors hover:border-(--accent-border)'
      >
        <span className='flex flex-col gap-1'>
          <span className='text-sm'>{contact.label}</span>
          <span className='font-medium break-all text-(--text-h)'>{contact.value}</span>
        </span>
        <span
          aria-hidden
          className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--accent)'
        >
          ↗
        </span>
      </a>
    </li>
  )
}
