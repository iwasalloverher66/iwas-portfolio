import { NAV_LINKS } from '@/shared/data'
import { useTopbar } from '../topbar.context'
import TopbarCta from './topbar-cta'

export default function TopbarMobileMenu() {
  const { closeMenu } = useTopbar()

  return (
    <ul className='flex flex-col gap-1'>
      {NAV_LINKS.map(link => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={closeMenu}
            className='block rounded-md px-3 py-2 transition-colors hover:bg-(--accent-bg) hover:text-(--text-h)'
          >
            {link.label}
          </a>
        </li>
      ))}
      <li className='sm:hidden'>
        <TopbarCta onClick={closeMenu} className='mt-2 block px-3 py-2 text-center' />
      </li>
    </ul>
  )
}
