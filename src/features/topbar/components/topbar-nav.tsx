import { NAV_LINKS } from '@/shared/data'
import TopbarNavLink from './topbar-nav-link'

export default function TopbarNav() {
  return (
    <nav aria-label='Main navigation' className='hidden md:block'>
      <ul className='flex items-center gap-1'>
        {NAV_LINKS.map(link => (
          <li key={link.sectionId}>
            <TopbarNavLink
              sectionId={link.sectionId}
              className='rounded-md px-3 py-2 text-sm transition-colors hover:bg-(--accent-bg) hover:text-(--text-h)'
            >
              {link.label}
            </TopbarNavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
