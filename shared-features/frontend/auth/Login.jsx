import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AlertCircle, ArrowLeft, Eye, EyeOff, Lock, ShieldCheck, Workflow } from 'lucide-react'
import Button from '../components/Button.jsx'
import Logo from '../components/Logo.jsx'
import { useAuth } from './AuthContext.jsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ASIDE_POINTS = [
  { icon: ShieldCheck, text: 'Role-based access across every club operation' },
  { icon: Workflow, text: 'Unified event and administration workflows' },
  { icon: Lock, text: 'Auditable records and historical integrity' },
]

const inputClass =
  'h-12 w-full rounded-sm border border-edge bg-surface-1 px-4 text-ink transition-colors duration-base ease-standard placeholder:text-faint hover:not-disabled:border-edge-strong focus:border-brand-500 focus:bg-surface-2 focus:outline-none aria-invalid:border-danger'

function FieldError({ id, children }) {
  return (
    <p id={id} className="flex animate-rise items-center gap-2 text-sm text-danger">
      <AlertCircle size={14} strokeWidth={2} aria-hidden="true" />
      {children}
    </p>
  )
}

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const redirectTo = location.state?.from || '/dashboard'

  function validate() {
    const next = {}
    const trimmed = email.trim().toLowerCase()

    if (!trimmed) next.email = 'Email is required.'
    else if (!EMAIL_PATTERN.test(trimmed)) next.email = 'Enter a valid email address.'

    if (!password) next.password = 'Password is required.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFormError('')

    if (!validate()) return

    setSubmitting(true)
    try {
      await login({ email: email.trim().toLowerCase(), password })
      navigate(redirectTo, { replace: true })
    } catch {
      setFormError('Unable to sign in right now. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Branding panel — desktop only */}
      <aside className="relative hidden flex-col justify-between overflow-hidden border-r border-edge-subtle bg-surface-2 bg-linear-160 from-surface-2 to-deep p-12 lg:flex">
        <div className="grid-layer" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-1/4 -top-1/4 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(0,104,56,0.3),transparent_62%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[30rem]">
          <Logo size="lg" subtitle="Management System" />
          <h1 className="mb-4 mt-6 text-4xl xl:text-[2.75rem]">
            Secure access to club operations.
          </h1>
          <p className="text-[1.0625rem] text-muted">
            One platform coordinating AUSTRC event delivery and executive administration.
          </p>
        </div>

        <ul className="relative z-10 flex flex-col gap-3">
          {ASIDE_POINTS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm text-subtle">
              <Icon size={18} strokeWidth={1.7} className="shrink-0 text-brand-400" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </aside>

      {/* Form panel */}
      <section className="grid place-items-center px-5 py-8">
        <div className="w-full max-w-[26rem] animate-rise">
          <div className="mb-8 flex justify-center lg:hidden">
            <Logo size="md" />
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.16em] text-brand-400">
            AUSTRC Management System
          </span>
          <h2 className="mb-2 mt-4 text-3xl">Sign in</h2>
          <p className="mb-8 text-muted">Enter your credentials to access the platform.</p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            {formError && (
              <div
                role="alert"
                className="flex animate-rise items-center gap-3 rounded-sm border border-danger/35 bg-danger/10 px-4 py-3 text-sm text-danger"
              >
                <AlertCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                {formError}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted" htmlFor="login-email">
                Email address
              </label>
              <input
                id="login-email"
                className={inputClass}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@aust.edu"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'login-email-error' : undefined}
                disabled={submitting}
              />
              {errors.email && <FieldError id="login-email-error">{errors.email}</FieldError>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted" htmlFor="login-password">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="login-password"
                  className={`${inputClass} pr-13`}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'login-password-error' : undefined}
                  disabled={submitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  className="absolute right-2 grid size-9 place-items-center rounded-sm text-subtle transition-colors duration-base ease-standard hover:text-ink"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <FieldError id="login-password-error">{errors.password}</FieldError>
              )}
            </div>

            <Button type="submit" size="lg" block loading={submitting}>
              {submitting ? 'Signing in' : 'Sign in'}
            </Button>
          </form>

          <p className="mt-6 rounded-sm border border-dashed border-edge bg-surface-1 px-4 py-3 text-xs leading-relaxed text-subtle">
            Demonstration access only — credentials are not yet verified against the AUSTRC user
            directory. Backend authentication is pending implementation.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-sm text-subtle transition-colors duration-base ease-standard hover:text-brand-400"
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Login
