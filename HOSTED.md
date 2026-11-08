# Published Reps dashboard source

Live site: https://reps-control-room.harshapartiban25.chatgpt.site

`hosted-source.mjs` contains the complete published source snapshot (119 files), including the app, authenticated API routes, D1 schema/migration, build configuration, dependency lockfile, and Sites helpers. It excludes secrets, local runtime files, database contents, node_modules and build output.

Source commit: `810251c5ddd48c71b71abd9cd746115c2397dbe8`.

Extract into a new folder with Node.js 22 or newer:

```sh
node hosted-source.mjs ./hosted
cd hosted
npm ci
```

The root `server.mjs` and `index.html` are the earlier local edition. The extracted `hosted/` project is the published edition. Its README explains hosting, storage and integrations. The source archive is stored as a self-extracting text file because the current GitHub connection cannot write this private repository and Safari's upload picker remains disabled; web-editor commits work.

## Website access

The website is currently owner-only through Sites sign-in. Repository access and website access are separate. There is **no automatic GitHub-collaborator check** in this deployment. Keep it owner-only until a GitHub-backed sign-in/membership integration is available and verified. Adding a GitHub collaborator alone does not grant website access.
