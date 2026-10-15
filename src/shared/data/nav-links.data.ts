import { PagesConfig } from '@/shared/config/'
import type { NavLink } from '@/shared/types/'

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About',
    href: PagesConfig.ABOUT
  },
  {
    label: 'Projects',
    href: PagesConfig.PROJECTS
  },
  {
    label: 'Skills',
    href: PagesConfig.SKILLS
  },
  {
    label: 'Contact',
    href: PagesConfig.CONTACT
  }
]
