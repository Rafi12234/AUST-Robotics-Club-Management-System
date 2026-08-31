import { useScrollReveal } from '../hooks/useScrollReveal.js'

/**
 * Wraps content in a once-only scroll reveal.
 * `delay` staggers grouped children without per-item observers.
 */
function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const { ref, revealed } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`transition-[opacity,transform] duration-hero ease-enter motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
