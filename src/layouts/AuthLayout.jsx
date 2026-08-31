import { Outlet } from 'react-router-dom'

/** Full-bleed layout for unauthenticated screens; the page owns its composition. */
function AuthLayout() {
  return <Outlet />
}

export default AuthLayout
