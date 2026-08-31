const SIZES = {
  sm: { mark: 'size-8', title: 'text-sm' },
  md: { mark: 'size-[42px]', title: 'text-[1.0625rem]' },
  lg: { mark: 'size-16', title: 'text-2xl' },
}

/**
 * AUSTRC brand mark. The official artwork is never recolored or stretched;
 * it sits on a light disc so it stays legible on dark surfaces.
 */
function Logo({ size = 'md', showText = true, subtitle = 'Management System', className = '' }) {
  const sizing = SIZES[size] ?? SIZES.md

  return (
    <span className={`group inline-flex items-center gap-3 text-ink ${className}`}>
      <span
        className={`${sizing.mark} grid shrink-0 place-items-center overflow-hidden rounded-full border border-edge bg-ink shadow-glow transition duration-base ease-standard group-hover:-translate-y-px group-hover:shadow-glow-strong`}
      >
        <img
          src="/brand/logo.png"
          alt="AUST Robotics Club"
          width="64"
          height="64"
          className="size-full object-contain"
        />
      </span>

      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-display font-semibold tracking-tight ${sizing.title}`}>
            AUST Robotics Club
          </span>
          {subtitle && (
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}

export default Logo
