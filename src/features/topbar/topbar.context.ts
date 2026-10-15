import { createContext, use } from 'react';

interface TopbarContextValue {
  isMenuOpen: boolean
  menuId: string
  toggleMenu: () => void
  closeMenu: () => void
}

export const TopbarContext = createContext<TopbarContextValue | null>(null)

export function useTopbar() {
  const context = use(TopbarContext)

  if (!context) {
    throw new Error('useTopbar must be used within <TopbarLayout>')
  }

  return context
}
