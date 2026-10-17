import TopbarEntry from '@/features/topbar/topbar-entry'
import { BackgroundBlurs } from '@/shared/components'
import type { LayoutProps } from '@/shared/types/layout.types'
import { motion } from 'motion/react'

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <BackgroundBlurs />
      <TopbarEntry />
      <motion.main
        className='flex-1'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </>
  )
}
