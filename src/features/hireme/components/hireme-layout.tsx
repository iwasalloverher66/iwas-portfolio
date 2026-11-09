import type { LayoutProps } from '@/shared/types'
import { AnimatePresence, motion } from 'motion/react'
import { useHireme } from '../hireme.context'
import { useDialogBehavior } from '../hooks/use-dialog-behavior'

function HiremeLayoutRoot({ children }: LayoutProps) {
  const { isOpen, titleId, close } = useHireme()

  useDialogBehavior(isOpen, close)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='hireme-dialog'
          className='fixed inset-0 z-100 flex items-end justify-center p-4 sm:items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            aria-hidden
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
            onClick={close}
          />
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-labelledby={titleId}
            className='relative flex max-h-full w-full max-w-lg flex-col gap-6 overflow-y-auto rounded-2xl border border-(--border) bg-(--bg) p-6 shadow-(--shadow)'
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function HiremeLayoutHeader({ children }: LayoutProps) {
  return <div className='flex items-start justify-between gap-4'>{children}</div>
}

function HiremeLayoutTitle({ children }: LayoutProps) {
  const { titleId } = useHireme()

  return (
    <div className='flex flex-col gap-2'>
      <p className='font-(family-name:--mono) text-sm text-(--accent)'>{'// hire me'}</p>
      <h2 id={titleId} className='text-2xl font-semibold tracking-tight text-(--text-h)'>
        {children}
      </h2>
    </div>
  )
}

function HiremeLayoutDescription({ children }: LayoutProps) {
  return <p className='-mt-2'>{children}</p>
}

function HiremeLayoutClose() {
  const { close } = useHireme()

  return (
    <button
      type='button'
      onClick={close}
      aria-label='Close'
      className='flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-xl leading-none transition-colors hover:bg-(--accent-bg) hover:text-(--text-h)'
    >
      ×
    </button>
  )
}

const HiremeLayout = Object.assign(HiremeLayoutRoot, {
  Header: HiremeLayoutHeader,
  Title: HiremeLayoutTitle,
  Description: HiremeLayoutDescription,
  Close: HiremeLayoutClose
})

export default HiremeLayout
