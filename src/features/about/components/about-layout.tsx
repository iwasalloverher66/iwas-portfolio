import { SectionsConfig } from '@/shared/config'
import type { LayoutProps } from '@/shared/types'

export default function AboutLayout({ children }: LayoutProps) {
  return (
    <section
      id={SectionsConfig.ABOUT}
      aria-label='About'
      className='flex flex-col gap-10 px-6 py-24'
    >
      {children}
    </section>
  )
}
