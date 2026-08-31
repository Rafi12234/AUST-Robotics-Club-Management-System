const VARIANTS = {
  success: 'border-brand-500/30 bg-brand-500/10 text-brand-300',
  warning: 'border-warning/30 bg-warning/10 text-warning',
  danger: 'border-danger/30 bg-danger/10 text-danger',
  info: 'border-info/30 bg-info/10 text-info',
  neutral: 'border-edge bg-surface-2 text-subtle',
}

function Badge({ variant = 'neutral', dot = false, pulse = false, children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] ${VARIANTS[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`size-1.5 shrink-0 rounded-full bg-current ${pulse ? 'animate-soft-pulse motion-reduce:animate-none' : ''}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

export default Badge
