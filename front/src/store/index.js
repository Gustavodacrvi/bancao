
import { readable } from 'svelte/store'

const MINIMUM_DESKTOP_WIDTH = 820

export const isDesktop = readable(true, set => {

  setTimeout(() => {
    set(false) // fuck yeah
  }, 10000)

  return () => {}
})
