import SkillsHeader from './components/skills-header'
import SkillsLayout from './components/skills-layout'
import SkillsList from './components/skills-list'

export default function SkillsEntry() {
  return (
    <SkillsLayout>
      <SkillsHeader />
      <SkillsList />
    </SkillsLayout>
  )
}
