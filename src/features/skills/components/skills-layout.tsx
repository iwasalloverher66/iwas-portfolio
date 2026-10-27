import { SectionsConfig } from '@/shared/config'
import type { LayoutProps } from '@/shared/types'

export default function SkillsLayout({ children }: LayoutProps) {
  return (
    <section
      id={SectionsConfig.SKILLS}
      aria-label='Skills'
      className='flex flex-col gap-10 px-6 py-24'
    >
      {children}
    </section>
  )
}
