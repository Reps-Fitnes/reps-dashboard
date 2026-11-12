# Dated security review evidence

Control Room's security report can now incorporate a trusted, private review record stored server-side. Only the five manual-review categories may be augmented; signed-out access tests cannot be overridden. Evidence is dated, expires after at most seven days, and returns to Needs review when expired or invalid. Missing review data preserves the original checks.

Detailed findings are kept in the authenticated dashboard, not in this public repository. This source update does not change provider credentials, database policies, billing or alert subscriptions.

Validation covers valid evidence, expiry, future-date rejection and prevention of overriding the access-control checks.
