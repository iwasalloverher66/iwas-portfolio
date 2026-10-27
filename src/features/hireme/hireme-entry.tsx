import HiremeForm from './components/hireme-form'
import HiremeLayout from './components/hireme-layout'

export default function HiremeEntry() {
  return (
    <HiremeLayout>
      <HiremeLayout.Header>
        <HiremeLayout.Title>Tell me about your project</HiremeLayout.Title>
        <HiremeLayout.Close />
      </HiremeLayout.Header>
      <HiremeLayout.Description>
        Share a few details and I'll reply to your email, usually within a day.
      </HiremeLayout.Description>
      <HiremeForm />
    </HiremeLayout>
  )
}
