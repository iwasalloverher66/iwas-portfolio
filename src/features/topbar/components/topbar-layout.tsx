import { Show } from '@/shared/components'
import type { LayoutProps } from '@/shared/types/'
import { useId, useState } from 'react'
import { TopbarContext, useTopbar } from '../topbar.context'

function TopbarLayoutRoot({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <TopbarContext value={{ isMenuOpen, menuId, toggleMenu, closeMenu }}>
      <header className='sticky top-0 z-50 border-b border-(--border) bg-(--bg)/80 backdrop-blur-md'>
        {children}
      </header>
    </TopbarContext>
  )
}

function TopbarLayoutBar({ children }: LayoutProps) {
  return <div className='flex h-16 items-center justify-between gap-6 px-6'>{children}</div>
}

function TopbarLayoutActions({ children }: LayoutProps) {
  return <div className='flex items-center gap-3'>{children}</div>
}

function TopbarLayoutMenu({ children }: LayoutProps) {
  const { isMenuOpen, menuId } = useTopbar()

  return (
    <Show when={isMenuOpen}>
      <nav
        id={menuId}
        aria-label='Mobile navigation'
        className='border-t border-(--border) px-6 py-4 md:hidden'
      >
        {children}
      </nav>
    </Show>
  )
}

const TopbarLayout = Object.assign(TopbarLayoutRoot, {
  Bar: TopbarLayoutBar,
  Actions: TopbarLayoutActions,
  Menu: TopbarLayoutMenu
})

export default TopbarLayout
