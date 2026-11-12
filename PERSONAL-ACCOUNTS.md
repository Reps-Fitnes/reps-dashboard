# Personal Control Room accounts

Owner: getrepsapp@gmail.com. Password plus TOTP authenticator is mandatory. Account identity and TOTP are verified by the existing Supabase Auth service. This uses Reps accounts; enrolling an authenticator adds a factor to that account. Email confirmation is required. New non-owner accounts enter a pending approval queue on their first confirmed-email sign-in. The owner can approve, deny/remove, prepare email-bound invitations, and cancel invitations. Invitations are preapprovals with a shareable sign-up link; this version does not send invitation emails. All approved members share dashboard workspace editing access; only the owner manages people.

Sessions are random 244-bit tokens, stored only as SHA-256 hashes in D1. Browser persistence lasts 24 hours from successful password and TOTP verification, without sliding extension. Only recent password and TOTP claims from a token validated by Supabase /user can mint a session; each upstream session can mint once. Logout deletes the server session. Removing someone deletes their sessions and checks their approved membership on every protected request. Legacy shared-password tokens are rejected.

No passwords, authenticator seeds or Supabase refresh tokens are stored in Control Room. In-progress access tokens remain in browser memory and are discarded after verification. Runtime secrets are preserved. The signed private-sheet receiver is unchanged.

Validation: SQLite-backed tests passed for owner-only management, pending-account denial, approval, email-bound invitations/cancellation, TOTP enforcement, replay prevention, 24-hour expiry, removal, and legacy-session rejection. Production login shell verified visually. Owner's real password/authenticator enrollment and authenticated UI verification require the owner to complete the login in Safari.

Recovery: use the account's Supabase/Reps password recovery; MFA recovery requires a trusted project administrator. No password-only dashboard bypass is provided.

Provider reference: https://supabase.com/docs/guides/auth/auth-mfa/totp
