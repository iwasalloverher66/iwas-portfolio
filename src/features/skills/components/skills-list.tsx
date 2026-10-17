import { Show } from '@/shared/components'
import { SKILLS } from '@/shared/data'
import SkillsCard from './skills-card'

export default function SkillsList() {
  return (
    <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
      {SKILLS.map(skill => (
        <SkillsCard key={skill.name}>
          <span className='font-medium text-(--text-h)'>{skill.name}</span>
          <Show when={skill.level !== ''}>
            <span className='text-sm'>{skill.level}</span>
          </Show>
        </SkillsCard>
      ))}
    </ul>
  )
}
