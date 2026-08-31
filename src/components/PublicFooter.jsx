import { Link } from 'react-router-dom'
import Logo from '../../shared-features/frontend/components/Logo.jsx'

const YEAR = new Date().getFullYear()

const linkClass =
  'text-sm text-muted transition-colors duration-base ease-standard hover:text-brand-400'
const headingClass = 'mb-4 font-mono text-xs uppercase tracking-[0.14em] text-faint'

function PublicFooter() {
  return (
    <footer className="border-t border-edge-subtle bg-deep pb-8 pt-16">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 xl:px-12">
        <div className="grid gap-10 pb-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-16">
          <div className="max-w-96">
            <Logo size="md" />
            <p className="mt-4 text-sm text-subtle">
              The central management platform for AUST Robotics Club — coordinating event
              operations and club administration in one secure, modular system.
            </p>
          </div>

          <nav aria-labelledby="footer-platform">
            <p className={headingClass} id="footer-platform">
              Platform
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a className={linkClass} href="#system">
                  System overview
                </a>
              </li>
              <li>
                <a className={linkClass} href="#modules">
                  Modules
                </a>
              </li>
              <li>
                <a className={linkClass} href="#capabilities">
                  Capabilities
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-access">
            <p className={headingClass} id="footer-access">
              Access
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className={linkClass} to="/login">
                  Sign in
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-edge-subtle pt-6 text-xs text-faint">
          <span>© {YEAR} AUST Robotics Club. All rights reserved.</span>
          <span>AUSTRC Management System</span>
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
