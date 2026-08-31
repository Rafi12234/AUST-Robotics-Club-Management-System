# AUSTRC Database Table Ownership — Neon PostgreSQL

**Database Implementation Version:** `1.1.0`  
**Tables:** 56

Ownership is unchanged by the migration from MySQL syntax to Neon PostgreSQL.

---

# 1. Ownership matrix

| Area | Shared/Core | Event Team | Administration Team |
|---|---|---|---|
| `core_*`, `infra_*` schema | **OWNER** | Request/review | Request/review |
| `evt_*` schema | Review shared impact | **OWNER** | Do not modify |
| `adm_*` schema | Review shared impact | Do not modify | **OWNER** |
| Read/reference Shared | Yes | Yes | Yes |
| Event FK → Admin | N/A | **Forbidden** | N/A |
| Admin FK → Event | N/A | N/A | **Forbidden** |
| Shared FK → modules | **Forbidden** | N/A | N/A |

---

# 2. Shared/Core — 14 tables

**Owner:** Shared/Core Database Maintainers

- `core_users`
- `infra_files`
- `core_user_profiles`
- `core_members`
- `core_roles`
- `core_permissions`
- `core_role_permissions`
- `core_user_roles`
- `infra_document_templates`
- `infra_generated_documents`
- `infra_email_templates`
- `infra_email_messages`
- `infra_email_delivery_attempts`
- `infra_audit_logs`

Shared/Core owns system identity, club-member identity, RBAC, files, reusable documents, email delivery, and audit infrastructure. Any structural change can affect both application teams and therefore requires coordinated review.

---

# 3. Event Management — 20 tables

**Owner:** Event Management Team

- `evt_events`
- `evt_event_segments`
- `evt_participants`
- `evt_registrations`
- `evt_registration_segments`
- `evt_registration_fields`
- `evt_registration_field_options`
- `evt_registration_answers`
- `evt_qr_codes`
- `evt_service_types`
- `evt_event_services`
- `evt_service_usage`
- `evt_event_sessions`
- `evt_event_staff`
- `evt_attendance`
- `evt_results`
- `evt_result_revisions`
- `evt_notification_events`
- `evt_certificate_eligibility`
- `evt_certificates`

Event owns events, segments, participants, registrations, dynamic registration, QR/services, sessions, attendance, staff, results, notifications, eligibility, and participant certificates.

Administration should not directly modify these tables.

---

# 4. Administration — 22 tables

**Owner:** Administration Team

- `adm_forms`
- `adm_form_fields`
- `adm_form_field_options`
- `adm_form_submissions`
- `adm_form_answers`
- `adm_form_answer_options`
- `adm_application_reviews`
- `adm_application_status_history`
- `adm_panel_terms`
- `adm_positions`
- `adm_teams`
- `adm_panel_memberships`
- `adm_member_certificates`
- `adm_email_campaigns`
- `adm_email_campaign_recipients`
- `adm_tasks`
- `adm_task_assignees`
- `adm_task_status_history`
- `adm_task_submissions`
- `adm_task_submission_files`
- `adm_task_submission_reviews`
- `adm_task_comments`

Administration owns dynamic forms/applications, panel terms/history, positions, teams, executive certificates, bulk email campaigns, and task workflow/collaboration.

Event Management should not directly modify these tables.

---

# 5. Shared concept ownership

| Concept | Correct tables |
|---|---|
| Account/system identity | `core_users` |
| User profile | `core_user_profiles` |
| Official AUSTRC member | `core_members` |
| Roles/permissions | `core_roles`, `core_permissions`, mapping tables |
| File metadata | `infra_files` |
| Document templates/generated files | `infra_document_templates`, `infra_generated_documents` |
| Email templates/delivery | `infra_email_templates`, `infra_email_messages`, `infra_email_delivery_attempts` |
| Audit | `infra_audit_logs` |
| Event participant | `evt_participants` |
| Event registration | `evt_registrations` |
| Event result | `evt_results` |
| Event certificate | `evt_certificates` |
| Admin form/application | `adm_forms`, submission/answer/review tables |
| Panel history | `adm_panel_memberships` |
| Bulk campaign | `adm_email_campaigns`, `adm_email_campaign_recipients` |
| Task workflow | `adm_tasks` and task child/history tables |

---

# 6. When another module needs a change

A team must request the owning team's change.

Example:

```text
Event needs additional core user capability
        |
        v
Shared schema proposal
        |
        v
Shared/Core review
        |
        +--> Event impact
        `--> Administration impact
        |
        v
PostgreSQL migration
        |
        v
PR + review + merge
```

Do not bypass ownership by creating a duplicate module-local table.

---

# 7. PostgreSQL migration ownership

```text
database/migrations/shared/          -> Shared/Core owner
database/migrations/event/           -> Event owner
database/migrations/administration/  -> Administration owner
```

A migration's folder does not permit it to modify another module's tables.

---

# 8. Suggested CODEOWNERS

Replace placeholders with real GitHub teams/users.

```text
/database/migrations/shared/            @db-core-owner @event-lead @admin-lead
/database/schema/                       @db-core-owner
/database/DATABASE_RULES.md             @db-core-owner
/database/TABLE_OWNERSHIP.md            @db-core-owner

/database/migrations/event/             @event-db-owner @db-core-owner
/event-management/                      @event-team

/database/migrations/administration/    @admin-db-owner @db-core-owner
/administration/                        @admin-team
```

---

# 9. Change risk

### Level 1 — module-local additive
Owning team review.

### Level 2 — Shared/Core additive
Shared owner + affected module review.

### Level 3 — breaking/high-risk
Shared owner + Event lead + Administration lead + migration/deployment plan.

High risk includes:

- Drop/rename columns
- PK/FK redesign
- Changing identity model
- Changing table ownership/prefix
- Cross-module dependency
- Moving a concept into/out of Shared/Core

---

# 10. Ownership count

| Owner | Prefix | Count |
|---|---|---:|
| Shared/Core | `core_*`, `infra_*` | 14 |
| Event Management | `evt_*` | 20 |
| Administration | `adm_*` | 22 |
| **Total** |  | **56** |
