import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Landing from '../pages/Landing.jsx'
import Login from '../../shared-features/frontend/auth/Login.jsx'
import ProtectedRoute from '../../shared-features/frontend/auth/ProtectedRoute.jsx'
import Loader from '../../shared-features/frontend/components/Loader.jsx'
import eventRoutes from '../../event-management/frontend/routes/eventRoutes.jsx'
import administrationRoutes from '../../administration/frontend/routes/administrationRoutes.jsx'

// Authenticated surfaces load on demand so the public landing stays lightweight.
const Dashboard = lazy(() => import('../pages/Dashboard.jsx'))

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route element={<AuthLayout />}>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Authenticated */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<Loader label="Loading workspace" />}>
                <Dashboard />
              </Suspense>
            }
          />
          {eventRoutes}
          {administrationRoutes}
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
