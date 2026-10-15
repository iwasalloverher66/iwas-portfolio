import { PagesConfig } from '@/shared/config'
import { Link } from 'react-router-dom'
import { useTopbar } from '../topbar.context'

export default function TopbarLogo() {
  const { closeMenu } = useTopbar()

  return (
    <Link
      to={PagesConfig.HOME}
      onClick={closeMenu}
      className='font-(family-name:--mono) text-lg font-semibold tracking-tight text-(--text-h)'
    >
      iwas<span className='text-(--accent)'>.</span>dev
    </Link>
  )
}
