import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext.jsx'

/**
 * UX-level route guard only. Backend endpoints must independently enforce
 * authentication and permissions — see TODO(backend-auth) in AuthContext.
 */
function ProtectedRoute() {
  const { isAuthenticated, initializing } = useAuth()
  const location = useLocation()

  // Avoid redirecting to /login before the stored session has been read.
  if (initializing) return null

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

export default ProtectedRoute
