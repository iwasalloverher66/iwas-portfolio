import { PROJECTS } from '@/shared/data';
import ProjectsCard from './projects-card';

export default function ProjectsList() {
  return (
    <ul className='grid gap-4 sm:grid-cols-2'>
      {PROJECTS.map(project => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </ul>
  )
}
