import { SectionsConfig } from '@/shared/config'
import SkillsHeader from './components/skills-header'
import SkillsList from './components/skills-list'

export default function SkillsEntry() {
  return (
    <section
      id={SectionsConfig.SKILLS}
      aria-label='Skills'
      className='flex flex-col gap-10 px-6 py-24'
    >
      <SkillsHeader />
      <SkillsList />
    </section>
  )
}
