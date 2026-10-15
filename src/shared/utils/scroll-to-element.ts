import { getScrollBehavior } from './get-scroll-behavior'

export function scrollToElement(id: string) {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: getScrollBehavior(),
    block: 'start'
  })
}
