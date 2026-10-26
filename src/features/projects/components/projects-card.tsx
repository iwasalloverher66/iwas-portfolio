import { Show } from '@/shared/components'
import type { Project } from '@/shared/types'

interface ProjectsCardProps {
  project: Project
}

export default function ProjectsCard({ project }: ProjectsCardProps) {
  const hasLink = project.link !== ''

  return (
    <li className='group relative flex flex-col gap-4 rounded-xl border border-(--border) bg-(--bg) p-6 transition-colors hover:border-(--accent-border)'>
      <div className='flex items-start justify-between gap-4'>
        <h3 className='text-xl font-semibold text-(--text-h)'>
          <Show when={hasLink} fallback={project.title}>
            <a
              href={project.link}
              target='_blank'
              rel='noreferrer'
              className='after:absolute after:inset-0 after:rounded-xl'
            >
              {project.title}
            </a>
          </Show>
        </h3>
        <Show when={hasLink}>
          <span
            aria-hidden
            className='text-(--text) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--accent)'
          >
            ↗
          </span>
        </Show>
      </div>

      <p className='flex-1'>{project.description}</p>

      <ul className='flex flex-wrap gap-2'>
        {project.tags.map(tag => (
          <li
            key={tag}
            className='rounded-md border border-(--accent-border) bg-(--accent-bg) px-2 py-0.5 font-(family-name:--mono) text-xs text-(--accent)'
          >
            {tag}
          </li>
        ))}
      </ul>
    </li>
  )
}
