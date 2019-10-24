
import { readable } from 'svelte/store'

const MINIMUM_DESKTOP_WIDTH = 820

export const screenWidth = readable(MINIMUM_DESKTOP_WIDTH, set => {

  const width = () => document.body.offsetWidth
  const calc = () => set(width())
  
  calc()
  window.addEventListener('resize', calc)

  return () => window.removeEventListener('resize', calc)
})
export const isDesktop = readable(true, set => {


  setTimeout(() => {
    set($screenWidth) // fuck yeah
  }, 1000)

  return () => {}
})
