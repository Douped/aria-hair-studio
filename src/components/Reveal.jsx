import { useEffect, useRef, useState } from 'react'

// Reveal — fades/translates its children into view once, when scrolled near.
//
// Accessibility: the hidden state and transition are gated behind Tailwind's
// `motion-safe:` variant, so users who prefer reduced motion always see the
// content immediately with no movement (and never get stuck hidden if the
// observer never fires).
//
// Renders a <div> carrying `className`, so it can replace an existing wrapper
// without adding extra markup. Use `delay` (ms) to stagger adjacent reveals.
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'motion-safe:translate-y-8 motion-safe:opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal
