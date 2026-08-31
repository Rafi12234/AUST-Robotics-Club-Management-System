import { useLocation } from 'react-router-dom'

/**
 * Animates only the workspace content on route change; the shell stays mounted.
 * Keying on pathname restarts the enter animation without unmounting the shell.
 */
function PageTransition({ children }) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className="animate-page-enter">
      {children}
    </div>
  )
}

export default PageTransition
