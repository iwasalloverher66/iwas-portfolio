import ProjectsHeader from './components/projects-header'
import ProjectsLayout from './components/projects-layout'
import ProjectsList from './components/projects-list'

export default function ProjectsEntry() {
  return (
    <ProjectsLayout>
      <ProjectsHeader />
      <ProjectsList />
    </ProjectsLayout>
  )
}
