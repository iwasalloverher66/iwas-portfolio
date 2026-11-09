import Layout from '@/app/layout/layout'
import QueryProvider from '@/app/providers/query-provider'
import AboutEntry from '@/features/about/about-entry'
import ContactEntry from '@/features/contact/contact-entry'
import ProjectsEntry from '@/features/projects/projects-entry'
import SkillsEntry from '@/features/skills/skills-entry'

export default function App() {
  return (
    <QueryProvider>
      <Layout>
        <AboutEntry />
        <SkillsEntry />
        <ProjectsEntry />
        <ContactEntry />
      </Layout>
    </QueryProvider>
  )
}
