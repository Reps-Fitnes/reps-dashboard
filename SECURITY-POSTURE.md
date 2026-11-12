# Security posture and history controls — 12 November 2026

Security is now a separate Control Room section. Run security checks to refresh signed-out API denial, invalid-session rejection, disallowed-origin preflight, configuration presence and limited Supabase schema discovery. Reports store only status and evidence, never key values or user rows. The authenticated /api/security endpoint stores its latest report separately in dashboard_service_status id 2. Existing workspace records and health id 1 are preserved.

The live run returned 8 passed checks, 6 review items and no failed/unavailable checks. This is a limited point-in-time posture report, not proof against data leaks. Manual review remains required for individual MFA-based admin access, table RLS and cross-account operations, media ownership and signed links, secret scanning, backup recovery and provider account controls. The dashboard does not automatically change database policies or credentials.

History controls now have visible search/sort labels, equal 44px control heights, a custom dropdown arrow, consistent spacing, wrapping at smaller widths and no invisible reporting-period select taking up header space. Existing 172 history records and export/add behavior remain intact.

Validation: Node request-handler tests passed for anonymous, invalid and expired tokens, hostile origins, JSON requirements, cached reports, safe probe outcomes, secret redaction and no user-table queries. Client syntax checked. Safari verified the live report and the aligned history controls. The terminal HTTP probe was blocked by Cloudflare's edge (403); authenticated browser checks verified the deployed handler instead.

Deployed Worker: reps-control-room-api. Deployment: 3d98b0eb4973465483ee7aa6c6d697ef. All six existing bindings and observability preserved.
