import { createContext, use } from 'react';

interface HiremeContextValue {
  isOpen: boolean
  titleId: string
  open: () => void
  close: () => void
}

export const HiremeContext = createContext<HiremeContextValue | null>(null)

export function useHireme() {
  const context = use(HiremeContext)

  if (!context) {
    throw new Error('useHireme must be used within <HiremeProvider>')
  }

  return context
}
