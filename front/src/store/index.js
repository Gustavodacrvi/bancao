
import { readable, derived, writable } from 'svelte/store'

const MINIMUM_DESKTOP_WIDTH = 820


export const popup = writable(null)
export const toast = writable(null)

export const screenWidth = readable(MINIMUM_DESKTOP_WIDTH, set => {

  const width = () => document.body.offsetWidth
  const calc = () => set(width())
  
  calc()
  window.addEventListener('resize', calc)

  return () => window.removeEventListener('resize', calc)
})

export const isDesktop = derived(screenWidth,
  $width => $width >= MINIMUM_DESKTOP_WIDTH)

export const platform = derived(isDesktop, $desktop => {
  if ($desktop) return 'desktop'
  return 'mobile'
})
