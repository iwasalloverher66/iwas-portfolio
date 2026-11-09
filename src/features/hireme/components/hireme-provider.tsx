import type { LayoutProps } from '@/shared/types';
import { useId, useState } from 'react';
import { HiremeContext } from '../hireme.context';

export default function HiremeProvider({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  const titleId = useId()

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return <HiremeContext value={{ isOpen, titleId, open, close }}>{children}</HiremeContext>
}
