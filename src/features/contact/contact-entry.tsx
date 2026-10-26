import ContactHeader from './components/contact-header'
import ContactLayout from './components/contact-layout'
import ContactList from './components/contact-list'

export default function ContactEntry() {
  return (
    <ContactLayout>
      <ContactHeader />
      <ContactList />
    </ContactLayout>
  )
}
