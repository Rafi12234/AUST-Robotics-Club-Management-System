import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../../shared-features/frontend/components/Button.jsx'
import Logo from '../../shared-features/frontend/components/Logo.jsx'
import { useScrolled } from '../../shared-features/frontend/hooks/useScrolled.js'

const LINKS = [
  { href: '#system', label: 'System' },
  { href: '#modules', label: 'Modules' },
  { href: '#capabilities', label: 'Capabilities' },
]

function PublicNavbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b transition-colors duration-slow ease-standard ${
        scrolled ? 'border-edge-subtle bg-deep/80 backdrop-blur-lg' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-19 w-full max-w-page items-center gap-6 px-5 md:px-8 xl:px-12">
        <Link to="/" aria-label="AUST Robotics Club — home">
          <Logo size="sm" />
        </Link>

        <nav className="ml-auto hidden items-center gap-2 min-[900px]:flex" aria-label="Primary">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative rounded-sm px-3 py-2 text-sm text-muted transition-colors duration-base ease-standard hover:text-ink"
            >
              {label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-brand-500 transition-transform duration-base ease-standard group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 min-[900px]:flex">
          <Button to="/login" variant="ghost" size="sm">
            Login
          </Button>
          <Button to="/login" size="sm">
            Enter platform
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid size-11 place-items-center rounded-sm border border-edge-subtle bg-surface-1 text-muted transition-colors duration-base ease-standard hover:border-edge-strong hover:text-ink min-[900px]:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="animate-sheet-in border-b border-edge bg-surface-1 p-5 min-[900px]:hidden">
          <nav className="mb-5 flex flex-col gap-1" aria-label="Mobile">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-sm px-3 text-muted transition-colors duration-base ease-standard hover:bg-surface-2 hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Button to="/login" variant="secondary" block onClick={() => setOpen(false)}>
              Login
            </Button>
            <Button to="/login" block onClick={() => setOpen(false)}>
              Enter platform
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default PublicNavbar
