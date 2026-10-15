import TopbarEntry from '@/features/topbar/topbar-entry'
import type { LayoutProps } from '@/shared/types/layout.types'
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopbarEntry />
      <main className='flex-1'>{children}</main>
    </>
  )
}
