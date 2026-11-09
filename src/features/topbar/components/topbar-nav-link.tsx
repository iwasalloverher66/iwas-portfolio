import { scrollToElement } from '@/shared/utils';
import type { MouseEvent, ReactNode } from 'react';
import { useTopbar } from '../topbar.context';

interface TopbarNavLinkProps {
  sectionId: string
  className?: string
  children: ReactNode
}

export default function TopbarNavLink({ sectionId, className, children }: TopbarNavLinkProps) {
  const { closeMenu } = useTopbar()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    closeMenu()
    // Wait for the mobile menu to collapse, otherwise the target position shifts mid-scroll
    requestAnimationFrame(() => scrollToElement(sectionId))
  }

  return (
    <a href={`#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
