import Topbar from '@/features/topbar/topbar-entry'
import type { LayoutProps } from '@/shared/types/layout.types'

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Topbar />
      <main className='flex-1'>{children}</main>
    </>
  )
}
