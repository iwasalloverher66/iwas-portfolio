import TopbarBurger from './components/topbar-burger'
import TopbarCta from './components/topbar-cta'
import TopbarLayout from './components/topbar-layout'
import TopbarLogo from './components/topbar-logo'
import TopbarMobileMenu from './components/topbar-mobile-menu'
import TopbarNav from './components/topbar-nav'

export default function Topbar() {
  return (
    <TopbarLayout>
      <TopbarLayout.Bar>
        <TopbarLogo />
        <TopbarNav />
        <TopbarLayout.Actions>
          <TopbarCta className='hidden px-4 py-2 text-sm transition-shadow hover:shadow-(--shadow) sm:inline-flex' />
          <TopbarBurger />
        </TopbarLayout.Actions>
      </TopbarLayout.Bar>

      <TopbarLayout.Menu>
        <TopbarMobileMenu />
      </TopbarLayout.Menu>
    </TopbarLayout>
  )
}
