import { SectionsConfig } from '@/shared/config'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id={SectionsConfig.CONTACT}
      aria-label='Contact'
      className='flex flex-col gap-10 px-6 py-24'
    >
      {children}
    </section>
  )
}
