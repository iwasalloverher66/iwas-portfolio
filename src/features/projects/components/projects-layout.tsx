import { SectionsConfig } from '@/shared/config'
import type { LayoutProps } from '@/shared/types'

export default function ProjectsLayout({ children }: LayoutProps) {
  return (
    <section
      id={SectionsConfig.PROJECTS}
      aria-label='Projects'
      className='flex flex-col gap-10 px-6 py-24'
    >
      {children}
    </section>
  )
}
