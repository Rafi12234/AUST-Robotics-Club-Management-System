import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CalendarCog, LayoutDashboard, LogOut, Menu, ShieldCheck, X } from 'lucide-react'
import { useAuth } from '../auth/AuthContext.jsx'
import { useMediaQuery } from '../hooks/useMediaQuery.js'
import Badge from './Badge.jsx'
import Logo from './Logo.jsx'

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, eyebrow: 'Platform' },
  { to: '/event-management', label: 'Event Management', icon: CalendarCog, eyebrow: 'Module' },
  { to: '/administration', label: 'Administration', icon: ShieldCheck, eyebrow: 'Module' },
]

// The green marker + tint only appear on the active route.
const navItemClass = ({ isActive }) =>
  [
    'relative flex min-h-11 items-center gap-3 rounded-sm px-3 py-2 transition-colors duration-base ease-standard',
    'before:absolute before:left-0 before:top-1/2 before:w-[3px] before:-translate-y-1/2 before:rounded-r-sm before:bg-brand-500 before:transition-all before:duration-base before:ease-enter',
    isActive
      ? 'bg-brand-500/10 text-ink before:h-3/5'
      : 'text-muted before:h-0 hover:bg-surface-2 hover:text-ink',
  ].join(' ')

function initialsOf(user) {
  const source = user?.fullName || user?.email || 'AU'
  return source.slice(0, 2).toUpperCase()
}

/**
 * Authenticated application shell: persistent sidebar + topbar with a
 * mobile drawer. The shell stays mounted across routes so only the
 * workspace content animates.
 */
function AppShell({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [lastPath, setLastPath] = useState(location.pathname)

  // Close the mobile drawer whenever the route changes.
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setDrawerOpen(false)
  }

  useEffect(() => {
    if (!drawerOpen || isDesktop) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setDrawerOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [drawerOpen, isDesktop])

  const activeItem = NAV_ITEMS.find((item) => location.pathname.startsWith(item.to))
  const sidebarOpen = isDesktop || drawerOpen

  function handleLogout() {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="flex min-h-screen">
      <aside
        aria-label="Main navigation"
        aria-hidden={!sidebarOpen}
        className={`fixed inset-y-0 left-0 z-60 flex w-[min(17rem,86vw)] flex-col border-r border-edge-subtle bg-surface-1 transition-transform duration-slow ease-enter lg:sticky lg:top-0 lg:h-screen lg:w-sidebar lg:translate-x-0 motion-reduce:transition-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-topbar shrink-0 items-center border-b border-edge-subtle px-5">
          <Logo size="sm" subtitle={null} />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 font-mono text-xs uppercase tracking-[0.14em] text-faint">
            Workspace
          </p>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink to={to} className={navItemClass}>
                  <Icon size={19} strokeWidth={1.7} className="shrink-0" aria-hidden="true" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-edge-subtle px-3 py-4">
          <div className="mb-2 flex items-center gap-3 rounded-sm bg-surface-2 p-3">
            <span
              className="grid size-9 shrink-0 place-items-center rounded-full bg-linear-135 from-brand-500 to-brand-700 font-display text-sm font-semibold text-[#04170c]"
              aria-hidden="true"
            >
              {initialsOf(user)}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-ink">
                {user?.fullName || user?.email}
              </span>
              <span className="block font-mono text-xs text-subtle">Authenticated</span>
            </span>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex min-h-11 w-full items-center gap-3 rounded-sm px-3 py-2 text-sm text-muted transition-colors duration-base ease-standard hover:bg-danger/10 hover:text-danger"
          >
            <LogOut size={18} strokeWidth={1.7} aria-hidden="true" />
            Sign out
          </button>
        </div>
      </aside>

      {!isDesktop && drawerOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 z-40 animate-fade-in bg-black/60"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-topbar items-center gap-4 border-b border-edge-subtle bg-surface-1/85 px-4 backdrop-blur-md sm:px-5 lg:px-8">
          <button
            type="button"
            aria-label={drawerOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-sm border border-edge-subtle text-muted transition-colors duration-base ease-standard hover:border-edge-strong hover:text-ink lg:hidden"
          >
            {drawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex min-w-0 flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-faint">
              {activeItem?.eyebrow || 'AUSTRC'}
            </span>
            <span className="truncate font-display text-[1.0625rem] font-semibold text-ink">
              {activeItem?.label || 'Workspace'}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Badge variant="success" dot pulse>
              Online
            </Badge>
          </div>
        </header>

        <main id="main-content" className="flex-1 px-4 pb-16 pt-8 sm:px-5 lg:px-8 xl:px-12">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AppShell
