import {
  Activity,
  Bell,
  CalendarCog,
  ClipboardList,
  Database,
  History,
  Layers,
  QrCode,
  ScanLine,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react'
import Badge from '../../shared-features/frontend/components/Badge.jsx'
import Button from '../../shared-features/frontend/components/Button.jsx'
import ModuleCard from '../../shared-features/frontend/components/ModuleCard.jsx'
import Reveal from '../../shared-features/frontend/components/Reveal.jsx'
import PublicFooter from '../components/PublicFooter.jsx'
import PublicNavbar from '../components/PublicNavbar.jsx'

const CONTAINER = 'mx-auto w-full max-w-page px-5 md:px-8 xl:px-12'
const EYEBROW = 'font-mono text-xs uppercase tracking-[0.16em] text-brand-400'
const SECTION_TITLE = 'my-4 text-3xl sm:text-4xl lg:text-5xl'

const HERO_STATS = [
  { value: '2', label: 'Core modules' },
  { value: '56', label: 'Data tables' },
  { value: '1', label: 'Unified platform' },
]

const INTRO_CARDS = [
  {
    icon: Layers,
    title: 'One modular platform',
    text: 'Event delivery and club administration share a single system, identity model and design language.',
  },
  {
    icon: ShieldCheck,
    title: 'Governed access',
    text: 'Roles and permissions decide what each member, executive, staff member or participant can reach.',
  },
  {
    icon: History,
    title: 'Preserved history',
    text: 'Panel terms, results, submissions and reviews are kept as history rather than overwritten.',
  },
]

const CAPABILITIES = [
  {
    icon: Activity,
    title: 'Centralized operations',
    text: 'Every event and administrative workflow runs from one controlled environment.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-based access',
    text: 'Permissions are enforced per role across both modules.',
  },
  {
    icon: Workflow,
    title: 'Dynamic workflows',
    text: 'Forms and registration fields are configured, not hardcoded.',
  },
  {
    icon: ScanLine,
    title: 'QR-enabled operations',
    text: 'One participant code drives attendance and event service collection.',
  },
  {
    icon: Bell,
    title: 'Automated communication',
    text: 'Templated notifications and bulk campaigns with delivery tracking.',
  },
  {
    icon: Database,
    title: 'Secure modular architecture',
    text: 'Clear module boundaries on a governed PostgreSQL schema.',
  },
]

/** Robotics arm geometry that draws itself once on load. */
function HeroVisual() {
  return (
    <div className="relative hidden aspect-square place-items-center lg:grid" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full border border-edge-subtle">
        <div className="absolute inset-[12%] rounded-full border border-edge" />
        <div className="absolute inset-[30%] animate-spin-slow rounded-full border border-dashed border-edge-subtle motion-reduce:animate-none" />
      </div>

      <svg className="relative size-full overflow-visible" viewBox="0 0 400 400" fill="none">
        <defs>
          <linearGradient id="au-arm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#39B54A" />
            <stop offset="100%" stopColor="#006838" />
          </linearGradient>
        </defs>

        {/* Arm segments */}
        <path
          className="trace animate-trace"
          d="M120 320 L120 220"
          stroke="url(#au-arm)"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="trace animate-trace [animation-delay:340ms]"
          d="M120 220 L210 150"
          stroke="url(#au-arm)"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="trace animate-trace [animation-delay:640ms]"
          d="M210 150 L290 172"
          stroke="url(#au-arm)"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength="1"
        />

        {/* Circuit traces */}
        <path
          className="trace animate-trace [animation-delay:640ms]"
          d="M60 360 L96 360 L120 336"
          stroke="rgba(120,255,150,0.28)"
          strokeWidth="1.5"
          pathLength="1"
        />
        <path
          className="trace animate-trace [animation-delay:640ms]"
          d="M300 200 L340 200 L340 130"
          stroke="rgba(120,255,150,0.28)"
          strokeWidth="1.5"
          pathLength="1"
        />

        {/* Joints */}
        <circle className="animate-fade-in opacity-0 [animation-delay:900ms]" cx="120" cy="320" r="14" fill="#0B100D" stroke="#39B54A" strokeWidth="3" />
        <circle className="animate-fade-in opacity-0 [animation-delay:1050ms]" cx="120" cy="220" r="11" fill="#0B100D" stroke="#39B54A" strokeWidth="3" />
        <circle className="animate-fade-in opacity-0 [animation-delay:1200ms]" cx="210" cy="150" r="9" fill="#0B100D" stroke="#58CF69" strokeWidth="3" />
        <circle className="animate-fade-in opacity-0 [animation-delay:1200ms]" cx="290" cy="172" r="6" fill="#39B54A" />
        <path className="animate-fade-in opacity-0 [animation-delay:900ms]" d="M80 344 L160 344" stroke="rgba(120,255,150,0.4)" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <span className="absolute left-[-4%] top-[14%] flex animate-rise items-center gap-2 rounded-full border border-edge bg-surface-2/85 px-4 py-2 font-mono text-xs text-muted backdrop-blur-sm [animation-delay:1.2s]">
        <QrCode size={14} strokeWidth={2} className="text-brand-400" />
        Participant operations
      </span>
      <span className="absolute bottom-[18%] right-[-2%] flex animate-rise items-center gap-2 rounded-full border border-edge bg-surface-2/85 px-4 py-2 font-mono text-xs text-muted backdrop-blur-sm [animation-delay:1.4s]">
        <ClipboardList size={14} strokeWidth={2} className="text-brand-400" />
        Executive workflows
      </span>
    </div>
  )
}

function Landing() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-3 top-3 z-100 -translate-y-[200%] rounded-sm border border-edge-strong bg-surface-2 px-4 py-3 transition-transform duration-fast ease-standard focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <PublicNavbar />

      <main id="main-content">
        {/* ---------- Hero ---------- */}
        <section className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-30 sm:pb-24 sm:pt-35">
          <div className="grid-layer" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-[10%] -top-[20%] aspect-square w-[min(52rem,90vw)] animate-glow-drift bg-[radial-gradient(circle,rgba(0,104,56,0.28),transparent_62%)] motion-reduce:animate-none"
            aria-hidden="true"
          />

          <div className={`relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] ${CONTAINER}`}>
            <div className="[&>*]:animate-rise [&>*:nth-child(1)]:[animation-delay:60ms] [&>*:nth-child(2)]:[animation-delay:140ms] [&>*:nth-child(3)]:[animation-delay:220ms] [&>*:nth-child(4)]:[animation-delay:300ms] [&>*:nth-child(5)]:[animation-delay:380ms]">
              <Badge variant="success" dot pulse>
                Platform online
              </Badge>

              <h1 className="my-5 text-[clamp(2.75rem,6.4vw,5rem)] leading-[1.04]">
                Engineering the future.
                <br />
                <span className="bg-linear-120 from-brand-400 to-brand-700 bg-clip-text text-transparent">
                  Managing innovation smarter.
                </span>
              </h1>

              <p className="max-w-lg text-[1.0625rem] text-muted">
                The AUSTRC Management System centralizes AUST Robotics Club event operations and
                club administration inside one secure, modular platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 [&>*]:max-sm:w-full">
                <Button to="/login" size="lg">
                  Enter platform
                </Button>
                <Button href="#modules" variant="secondary" size="lg">
                  Explore modules
                </Button>
              </div>

              <dl className="mt-12 flex flex-wrap gap-8 border-t border-edge-subtle pt-6">
                {HERO_STATS.map(({ value, label }) => (
                  <div key={label}>
                    <dd className="font-display text-2xl font-semibold text-brand-400">{value}</dd>
                    <dt className="font-mono text-xs uppercase tracking-[0.1em] text-subtle">
                      {label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <HeroVisual />
          </div>
        </section>

        {/* ---------- Platform introduction ---------- */}
        <section className="py-16 sm:py-24" id="system">
          <div className={CONTAINER}>
            <Reveal className="mb-12 max-w-readable">
              <span className={EYEBROW}>The system</span>
              <h2 className={SECTION_TITLE}>Built for how AUSTRC actually operates.</h2>
              <p className="text-[1.0625rem] text-muted">
                Two specialised modules, one shared foundation — so teams can work in parallel
                without fragmenting the club&apos;s data or identity.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INTRO_CARDS.map(({ icon: Icon, title, text }, index) => (
                <Reveal
                  key={title}
                  delay={index * 80}
                  className="rounded-md border border-edge-subtle bg-surface-1 p-6"
                >
                  <span
                    className="mb-4 grid size-11 place-items-center rounded-sm bg-brand-500/10 text-brand-400"
                    aria-hidden="true"
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="mb-2 text-[1.0625rem]">{title}</h3>
                  <p className="text-sm text-subtle">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Modules ---------- */}
        <section className="py-16 sm:py-24" id="modules">
          <div className={CONTAINER}>
            <Reveal className="mb-12 max-w-readable">
              <span className={EYEBROW}>Modules</span>
              <h2 className={SECTION_TITLE}>Two operational domains.</h2>
              <p className="text-[1.0625rem] text-muted">
                Each module owns its own workflows and data, while sharing identity, files,
                documents and communication infrastructure.
              </p>
            </Reveal>

            <div className="grid gap-6 min-[900px]:grid-cols-2">
              <Reveal>
                <ModuleCard
                  icon={CalendarCog}
                  title="Event Management"
                  description="Manage the complete participant journey from registration to attendance, QR-based services, results, notifications and certificates."
                  tags={['Registration', 'Segments', 'QR services', 'Attendance', 'Results', 'Certificates']}
                />
              </Reveal>
              <Reveal delay={90}>
                <ModuleCard
                  icon={Users}
                  title="Administration"
                  description="Manage recruitment forms, executive panels, member history, team workflows, tasks, collaboration and club communications."
                  tags={['Forms', 'Applications', 'Panels', 'Members', 'Tasks', 'Bulk email']}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Capabilities ---------- */}
        <section className="py-16 sm:py-24" id="capabilities">
          <div className={CONTAINER}>
            <Reveal className="mb-12 max-w-readable">
              <span className={EYEBROW}>Capabilities</span>
              <h2 className={SECTION_TITLE}>Platform capabilities.</h2>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map(({ icon: Icon, title, text }, index) => (
                <Reveal
                  key={title}
                  delay={index * 60}
                  className="flex gap-4 rounded-md border border-edge-subtle bg-surface-1 p-5 transition-colors duration-base ease-standard hover:border-edge hover:bg-surface-2"
                >
                  <Icon size={22} strokeWidth={1.6} className="shrink-0 text-brand-400" aria-hidden="true" />
                  <div>
                    <h3 className="mb-1 text-[0.9375rem]">{title}</h3>
                    <p className="text-sm text-subtle">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="py-16 sm:py-24">
          <div className={CONTAINER}>
            <Reveal className="relative overflow-hidden rounded-xl border border-edge bg-surface-1 px-5 py-10 text-center sm:px-8 sm:py-16">
              <div className="grid-layer" aria-hidden="true" />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,104,56,0.26),transparent_60%)]"
                aria-hidden="true"
              />
              <div className="relative">
                <span className={EYEBROW}>Authorized access</span>
                <h2 className="my-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
                  Enter the management platform.
                </h2>
                <p className="mx-auto max-w-xl text-muted">
                  Club executives, event staff and authorized members can sign in to access their
                  assigned modules and operations.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button to="/login" size="lg">
                    Sign in
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <PublicFooter />
    </>
  )
}

export default Landing
