import { getScrollBehavior } from './get-scroll-behavior';

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: getScrollBehavior()
  })
}
