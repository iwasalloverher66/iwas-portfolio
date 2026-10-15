import { SectionsConfig } from '@/shared/config'
import TopbarNavLink from './topbar-nav-link'

interface TopbarCtaProps {
  className?: string
}

export default function TopbarCta({ className = '' }: TopbarCtaProps) {
  return (
    <TopbarNavLink
      sectionId={SectionsConfig.CONTACT}
      className={`rounded-lg border border-(--accent-border) bg-(--accent-bg) font-medium text-(--accent) ${className}`}
    >
      Hire me
    </TopbarNavLink>
  )
}
