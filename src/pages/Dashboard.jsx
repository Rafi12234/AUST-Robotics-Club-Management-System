import { CalendarCog, Users } from 'lucide-react'
import Badge from '../../shared-features/frontend/components/Badge.jsx'
import ModuleCard from '../../shared-features/frontend/components/ModuleCard.jsx'
import Reveal from '../../shared-features/frontend/components/Reveal.jsx'
import { useAuth } from '../../shared-features/frontend/auth/AuthContext.jsx'

// System-level facts only — no operational data is queried at this stage.
const SYSTEM_FACTS = [
  { label: 'Active modules', value: '2', accent: true },
  { label: 'Platform', value: 'Online' },
  { label: 'Database', value: 'Neon PostgreSQL' },
  { label: 'System', value: 'AUSTRC' },
]

const SECTION_TITLE = 'mb-2 text-xl'
const SECTION_NOTE = 'mb-5 text-sm text-subtle'

function Dashboard() {
  const { user } = useAuth()
  const displayName = user?.fullName || user?.email || 'there'

  return (
    <div>
      <header className="mb-10 flex flex-wrap items-start justify-between gap-5">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-brand-400">
            Platform overview
          </span>
          <h1 className="mb-2 mt-3 text-3xl sm:text-4xl">Welcome back, {displayName}.</h1>
          <p className="max-w-readable text-muted">
            Select a module to continue. Access to each area depends on your assigned roles and
            permissions.
          </p>
        </div>
        <Badge variant="success" dot pulse>
          All systems operational
        </Badge>
      </header>

      <section>
        <h2 className={SECTION_TITLE}>Modules</h2>
        <p className={SECTION_NOTE}>Your available operational areas.</p>

        <div className="grid gap-5 min-[1100px]:grid-cols-2">
          <Reveal>
            <ModuleCard
              icon={CalendarCog}
              title="Event Management"
              description="Participant registration, event segments, QR services, attendance, results and certificates."
              status="Module ready"
              to="/event-management"
            />
          </Reveal>
          <Reveal delay={80}>
            <ModuleCard
              icon={Users}
              title="Administration"
              description="Recruitment forms, application review, executive panels, member history, tasks and communications."
              status="Module ready"
              to="/administration"
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-10">
        <h2 className={SECTION_TITLE}>System status</h2>
        <p className={SECTION_NOTE}>
          Platform-level information. Operational metrics arrive with each module.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SYSTEM_FACTS.map(({ label, value, accent }, index) => (
            <Reveal
              key={label}
              delay={index * 50}
              className="rounded-md border border-edge-subtle bg-surface-1 p-5"
            >
              <span className="mb-2 block font-mono text-xs uppercase tracking-[0.1em] text-faint">
                {label}
              </span>
              <span
                className={`font-display text-xl font-semibold ${accent ? 'text-brand-400' : 'text-ink'}`}
              >
                {value}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className={SECTION_TITLE}>Platform overview</h2>
        <p className={SECTION_NOTE}>How responsibilities are divided.</p>

        <div className="grid gap-5 rounded-md border border-edge-subtle bg-surface-1 p-6 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="mb-2 flex items-center gap-2 text-[0.9375rem]">
              <CalendarCog size={18} strokeWidth={1.7} className="text-brand-400" aria-hidden="true" />
              Event Management
            </h3>
            <p className="text-sm text-subtle">
              Owns the participant journey: events and segments, dynamic registration, QR-based
              services, sessions and attendance, results with revision history, and participant
              certificates.
            </p>
          </div>
          <div>
            <h3 className="mb-2 flex items-center gap-2 text-[0.9375rem]">
              <Users size={18} strokeWidth={1.7} className="text-brand-400" aria-hidden="true" />
              Administration
            </h3>
            <p className="text-sm text-subtle">
              Owns internal club operations: dynamic recruitment forms, application review,
              executive panel and position history, teams, task workflow with submission versions,
              and bulk communication.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
