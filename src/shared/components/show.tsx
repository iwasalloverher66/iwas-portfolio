import type { ReactNode } from 'react';

interface ShowProps {
  when: boolean
  fallback?: ReactNode
  children: ReactNode
}

export default function Show({ when, fallback = null, children }: ShowProps) {
  return when ? children : fallback
}
