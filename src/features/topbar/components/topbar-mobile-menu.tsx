import { NAV_LINKS } from '@/shared/data'
import TopbarCta from './topbar-cta'
import TopbarNavLink from './topbar-nav-link'

export default function TopbarMobileMenu() {
  return (
    <ul className='flex flex-col gap-1'>
      {NAV_LINKS.map(link => (
        <li key={link.sectionId}>
          <TopbarNavLink
            sectionId={link.sectionId}
            className='block rounded-md px-3 py-2 transition-colors hover:bg-(--accent-bg) hover:text-(--text-h)'
          >
            {link.label}
          </TopbarNavLink>
        </li>
      ))}
      <li className='sm:hidden'>
        <TopbarCta className='mt-2 block px-3 py-2 text-center' />
      </li>
    </ul>
  )
}
