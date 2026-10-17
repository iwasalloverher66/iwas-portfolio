import { ABOUT_FACTS } from '@/shared/data'

export default function AboutFacts() {
  return (
    <dl className='grid gap-4 sm:grid-cols-3'>
      {ABOUT_FACTS.map(fact => (
        <div key={fact.label} className='rounded-xl border border-(--border) bg-(--bg) p-5'>
          <dt className='text-sm'>{fact.label}</dt>
          <dd className='mt-1 font-medium text-(--text-h)'>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
