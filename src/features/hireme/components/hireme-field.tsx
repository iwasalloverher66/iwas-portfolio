import { Show } from '@/shared/components'
import { useId } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface HiremeFieldProps {
  label: string
  registration: UseFormRegisterReturn
  error?: string
  type?: 'text' | 'email'
  multiline?: boolean
  placeholder?: string
  autoComplete?: string
  autoFocus?: boolean
}

const CONTROL_CLASS =
  'w-full rounded-lg border bg-(--surface) px-3 py-2 text-(--text-h) placeholder:text-(--text)/60 outline-none transition-colors focus:border-(--accent-border) focus:ring-2 focus:ring-(--accent-bg)'

export default function HiremeField({
  label,
  registration,
  error,
  type = 'text',
  multiline = false,
  placeholder,
  autoComplete,
  autoFocus
}: HiremeFieldProps) {
  const id = useId()
  const errorId = `${id}-error`
  const hasError = Boolean(error)

  const controlProps = {
    ...registration,
    id,
    placeholder,
    autoFocus,
    'aria-invalid': hasError,
    'aria-describedby': hasError ? errorId : undefined,
    className: `${CONTROL_CLASS} ${hasError ? 'border-red-400/70' : 'border-(--border)'}`
  }

  return (
    <div className='flex flex-col gap-1.5'>
      <label htmlFor={id} className='text-sm text-(--text-h)'>
        {label}
      </label>
      <Show
        when={multiline}
        fallback={<input {...controlProps} type={type} autoComplete={autoComplete} />}
      >
        <textarea {...controlProps} rows={5} className={`${controlProps.className} resize-y`} />
      </Show>
      <Show when={hasError}>
        <p id={errorId} className='text-sm text-red-400'>
          {error}
        </p>
      </Show>
    </div>
  )
}
