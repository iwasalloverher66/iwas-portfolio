import TopbarEntry from '@/features/topbar/topbar-entry'
import type { LayoutProps } from '@/shared/types/layout.types'
import { motion } from 'framer-motion'

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopbarEntry />
      <motion.main
        className='flex-1'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
    </>
  )
}
