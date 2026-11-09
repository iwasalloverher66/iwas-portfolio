export function getScrollBehavior(): ScrollBehavior {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return prefersReducedMotion ? 'auto' : 'smooth'
}
