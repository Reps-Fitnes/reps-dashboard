# Automatic private Suggestions sheet sync

Source: Reps Suggestions (Responses), Form Responses 1. The sheet is Restricted, verified in Safari as Private to only me. Apps Script project: https://script.google.com/u/0/home/projects/178uB8Tn0G0AMjoa11_xqIz-USpjNMdrDXxfYaea-moEA_DNktHMp4Usn/edit .

The bound script reads only the timestamp and suggestion columns. It signs requests to the fixed Control Room receiver with REPS_SYNC_KEY from private Script Properties; the matching SHEETS_SYNC_SECRET is stored as a Worker secret. Neither value is included in source. Requests expire after five minutes; unknown source IDs, invalid signatures and oversized data are rejected. Existing suggestions/triage survive duplicate sends and source deletions. Concurrent writes retry with revision checks.

Install installRepsSync once with Google authorization to add form-submit, edit and five-minute triggers. The script does not modify sheet cells or publish the sheet. Browser Control Room refreshes clean state every minute without replacing unsaved edits. Existing OAuth/CSV paths remain available.

Receiver unit tests pass for signatures, stale requests, source validation, concurrent-write retries, duplicates and triage preservation. Backend and private Script Properties are configured. Google authorization completed. Verified 12 November 2026: installRepsSync completed successfully, sent 0 source suggestions, and all three triggers are present. The time-based trigger reports 0% errors. Backend delivery metadata confirms receipt at 2026-11-12T09:05:40.978Z with count 0. No test submissions were added.
