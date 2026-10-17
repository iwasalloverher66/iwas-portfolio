import Layout from '@/app/layout/layout'
import AboutEntry from '@/features/about/about-entry'
import SkillsEntry from '@/features/skills/skills-entry'

export default function App() {
  return (
    <Layout>
      <AboutEntry />
      <SkillsEntry />
    </Layout>
  )
}
