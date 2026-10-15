import { scrollToTop } from '@/shared/utils'
import type { MouseEvent } from 'react'
import { useTopbar } from '../topbar.context'

export default function TopbarLogo() {
  const { closeMenu } = useTopbar()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    closeMenu()
    scrollToTop()
  }

  return (
    <a
      href='#'
      onClick={handleClick}
      className='font-(family-name:--mono) text-lg font-semibold tracking-tight text-(--text-h)'
    >
      iwas<span className='text-(--accent)'>.</span>dev
    </a>
  )
}
