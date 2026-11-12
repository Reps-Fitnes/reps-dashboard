# Reps Control Room website

Open **https://reps-fitnes.github.io/reps-dashboard/** and enter the shared dashboard password. The password is verified by the Cloudflare backend before any workspace data loads. It is stored as a runtime secret, never in this repository.

- **Website:** GitHub Pages, deployed from `main` / root.
- **Backend:** `reps-control-room-api` in the owner's Cloudflare account, with D1 database `reps-control-room`.
- **Current source:** run `node cloudflare-source.mjs new-output-directory` to extract the website, backend, deployment configuration and setup notes. Do not commit runtime secret values or exported workspace data.
- **Protection:** signed sessions expire after one hour; repeated login attempts are limited. Lock clears the session from the current browser. Anyone with the shared password has the same dashboard access; GitHub collaborator membership is not checked.
- **Repository visibility:** public source and patch history remain readable on GitHub. The password protects live dashboard data and edits, not committed files.
- **History:** 171 documented entries through build 81; the original idea date remains approximate.
- **Analytics and backend integrations:** retain their existing connection status. Publishing does not automatically connect App Store analytics, Google Sheets or Supabase credentials.

The files `hosted-source.mjs` and `HOSTED.md` describe the earlier Sites deployment. The material below documents the original local version.

---

# Reps Control Room

Private operations dashboard for **Reps: Train & Track**, owned by Harshavardhan Parthiban.

## Run

Requires Node.js 22 or newer. No packages to install.

```sh
node server.mjs
```

Open http://localhost:4318. The server listens only on `127.0.0.1`; it is not a publicly hosted website. It stores your workspace in `~/.reps-dashboard/workspace.json`, outside the repository, using atomic writes and a revision check to reject conflicting edits. Export JSON backups from Notes & connections. Keep backups private.

## Included

- Daily downloads, sessions, active devices, crashes and AUD proceeds, with date filters and a download trend.
- CSV/TSV metric import with validation, duplicate-date rejection and replacement confirmation; manual daily snapshots. Use **Download template** in Analytics. Blank means unavailable, not zero. Active devices shows the latest recorded day and is never summed across dates. Sessions, downloads and crashes sum only recorded days.
- Read-only on-demand Supabase Auth / REST and website / privacy-page reachability checks. No service role, user records, workout data or mutations are involved.
- Incidents with investigation, fix, monitoring and resolution notes.
- Suggestions summary, keyword themes, search, priority, owner and triage status. Promote suggestions into roadmap tasks without duplicates.
- Roadmap, release targets, working notes, JSON backup and restore.

## Verified source snapshot

On **8 November 2026**, `Form Responses 1` in [Reps Suggestions](https://docs.google.com/spreadsheets/d/1YmTjgMYjIAnKuttqu66SDVpaJHwweNshDpg9F8UUnBs/edit#gid=242054259) contained only `Timestamp` and `What's your suggestion?` headers and no responses. The dashboard starts empty. Future summaries are computed from imported/synced records; they are deterministic counts and keyword groupings, not an AI interpretation.

The available local Reps source snapshot uses Supabase for Community and CloudKit for sync. No Firebase, Mixpanel, Amplitude, PostHog or Sentry SDK was found; the included privacy text says there is no third-party behavioural analytics SDK. This is a snapshot finding, not an audit of every current release. The open App Store Connect tab identifies app `6830516828`; no live performance values were retrieved.

## Connect backend checks

Set these environment variables on your machine (never commit keys):

- `SUPABASE_URL`: the project URL; the observed Reps project is `https://lzyzoelsgbwsdendqqmj.supabase.co`.
- `SUPABASE_ANON_KEY`: the project publishable/anon key, used only for Auth and REST gateway probes. Do not use a service-role key.

Then restart the server and click **Run read-only checks**. An HTTP success proves reachability only. It does not establish database CPU health, database access permissions, successful workouts, storage correctness, historical uptime or CloudKit sync. Database performance remains in [Supabase observability](https://supabase.com/docs/guides/observability/metrics); CloudKit diagnostics stay in the Apple console. Probes time out after eight seconds, do not return response bodies and do not follow redirects.

For Node 22, you can keep variables in an ignored local `.env` file and start with `node --env-file=.env server.mjs`. Never put credentials in dashboard notes or a backup.

## Connect the private suggestions sheet

Choose one:

1. Export the `Form Responses 1` tab as CSV in Google Sheets and select **Import sheet CSV**. Timestamp + suggestion text identifies a row; repeated imports preserve existing triage. Two exactly identical timestamp/text rows are treated as the same suggestion.
2. Set `GOOGLE_ACCESS_TOKEN` to an existing authorized OAuth access token with `spreadsheets.readonly` scope and permission to read the sheet. Tokens expire; replace on your machine when needed.
3. For refreshable OAuth, set `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` and `GOOGLE_REFRESH_TOKEN` from your existing authorized OAuth app. Tokens are used only server-side. Follow Google's OAuth setup yourself; do not paste keys into GitHub or chat.

Click **Sync private sheet**. It reads up to row 10000 from the exact source tab and never writes to Google Sheets. It preserves triage and records the sync time. Rows removed from the source are retained locally until you remove them, so work history is not silently lost. Editing a source suggestion's text makes it a new identity; close the older record if needed. The sheet does **not** need to be published or made public.

## App Store Connect analytics

There is no live Apple API integration in this version. Start with exported data and normalize it to the downloadable template:

```csv
date,downloads,sessions,active_devices,crashes,proceeds_aud,source
```

One row per day in YYYY-MM-DD format; nonnegative whole counts, AUD decimal proceeds, unavailable cells left blank. Consolidate country/device segments before importing. Do not paste raw segmented Apple reports into this format or mix currencies. Dates matching existing records are replaced after confirmation. Keep missing days visible; counts are partial-period totals when coverage is incomplete. The source column should identify the report and its relevant definition/timezone.

Apple's [Analytics Reports API](https://developer.apple.com/help/app-store-connect-analytics/overview/analytics-reports-api) is the next integration step: a report-specific adapter must handle authorization, report requests, instances, segments, aggregation, suppression, delayed data and currency. It is intentionally not represented as connected here. Do not infer crash-free rates from crash counts without a matching denominator.

## Access and collaboration

The GitHub repository is **private**, with no Pages workflow. Only the owner and explicitly invited collaborators can access the source through GitHub. Invite people under Settings → Collaborators; no collaborators were added automatically.

Repository privacy does not secure an independently hosted dashboard. This server intentionally binds only to loopback and checks Host, Origin and a per-process request token for writes. Do not tunnel or expose it publicly. To share a running dashboard with contributors, deploy behind individual authenticated identities and an explicit allowlist first, use HTTPS, add shared durable storage, and back it up. Each local copy otherwise has its own data; repository collaborator status does not synchronize workspace records.

## Useful weekly review

1. Record the latest App Store Connect metrics and check report coverage.
2. Run backend probes, inspect Supabase / CloudKit diagnostics, and log incidents.
3. Sync suggestions, assign priority and owner, and promote accepted feedback.
4. Review the target release and attach verification notes to completed work.
5. Export a workspace backup.

© 2026 Harshavardhan Parthiban. All rights reserved.

## Transparent browser icon — 12 November 2026

The tab favicon, Apple touch icon and general manifest icons use the current mint wing PNG with an alpha channel, without a baked-in white/black tile. Versioned local asset URLs refresh cached icons. The Android maskable icon keeps its existing full background and safe area. Safari/macOS controls the system backdrop; websites cannot supply native Icon Composer layers or force Liquid Glass rendering. Existing installed web apps may retain their old icon until re-added.

## Security posture and history UI

See [SECURITY-POSTURE.md](SECURITY-POSTURE.md) for live-check coverage, review limits and deployment verification. The current source archive includes the Security section and transparent icon assets.
