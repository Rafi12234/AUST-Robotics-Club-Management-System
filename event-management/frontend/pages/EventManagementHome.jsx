import { Award, ClipboardList, Layers, QrCode, Trophy, UserCheck } from 'lucide-react'
import ModulePlaceholder from '../../../shared-features/frontend/components/ModulePlaceholder.jsx'

const FEATURES = [
  { icon: ClipboardList, name: 'Registration', hint: 'Dynamic, per-event registration forms.' },
  { icon: Layers, name: 'Event Segments', hint: 'Multiple competition categories per event.' },
  { icon: QrCode, name: 'QR Services', hint: 'One participant code for authorized services.' },
  { icon: UserCheck, name: 'Attendance', hint: 'Session check-in and check-out tracking.' },
  { icon: Trophy, name: 'Results', hint: 'Segment-wise scoring with revision history.' },
  { icon: Award, name: 'Certificates', hint: 'Eligibility and participant certificate issuing.' },
]

function EventManagementHome() {
  return (
    <ModulePlaceholder
      eyebrow="Event Management"
      title="Participant & Event Operations"
      lead="This module manages the complete participant journey — from event setup and registration through attendance, service collection, results and certificates."
      status="Module foundation ready"
      features={FEATURES}
      sourcePath="event-management/frontend/"
      handover="The Event Management team builds here. Pages belong in this module's frontend directory, backend logic in event-management/backend/, and all data work uses the existing evt_* tables alongside shared core_*/infra_* infrastructure."
    />
  )
}

export default EventManagementHome
