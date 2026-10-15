import { SectionsConfig } from '@/shared/config'
import AboutFacts from './components/about-facts'
import AboutIntro from './components/about-intro'

export default function AboutEntry() {
  return (
    <section
      id={SectionsConfig.ABOUT}
      aria-label='About'
      className='flex flex-col gap-10 px-6 py-24'
    >
      <AboutIntro />
      <AboutFacts />
    </section>
  )
}
