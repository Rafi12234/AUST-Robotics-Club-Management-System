import { useEffect, useRef, useState } from 'react'

function shouldRevealImmediately() {
  if (typeof window === 'undefined') return true
  return (
    typeof IntersectionObserver === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Reveals an element once as it enters the viewport.
 * Falls back to immediately visible when IntersectionObserver is unavailable
 * or the user prefers reduced motion.
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = options
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(shouldRevealImmediately)

  useEffect(() => {
    const node = ref.current
    if (!node || revealed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, revealed])

  return { ref, revealed }
}

export default useScrollReveal
