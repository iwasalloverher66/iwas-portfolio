export default function ContactHeader() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='font-(family-name:--mono) text-sm text-(--accent)'>{'// contact'}</p>
      <h2 className='text-3xl font-semibold tracking-tight text-(--text-h) md:text-4xl'>
        Let's work together
      </h2>
      <p className='max-w-2xl'>
        Have a project in mind or just want to say hi? Reach out on any of the channels below — I
        usually reply within a day.
      </p>
    </div>
  )
}
