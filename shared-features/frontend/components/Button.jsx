import { Link } from 'react-router-dom'

const BASE =
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border font-medium transition duration-fast ease-standard hover:not-disabled:-translate-y-px active:not-disabled:scale-98 disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0 motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100'

const VARIANTS = {
  primary:
    'border-brand-400 bg-linear-135 from-brand-500 to-brand-600 font-semibold text-[#04170c] shadow-glow hover:from-brand-400 hover:to-brand-500 hover:shadow-glow-strong',
  secondary:
    'border-edge bg-surface-2 text-ink hover:border-edge-strong hover:bg-surface-hover',
  ghost: 'border-transparent bg-transparent text-muted hover:bg-surface-2 hover:text-ink',
  danger:
    'border-danger/40 bg-danger/15 text-white hover:border-danger hover:bg-danger/25',
}

const SIZES = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-13 px-8 text-[1.0625rem]',
}

/**
 * Shared action primitive. Renders as <button>, or as a router <Link> when `to` is given.
 * Loading hides the label rather than replacing it, so the control never resizes.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  to,
  href,
  className = '',
  ...rest
}) {
  const classes = [BASE, VARIANTS[variant], SIZES[size], block && 'w-full', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {loading && (
        <span
          className="absolute size-[18px] animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      <span className={loading ? 'invisible' : undefined}>{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  )
}

export default Button
