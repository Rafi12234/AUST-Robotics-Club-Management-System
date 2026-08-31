import { Route } from 'react-router-dom'
import EventManagementHome from '../pages/EventManagementHome.jsx'
import EventList from '../pages/EventList.jsx'
import EventDetails from '../pages/EventDetails.jsx'
import Registration from '../pages/Registration.jsx'
import ParticipantPortal from '../pages/ParticipantPortal.jsx'
import Attendance from '../pages/Attendance.jsx'
import ResultManagement from '../pages/ResultManagement.jsx'
import Certificate from '../pages/Certificate.jsx'

const eventRoutes = [
  <Route key="event-home" path="event-management" element={<EventManagementHome />} />,
  <Route key="event-list" path="events" element={<EventList />} />,
  <Route key="event-details" path="events/:eventId" element={<EventDetails />} />,
  <Route key="event-registration" path="events/:eventId/register" element={<Registration />} />,
  <Route key="participant-portal" path="events/:eventId/portal" element={<ParticipantPortal />} />,
  <Route key="event-attendance" path="events/:eventId/attendance" element={<Attendance />} />,
  <Route key="event-results" path="events/:eventId/results" element={<ResultManagement />} />,
  <Route key="event-certificate" path="events/:eventId/certificate" element={<Certificate />} />,
]

export default eventRoutes
