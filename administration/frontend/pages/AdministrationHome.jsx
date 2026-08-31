import { CheckSquare, FileText, Inbox, Mail, Users, UsersRound } from 'lucide-react'
import ModulePlaceholder from '../../../shared-features/frontend/components/ModulePlaceholder.jsx'

const FEATURES = [
  { icon: FileText, name: 'Forms', hint: 'Dynamic recruitment and registration forms.' },
  { icon: Inbox, name: 'Applications', hint: 'Submission review with status history.' },
  { icon: UsersRound, name: 'Executive Panels', hint: 'Panel terms, positions and teams.' },
  { icon: Users, name: 'Members', hint: 'Official membership and panel history.' },
  { icon: Mail, name: 'Bulk Email', hint: 'Campaigns with per-recipient tracking.' },
  { icon: CheckSquare, name: 'Tasks', hint: 'Assignment, submission versions and review.' },
]

function AdministrationHome() {
  return (
    <ModulePlaceholder
      eyebrow="Administration"
      title="Club & Executive Operations"
      lead="This module manages internal club administration — recruitment forms, application review, executive panel history, teams, task workflows and club communications."
      status="Module foundation ready"
      features={FEATURES}
      sourcePath="administration/frontend/"
      handover="The Administration team builds here. Pages belong in this module's frontend directory, backend logic in administration/backend/, and all data work uses the existing adm_* tables alongside shared core_*/infra_* infrastructure."
    />
  )
}

export default AdministrationHome
