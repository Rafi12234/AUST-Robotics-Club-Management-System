import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Badge from './Badge.jsx'

/**
 * Module-neutral entry-point card shared by the landing page and the dashboard.
 * Event and Administration both consume this instead of defining their own card.
 */
function ModuleCard({ icon: Icon, title, description, tags = [], status, to, cta = 'Open module' }) {
  const interactive = Boolean(to)

  const classes = [
    'group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-edge p-6 text-left sm:p-8',
    'bg-linear-160 from-surface-2 to-surface-1',
    'transition duration-base ease-standard',
    interactive &&
      'hover:-translate-y-[3px] hover:border-edge-strong hover:shadow-lg focus-visible:-translate-y-[3px] motion-reduce:hover:translate-y-0',
  ]
    .filter(Boolean)
    .join(' ')

  const body = (
    <>
      {/* Top edge accent brightens on hover to signal a real entry point. */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-500 to-transparent opacity-40 transition-opacity duration-base ease-standard group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        {Icon && (
          <span
            className="grid size-13 shrink-0 place-items-center rounded-md border border-edge bg-brand-500/10 text-brand-400 transition duration-base ease-standard group-hover:scale-104 group-hover:bg-brand-500/20 motion-reduce:group-hover:scale-100"
            aria-hidden="true"
          >
            <Icon size={24} strokeWidth={1.6} />
          </span>
        )}
        {status && (
          <Badge variant="success" dot>
            {status}
          </Badge>
        )}
      </div>

      <div>
        <h3 className="mb-2 text-xl sm:text-2xl">{title}</h3>
        <p className="text-muted">{description}</p>
      </div>

      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-edge-subtle bg-surface-3 px-3 py-1 font-mono text-xs text-subtle"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {interactive && (
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-edge-subtle pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-400">
            {cta}
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-base ease-standard group-hover:translate-x-[3px] motion-reduce:group-hover:translate-x-0"
            />
          </span>
        </div>
      )}
    </>
  )

  if (interactive) {
    return (
      <Link to={to} className={classes}>
        {body}
      </Link>
    )
  }

  return <article className={classes}>{body}</article>
}

export default ModuleCard
