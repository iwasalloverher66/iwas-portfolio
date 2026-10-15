import { useTopbar } from '../topbar.context'

export default function TopbarBurger() {
  const { isMenuOpen, menuId, toggleMenu } = useTopbar()

  return (
    <button
      type='button'
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
      aria-controls={menuId}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      className='flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md hover:bg-(--accent-bg) md:hidden'
    >
      <span
        className={`h-0.5 w-5 bg-(--text-h) transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
      />
      <span
        className={`h-0.5 w-5 bg-(--text-h) transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`h-0.5 w-5 bg-(--text-h) transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
      />
    </button>
  )
}
