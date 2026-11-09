import AboutFacts from './components/about-facts'
import AboutIntro from './components/about-intro'
import AboutLayout from './components/about-layout'

export default function AboutEntry() {
  return (
    <AboutLayout>
      <AboutIntro />
      <AboutFacts />
    </AboutLayout>
  )
}
