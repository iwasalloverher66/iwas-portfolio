import { Show } from '@/shared/components'
import { useLeadForm } from '../hooks/use-lead-form'
import HiremeField from './hireme-field'
import HiremeSuccess from './hireme-success'

export default function HiremeForm() {
  const { register, onSubmit, errors, isSubmitting, isSuccess } = useLeadForm()
  const formError = errors.root?.server?.message

  return (
    <Show when={!isSuccess} fallback={<HiremeSuccess />}>
      <form noValidate onSubmit={onSubmit} className='flex flex-col gap-4'>
        <HiremeField
          label='Name'
          registration={register('name')}
          error={errors.name?.message}
          placeholder='John Doe'
          autoComplete='name'
          autoFocus
        />
        <HiremeField
          label='Email'
          type='email'
          registration={register('email')}
          error={errors.email?.message}
          placeholder='john@company.com'
          autoComplete='email'
        />
        <HiremeField
          label='About the project'
          multiline
          registration={register('projectDescription')}
          error={errors.projectDescription?.message}
          placeholder='What are you building, what do you need help with, timeline, budget…'
        />

        <Show when={Boolean(formError)}>
          <p role='alert' className='text-sm text-red-400'>
            {formError}
          </p>
        </Show>

        <button
          type='submit'
          disabled={isSubmitting}
          className='mt-2 cursor-pointer rounded-lg border border-(--accent-border) bg-(--accent-bg) px-4 py-2.5 font-medium text-(--accent) transition-shadow hover:shadow-(--shadow) disabled:cursor-wait disabled:opacity-60'
        >
          {isSubmitting ? 'Sending…' : 'Send request'}
        </button>
      </form>
    </Show>
  )
}
