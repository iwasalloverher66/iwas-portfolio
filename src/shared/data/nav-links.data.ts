import { SectionsConfig } from '@/shared/config/'
import type { NavLink } from '@/shared/types/'

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About',
    sectionId: SectionsConfig.ABOUT
  },
  {
    label: 'Skills',
    sectionId: SectionsConfig.SKILLS
  },
  {
    label: 'Projects',
    sectionId: SectionsConfig.PROJECTS
  },
  {
    label: 'Contact',
    sectionId: SectionsConfig.CONTACT
  }
]
