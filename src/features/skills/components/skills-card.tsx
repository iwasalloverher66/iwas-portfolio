export default function SkillsCard({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex flex-col gap-1 rounded-xl border border-(--border) bg-(--bg) p-5 transition-colors hover:border-(--accent-border)'>
      {children}
    </li>
  )
}
