import { Outlet } from 'react-router-dom'
import AppShell from '../../shared-features/frontend/components/AppShell.jsx'
import PageTransition from '../../shared-features/frontend/components/PageTransition.jsx'

/** Authenticated layout: persistent shell with an animated workspace. */
function MainLayout() {
  return (
    <AppShell>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </AppShell>
  )
}

export default MainLayout
