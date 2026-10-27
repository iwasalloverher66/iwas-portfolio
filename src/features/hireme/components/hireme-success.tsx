import { useHireme } from '../hireme.context';

export default function HiremeSuccess() {
  const { close } = useHireme()

  return (
    <div role='status' className='flex flex-col items-center gap-4 py-6 text-center'>
      <span
        aria-hidden
        className='flex size-12 items-center justify-center rounded-full border border-(--accent-border) bg-(--accent-bg) text-xl text-(--accent)'
      >
        ✓
      </span>
      <p className='text-lg font-medium text-(--text-h)'>Thanks, your request has been sent!</p>
      <p>I'll read it and get back to you by email soon.</p>
      <button
        type='button'
        onClick={close}
        className='mt-2 cursor-pointer rounded-lg border border-(--border) px-4 py-2 text-sm transition-colors hover:border-(--accent-border) hover:text-(--text-h)'
      >
        Close
      </button>
    </div>
  )
}
