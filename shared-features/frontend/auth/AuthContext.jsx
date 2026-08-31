import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'austrc.auth.session'

function readStoredSession() {
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    window.sessionStorage.removeItem(STORAGE_KEY)
    return null
  }
}

/**
 * TEMPORARY FRONTEND-ONLY AUTHENTICATION.
 *
 * This provider does NOT authenticate anyone. It exists so the application
 * shell, routing and navigation can be built and handed over.
 *
 * TODO(backend-auth): replace `login` with a real call to the shared auth API
 * (core_users -> password verify -> core_user_roles -> core_roles ->
 * core_role_permissions -> core_permissions) and store the returned session.
 * The route guard is UX only; every protected API must enforce authentication
 * and permissions on the backend.
 */
export function AuthProvider({ children }) {
  // Restored synchronously so a refresh never flashes the login screen.
  const [user, setUser] = useState(readStoredSession)

  const login = useCallback(async ({ email }) => {
    // Simulated latency so loading states are exercised during handover.
    await new Promise((resolve) => setTimeout(resolve, 550))

    const nextUser = {
      email,
      fullName: email.split('@')[0].replace(/[._-]+/g, ' '),
      // No roles/permissions are asserted here on purpose — the backend owns those.
      permissions: [],
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
    return nextUser
  }, [])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      initializing: false,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext
