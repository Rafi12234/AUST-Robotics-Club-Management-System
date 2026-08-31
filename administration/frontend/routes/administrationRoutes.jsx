import { Route } from 'react-router-dom'
import AdministrationHome from '../pages/AdministrationHome.jsx'
import FormManagement from '../pages/FormManagement.jsx'
import ApplicationReview from '../pages/ApplicationReview.jsx'
import PanelManagement from '../pages/PanelManagement.jsx'
import MemberManagement from '../pages/MemberManagement.jsx'
import TaskManagement from '../pages/TaskManagement.jsx'
import BulkEmail from '../pages/BulkEmail.jsx'

const administrationRoutes = [
  <Route key="administration-home" path="administration" element={<AdministrationHome />} />,
  <Route key="administration-forms" path="administration/forms" element={<FormManagement />} />,
  <Route key="administration-applications" path="administration/applications" element={<ApplicationReview />} />,
  <Route key="administration-panels" path="administration/panels" element={<PanelManagement />} />,
  <Route key="administration-members" path="administration/members" element={<MemberManagement />} />,
  <Route key="administration-tasks" path="administration/tasks" element={<TaskManagement />} />,
  <Route key="administration-bulk-email" path="administration/bulk-email" element={<BulkEmail />} />,
]

export default administrationRoutes
