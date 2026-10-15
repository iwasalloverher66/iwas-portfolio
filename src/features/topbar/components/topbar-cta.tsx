interface TopbarCtaProps {
  className?: string
  onClick?: () => void
}

export default function TopbarCta({ className = '', onClick }: TopbarCtaProps) {
  return (
    <a
      href='#contact'
      onClick={onClick}
      className={`rounded-lg border border-(--accent-border) bg-(--accent-bg) font-medium text-(--accent) ${className}`}
    >
      Hire me
    </a>
  )
}
