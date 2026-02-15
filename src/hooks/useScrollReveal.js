import { useEffect, useRef } from 'react'

const REDUCED_MOTION =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const defaultOptions = {
  rootMargin: '0px 0px -8% 0px',
  threshold: 0,
}

/**
 * useScrollReveal(ref, { delay })
 * When element enters viewport, adds "revealed" class after optional delay (ms).
 * Returns ref to attach to the element.
 */
export function useScrollReveal(options = {}) {
  const { delay = 0 } = options
  const ref = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || REDUCED_MOTION) {
      if (el) el.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delayMs = typeof delay === 'number' ? delay : parseInt(el.dataset.revealDelay, 10) || 0
            if (delayMs > 0) {
              timeoutRef.current = setTimeout(() => {
                el.classList.add('revealed')
                timeoutRef.current = null
              }, delayMs)
            } else {
              el.classList.add('revealed')
            }
          }
        })
      },
      defaultOptions
    )

    observer.observe(el)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      observer.disconnect()
    }
  }, [delay])

  return ref
}
