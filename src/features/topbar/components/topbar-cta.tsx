import { useHireme } from '@/features/hireme/hireme.context'
import { useTopbar } from '../topbar.context'

interface TopbarCtaProps {
  className?: string
}

export default function TopbarCta({ className = '' }: TopbarCtaProps) {
  const { closeMenu } = useTopbar()
  const { open } = useHireme()

  const handleClick = () => {
    closeMenu()
    open()
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-haspopup='dialog'
      className={`cursor-pointer rounded-lg border border-(--accent-border) bg-(--accent-bg) font-medium text-(--accent) ${className}`}
    >
      Hire me
    </button>
  )
}
