import { CONTACTS } from '@/shared/data';
import ContactCard from './contact-card';

const AVAILABLE_CONTACTS = CONTACTS.filter(contact => contact.href !== '')

export default function ContactList() {
  return (
    <ul className='grid gap-4 sm:grid-cols-3'>
      {AVAILABLE_CONTACTS.map(contact => (
        <ContactCard key={contact.label} contact={contact} />
      ))}
    </ul>
  )
}
