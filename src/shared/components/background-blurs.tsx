import { motion, useReducedMotion } from 'motion/react';

const BLOBS = [
  {
    className: 'top-[-10rem] left-[-8rem] size-[36rem] bg-(--accent)/30',
    drift: { x: [0, 80, -40, 0], y: [0, 60, 120, 0] },
    duration: 28
  },
  {
    className: 'top-[30%] right-[-12rem] size-[32rem] bg-indigo-500/25',
    drift: { x: [0, -100, -20, 0], y: [0, 80, -60, 0] },
    duration: 34
  },
  {
    className: 'bottom-[-14rem] left-[20%] size-[40rem] bg-fuchsia-500/20',
    drift: { x: [0, 60, -80, 0], y: [0, -80, -20, 0] },
    duration: 40
  }
]

export default function BackgroundBlurs() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div aria-hidden className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      {BLOBS.map(blob => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-[120px] will-change-transform ${blob.className}`}
          animate={shouldReduceMotion ? undefined : blob.drift}
          transition={{ duration: blob.duration, ease: 'easeInOut', repeat: Infinity }}
        />
      ))}
    </div>
  )
}
