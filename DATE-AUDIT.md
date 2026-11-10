# Reps date verification — 10 November 2026

All displayed calendar dates in this audit use **Australia/Melbourne**. Source dates are preserved separately from recovered dates and release events.

## Findings

- Audited all 171 original changelog entries and reviewed 435 turns across six Reps implementation chats, including the archived TestFlight chat.
- Recovered dates for all 44 previously undated entries from timestamped implementation records. Original notes are preserved unchanged.
- Earliest available implementation evidence: **13 October 2026, 17:21 Melbourne time**, in “Match Reps app to image references”. Reps v0.2 already existed when that conversation began. This is evidence of development by that date, not the original start date.
- The v0.5 milestone on **14 October 2026** is supported, but it is not the earliest available development record.
- A10–A12 work spans **15–16 October 2026**: implementation first recorded on the 15th, with alignment/completion follow-up on the 16th.
- System Blue/build 79: implementation **7 November**, confirmed external TestFlight Testing **8 November**. The two dates must not be presented as the same event.
- **Idea date and first-code date remain unknown.** July–August 2026 is the owner’s recollection on 10 November, not a verified calendar date. Available ChatGPT listings (442 conversations) and targeted reads did not identify the original idea conversation.

## Independent records checked

- The primary app changelog matches the preserved source byte for byte (279,663 bytes); SHA-256: `2f75eb282dadb4a1277c3efcb3b8dd1bfbfcadd7af0a5cea37b29122ae902c6e`.
- Seven available Xcode archive Info.plist records were read. Builds 72, 73 and 74 were archived on 4 November in Melbourne; 75 and 76 on 5 November. Build 75’s UTC date is 4 November, but its Melbourne time is **5 November at 00:35**. Two re-archives of build 71 were created on 4 November; that does not move the original Watch icon patch from 27 October.
- The public Reps website repository was created on **4 November 2026**; the dashboard repository on **8 November 2026** (Melbourne calendar dates). Those repository creation dates do not establish the iOS app’s start date.
- The working iOS app has no Git history available in its current folder. The website and dashboard commit histories are separate histories.

## Evidence levels

- Date recovered from chat: **44** entries.
- Timestamp corroborated: **128** entries.

Timestamp corroboration means a dated implementation conversation supports the patch. It does not prove that Apple approved or publicly released that build. Source-dated-only entries retain their explicit note date without claiming independent verification. Future owner-added notes remain owner-supplied unless evidence is added.

## Per-entry audit

| Entry | Recorded note date | Audited implementation date | Evidence | Source |
|---|---|---|---|---|
| 001 · Watch icon correction — build 71 | 2026-10-27 | 2026-10-27 | Timestamp corroborated | Fix Reps notes action items / 01a17b65-88fd-7851-99b1-507db10c32fd |
| 002 · Apple Watch companion — build 70 | 2026-10-27 | 2026-10-27 | Timestamp corroborated | Fix Reps notes action items / 01a17861-5d6c-7ac1-ad9f-109ca6c29900 |
| 003 · Routine create control | 2026-10-27 | 2026-10-27 | Timestamp corroborated | Fix Reps notes action items / 01a17857-85a4-7322-9424-77e48ee288e2 |
| 004 · iPhone Duo readiness — build 66 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a17745-fa9d-7ce3-afa8-de8601e5af52 |
| 005 · Reps Pro page — build 65 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a17734-5cba-70c2-a6ce-5302fa8eeeb5 |
| 006 · Reps Pro custom alerts — build 64 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a176d7-8b06-7500-a727-d6d71f25fc2c |
| 007 · Simpler navigation — build 63 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a176b4-aa0c-7361-8286-05107bc9998d |
| 008 · Community video autoplay — build 62 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a17676-b59f-70d1-a933-5b76288463e6 |
| 009 · Plate calculator — build 61 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a17655-7694-7a43-8611-7c32ae7494e1 |
| 010 · Tour previews and checklist update — build 60 | 2026-10-26 | 2026-10-26 | Timestamp corroborated | Fix Reps notes action items / 01a17647-062b-71c3-b665-0cc9b7500a84 |
| 011 · Native language names — build 59 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a1720a-8993-7c70-a49e-f76667baf4f9 |
| 012 · App tour and Reps Pro comparison — build 58 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171f2-3518-7563-89d9-771e733524a8 |
| 013 · Profile Pro and Support cleanup — build 57 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171ee-acec-7781-9d63-e07caab4a966 |
| 014 · Gold Reps Pro crowns — build 56 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171ec-8f74-7d33-b81d-5a053d6d71e2 |
| 015 · Profile Reps Pro entry — build 55 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171eb-2ba1-7841-b784-7f3773db7630 |
| 016 · Reps Pro prices — build 54 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171e9-7da4-7f20-9676-39bcc931d5c1 |
| 017 · Custom support amount — build 53 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171e5-152a-7732-b820-e984fcaabd74 |
| 018 · Home, Profile and theme refresh — build 52 | 2026-10-25 | 2026-10-25 | Timestamp corroborated | Fix Reps notes action items / 01a171af-e0ef-78b3-97d4-e35fafac0730 |
| 019 · Replay sharing and Home cards — build 51 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16dd6-6a6c-78b1-8f31-ce07ba0da07b |
| 020 · Advanced training insights — included in build 51 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16dd6-6a6c-78b1-8f31-ce07ba0da07b |
| 021 · Animated Reps Replay — build 49 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16d17-7113-75d2-ac20-5ab40c0b90f6 |
| 022 · Records navigation — build 48 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16d10-0f29-7b40-991c-6b855d1c3e7d |
| 023 · Anatomy theme colours — build 47 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16d09-52aa-7d12-8c75-905ab475fa74 |
| 024 · Themed Pro badge — build 46 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16d04-abfa-7040-b4cf-74c9584f7580 |
| 025 · Profile crown — build 45 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16cfd-d81c-7a60-ab46-770f10a1b287 |
| 026 · Profile crown — build 44 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16cf5-76bf-7881-a481-c3b170a07db3 |
| 027 · Gym settings — build 43 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16cf0-f013-7282-b33f-a6eac3315f2c |
| 028 · Workout Media date alignment — build 42 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16cea-d889-74a0-a418-d16dd3138496 |
| 029 · Achievements — build 41 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16cd8-f184-7923-a326-ecb373b8d891 |
| 030 · Routines profile shortcut — build 40 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16ccf-c1f8-72d1-a8b0-32441d2d941f |
| 031 · Workouts and gyms — build 39 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16cc0-da66-7c20-8748-c06b9b3690ec |
| 032 · Community icon counts — build 38 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16b44-ffa9-7e12-8ed9-cc6bfae30164 |
| 033 · UI review — 24 October 2026 — build 36 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16b19-3fbc-7321-a7f9-e92779b214de |
| 034 · Progress and workout media — build 37 | 2026-10-24 | 2026-10-24 | Timestamp corroborated | Fix Reps notes action items / 01a16b36-5800-7d81-adef-b997ce7c5052 |
| 035 · Matching Home card heights — build 35 | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a167d9-4472-7cd3-85e5-eb1ceac69a83 |
| 036 · iPad layout and anatomy visibility — 23 October 2026 | 2026-10-23 | 2026-10-23 | Timestamp corroborated | Fix Reps notes action items / 01a167b3-4511-7fe2-a998-cbc38952004a |
| 037 · Create Routine spacing — 0.11.0 (32) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a167a9-e8af-7213-baa3-a9b2b41b4a00 |
| 038 · Choose exercises while creating routines — 0.11.0 (31) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a167a2-ad6f-7d51-8165-6db852c56768 |
| 039 · Reusable custom exercises — 0.11.0 (30) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a1679c-277e-79c2-9eba-2b74beb4e1da |
| 040 · Smooth anatomy maps — 0.11.0 (28) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a16780-070f-7d43-9f79-413aebabf9de |
| 041 · Icon, library images and Coach — 0.11.0 (27) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a166f6-1831-70a1-b4e4-d18041f265e5 |
| 042 · Post bookmark toggle — 0.11.0 (24) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a166ee-bff9-76a3-95ef-0f91eabe72c6 |
| 043 · Workout Moment playback and camera — 0.11.0 (20) | Not recorded | 2026-10-23 | Date recovered from chat | Fix Reps notes action items / 01a166df-922f-7982-a8a1-05561f355aa3 |
| 044 · Member profile totals | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a1532d-5665-7e62-8388-ecde70dd4321 |
| 045 · Password onboarding and account security UI | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a1531a-636b-7b31-9ee6-88725976b284 |
| 046 · Unified Reps account and welcome screen | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15302-117b-7e03-a978-1543ea9a7f10 |
| 047 · Pro preview chart containment | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a1522d-a7ab-7f60-a3cf-4b4120eba6e2 |
| 048 · Match supplied Pro-screen reference | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15229-feaf-7543-a107-b640cf6d0f47 |
| 049 · Reps Pro redesign | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15223-f2ab-7e23-949f-ed5475b61224 |
| 050 · Match the profile Pro card | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15221-22c2-7b10-b62d-0aa502a21196 |
| 051 · Pro crown and grey card | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a1521d-be00-7091-85a7-7e6fe471199a |
| 052 · Transparent Pro logo and text entry | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15219-02c6-7612-a6b9-758386cd1888 |
| 053 · Planned Reps Pro pricing | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15214-0a02-7cb2-9f97-580e30234020 |
| 054 · Gold Reps Pro branding | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15214-0a02-7cb2-9f97-580e30234020 |
| 055 · Reps Pro feature card | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a1520a-61f7-7bc3-af22-54c5b1c26e2c |
| 056 · Brighter cream text | Not recorded | 2026-10-19 | Date recovered from chat | Straighten arm positioning / 01a15205-d5f2-7c93-a270-7aac9bb8d384 |
| 057 · Cream Reps wordmark | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14ee6-b979-7fc1-8fbe-2faad47b3ae4 |
| 058 · Restore anatomy shading | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14ee2-3b45-7871-8f0e-03a539d060ff |
| 059 · Theme-aware in-app logo | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14edf-d132-7a51-8a59-8f4ae40dac2e |
| 060 · Theme surfaces and owner-managed Pro grants | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14ed1-05ef-71b0-8880-f1c912e9fd15 |
| 061 · Owner account Pro access | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14ec9-3125-7423-946c-16cb8ed1646b |
| 062 · Reps Pro colours and themes | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14ec3-8ad8-7252-bfbc-cba114328c74 |
| 063 · Interactive graphs throughout Reps | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e52-f7cb-7b01-b640-ca42452630ee |
| 064 · Profile polish | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e4e-6c65-7a42-9e37-73d7f0b4b251 |
| 065 · Routine chart point inspection | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e48-8fe6-7ca0-b105-b529e002065c |
| 066 · Profile header and routine progress graphs | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e30-61ae-7a11-adc7-5d3aa7ab68fb |
| 067 · Settings, profile connections and routine layout | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e1e-cf55-76b2-8893-05f853e37c95 |
| 068 · Public Hevy routine share links | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e13-3ac5-74f3-b7bf-717b25df678f |
| 069 · Collapsible routine folders and Community tabs | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14e10-22cf-7a21-8f95-5a060cdf665c |
| 070 · Workout Library search field | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14dce-e69b-71f0-bf49-0ac74acc964b |
| 071 · Folder pinning and independent active state | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14dcb-3896-7493-bf67-b819f2341087 |
| 072 · Routines library, folders and active schedules | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14dbf-9eb0-71d1-bc68-48ab52c76dc0 |
| 073 · Rest counter and optional Home cards | Not recorded | 2026-10-18 | Date recovered from chat | Straighten arm positioning / 01a14db1-c8ef-7310-8c65-cdb6e7685733 |
| 074 · Hevy import presentation — 18 October 2026 | 2026-10-18 | 2026-10-18 | Timestamp corroborated | Straighten arm positioning / 01a14dae-96ed-7302-ba7c-ed67961cc241 |
| 075 · Launch crash and repeated decoding — 18 October 2026 | 2026-10-18 | 2026-10-18 | Timestamp corroborated | Straighten arm positioning / 01a14da3-f1c1-7ab3-993e-8e76c1348885 |
| 076 · In-app wordmark — 18 October 2026 | 2026-10-18 | 2026-10-18 | Timestamp corroborated | Straighten arm positioning / 01a14c95-2da1-75f2-b1d7-5a2b3ac570dd |
| 077 · Community feed and Home ordering — 18 October 2026 | 2026-10-18 | 2026-10-18 | Timestamp corroborated | Straighten arm positioning / 01a14c89-893e-7001-af18-a5ee33bc77df |
| 078 · Cloudflare Community media — 18 October 2026 | 2026-10-18 | 2026-10-18 | Timestamp corroborated | Straighten arm positioning / 01a14c7a-4ea0-75f1-bc8e-a8b7c7d0df52 |
| 079 · Community 24-hour retention — 18 October 2026 | 2026-10-18 | 2026-10-18 | Timestamp corroborated | Straighten arm positioning / 01a14c3a-18d2-7341-b424-e5e5ccc4aebc |
| 080 · Community profile connection repair — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a14967-6e0c-7aa2-908b-293c7f107ff7 |
| 081 · Following, Explore and people search — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a1493d-c72d-7ed2-8bc1-921434a9c5ce |
| 082 · Home widget appearance and icon fit — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a14922-ac5f-79c1-a1e1-1446e8395208 |
| 083 · Hevy CSV imports — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a14914-c68b-75b2-ae4e-e7489afb147a |
| 084 · Community post pages and leaf logo — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a148f9-3004-7c30-8f70-eadba66c6471 |
| 085 · Live Activity update — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a144f7-1e57-7e00-aadf-38dfb5b7237b |
| 086 · Background Live Activity actions and light mode — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a148e4-6ee0-7410-910b-ebe6b311de15 |
| 087 · Workout summary theme, caption and heart rate — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a147bd-65b7-7c91-83d8-5daa9ce3aa83 |
| 088 · Community recovery and account deletion — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a147b3-dc33-72d0-911a-ce180e729d2f |
| 089 · Home hold-to-edit and drag — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a147b1-9eb2-7253-81d9-8a46b74b5444 |
| 090 · Next Workout on Home — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a147ae-1908-7033-af2f-e6a1c21efa3b |
| 091 · Screen polish — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a147a7-4d80-70d0-b389-8b8286a29180 |
| 092 · Workout layout — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a1478f-8d7e-7ab0-83c6-1c755ec1bf9a |
| 093 · Measurement units — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a1478c-4132-72b2-acb2-d43dafe4b899 |
| 094 · Profile, weight progress and Apple Health — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a1477c-57a6-71d1-b6a2-7e013e4627fc |
| 095 · Sharper muscle maps — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a1476d-bd38-7300-b41f-9b581938427c |
| 096 · Adaptive sage-wing app icon — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a14531-e3dc-76b2-a94f-f6e6f31b209d |
| 097 · Profile and Home units — 17 October 2026 | 2026-10-17 | 2026-10-17 | Timestamp corroborated | Straighten arm positioning / 01a14526-62e5-7a61-8d0c-d4e193972a37 |
| 098 · Reps 0.9.1 (16) | Not recorded | 2026-10-16 | Date recovered from chat | Match Reps app to image references / 01a1431e-ff76-7ba0-bf0f-a97d96d43114 |
| 099 · Reps 0.9.0 (15) — Batch B | Not recorded | 2026-10-16 | Date recovered from chat | Match Reps app to image references / 01a14319-6b17-72a3-8b8e-185e70ccae86 |
| 100 · Reps 0.8.3 (14) — A10–A12 | Not recorded | 2026-10-15–2026-10-16 | Date recovered from chat | Match Reps app to image references / 01a13f8b-7f1d-7342-9dca-e872e926f122; Match Reps app to image references / 01a141ce-d8f1-7683-8614-bb9bca3d95e5 |
| 101 · A10 / A10a / A10b / A10c — saved-routine review | Not recorded | 2026-10-15–2026-10-16 | Date recovered from chat | Match Reps app to image references / 01a13f8b-7f1d-7342-9dca-e872e926f122; Match Reps app to image references / 01a141ce-d8f1-7683-8614-bb9bca3d95e5 |
| 102 · Alignment follow-up — 16 October 2026 | 2026-10-16 | 2026-10-16 | Timestamp corroborated | Match Reps app to image references / 01a141ce-d8f1-7683-8614-bb9bca3d95e5 |
| 103 · Reps Batch A core — 15 October 2026 | 2026-10-15 | 2026-10-15 | Timestamp corroborated | Match Reps app to image references / 01a13eac-c526-7c82-b645-c5c2c5ed4008 |
| 104 · Reps 0.7 · Workout moments | Not recorded | 2026-10-15 | Date recovered from chat | Match Reps app to image references / 01a13aca-9772-78c1-b6e3-ad2fdc5d117c |
| 105 · Reps 0.6 | Not recorded | 2026-10-14 | Date recovered from chat | Match Reps app to image references / 01a13950-6e8c-7741-9071-ae0a4e4ec82b |
| 106 · Reps 0.5 — PDF roadmap implementation | 2026-10-14 | 2026-10-14 | Timestamp corroborated | Match Reps app to image references / 01a137b3-d1f6-7723-9479-77a85aabb4ef |
| 107 · Apple Health hub and skipped-feature cleanup — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18024-23cb-7fd3-9ad5-5ef2bf10c35e |
| 108 · Pro widgets expansion — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a1802d-37cc-7a52-95a1-7bd0448dabca |
| 109 · Health settings simplification and iPad gym theme — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18050-b48c-78c0-baea-bd3d797c67ba |
| 110 · Working-project cleanup — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18065-60bb-7121-9b3e-2f65da0f6325 |
| 111 · Settings UI consistency — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a1807d-1f03-7bf1-8fb1-bbae888a5b17 |
| 112 · Completed workout summary — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a1815c-4608-7d51-a244-c32d7b2b1fcf |
| 113 · Summary sharing controls — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18160-9bef-7711-b47a-f70714ade911 |
| 114 · Remembered sharing and row alignment — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18164-2a6e-7181-9c15-390e4ec96784 |
| 115 · Centred deletion confirmations — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18166-18d8-7e83-bb42-47deac9ff236 |
| 116 · Completed-summary deferred work — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a18169-67e8-7943-87e2-56362c2c1108 |
| 117 · Share review polish and Apple Watch live recording — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a1818c-809c-76e3-bc69-46e483a2fd76 |
| 118 · Summary action labels and heart-rate toggle — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a181a6-9bd2-7730-9431-d44aa116c5fd |
| 119 · One-page workout publishing — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a181a9-2539-7732-9f66-882507d96ce2 |
| 120 · Single optional heart-rate sharing switch — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a181ac-f0ec-73c2-b354-7eb8480e69fc |
| 121 · Clearer themes and smoother screen updates — 28 October 2026 | 2026-10-28 | 2026-10-28 | Timestamp corroborated | Find partially implemented features / 01a181c2-b57d-7d92-9507-f21526fb6800 |
| 122 · Height field unit label — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185b9-3025-79e2-8685-469a299507ed |
| 123 · Height value/unit alignment — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185bd-6ea5-72f3-8e8e-28a9a408b895 |
| 124 · Settings descriptions and training length units — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185c0-431b-7ce1-bfee-af5dae09887a |
| 125 · More app languages — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185e6-e4d8-7393-be05-9beb8cb4346c |
| 126 · Simplified Chinese language option — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185ec-5d05-7d43-9444-4059fb7c5a4f |
| 127 · Telugu and more Indian languages — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185ed-c8ce-7ba3-8d42-a80d27d0d416 |
| 128 · Additional Australian and international language options — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185f3-17c0-7662-9627-712949c8ca84 |
| 129 · Compact workout logging, recovery and progression — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a185ff-e850-7f81-a33b-686243647900 |
| 130 · One-month welcome Pro for new accounts — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a186d1-5eff-7c22-8606-06cb24478e9b |
| 131 · Translation work resumed: Tamil, Telugu and workout controls — 29 October 2026 | 2026-10-29 | 2026-10-29 | Timestamp corroborated | Find partially implemented features / 01a186fa-b2e2-7072-ac50-8126b3d83b47 |
| 132 · Hold-and-drag exercise order and shorter workout menus — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18ba2-0011-7d81-b66d-443ed3758aaa |
| 133 · Visible reorder controls and saved-theme startup — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18bb8-dc0a-7f33-82ae-602022b5410a |
| 134 · Compact inline lift-and-reorder for exercises and Home — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18bce-5656-7231-99ab-ca3562b041c2 |
| 135 · Fix compact rows refusing to move — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18c07-06b9-74c2-965e-844fa6b8a10a |
| 136 · Compact routine library cards — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18c36-38ea-74b1-a8e6-f83bbd90b33f |
| 137 · Routine saved-author alignment — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18c41-0d29-7990-aadc-895025cb3c0d |
| 138 · Open folders and return tabs to their defaults — 30 October 2026 | 2026-10-30 | 2026-10-30 | Timestamp corroborated | Find partially implemented features / 01a18c4e-0d86-7292-becf-6f7b2d5c2144 |
| 139 · Home calendar streak — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a19489-7ebd-7f62-aca5-9a8b26628dc4 |
| 140 · Simplify Home calendar — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a1948a-d84e-76b2-a5dd-407bed065184 |
| 141 · Compact Home calendar height and workout markers — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a1948d-14d0-7b31-81f2-a49aeda17b8a |
| 142 · Expanded calendar workout names — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a1948d-f259-7b42-985b-5ef0ceced0d7 |
| 143 · Expanded calendar coloured name bubbles — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a1948f-c32e-7160-b1f0-83c2cb08b0fd |
| 144 · Calendar spacing correction — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a19492-0552-7a30-b86d-67652460f214 |
| 145 · Physical Apple Watch signing and install — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194b9-0095-7321-86e4-a1db8a7f8499 |
| 146 · Watch set logging layout — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194bb-8e85-73b3-bdf5-ebd8442622be |
| 147 · Workout-style Watch pages — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194bf-f5ff-76e3-b34f-2ed520d8622f |
| 148 · Watch set editor cleanup — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194c3-ac65-79c1-855d-557d6749a136 |
| 149 · Watch horizontal controls and discard — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194c5-71be-7f01-81a6-a468d3e7e6dd |
| 150 · Watch exercise icon and ordering — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194c8-7de3-7ec3-838a-b68d193038fb |
| 151 · Watch hold/compact/drag exercise ordering — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194cb-26d2-7eb1-9488-118c50b7b56f |
| 152 · Compact Watch exercise cards and theme accents — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194ce-3454-7062-a1c1-901d3106fd4e |
| 153 · Watch rest, previous reference, sync status and complications — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194d3-74b7-7f60-9e4d-617092c31298 |
| 154 · Automatic Watch rest presentation and shared toggle — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194d9-65dd-7991-8323-8c1f654cf4ea |
| 155 · Watch rest popup and toggle placement — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194dd-06fb-7fb3-8860-f1c3a1007161 |
| 156 · Watch Controls icon alignment and theme surfaces — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a194df-343f-7790-82ae-5760f7500ee8 |
| 157 · Rest control position and on/off icon — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a19611-e164-71b1-94f9-c3ca2d8418ca |
| 158 · Watch/phone checklist fixes and text routine import — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a19613-ae6a-7b21-8fc3-130540af3cc5 |
| 159 · Import option icons and YouTube guides — 1 November 2026 | 2026-11-01 | 2026-11-01 | Timestamp corroborated | Find partially implemented features / 01a1962f-2494-7b93-9549-53d6b3dc5ffe |
| 160 · 2026-11-04 — Guest access (build 72) | 2026-11-04 | 2026-11-04 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1a570-702a-7423-b354-77c609a7e6e5 |
| 161 · 2026-11-04 — iCloud workout sync (build 73) | 2026-11-04 | 2026-11-04 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1a57d-db50-7be2-8f48-623d353a631d |
| 162 · 2026-11-04 — Apple Pro subscriptions and website links (build 74) | 2026-11-04 | 2026-11-04 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1a68b-8950-7c32-ae5d-a53b1bdf46b9 |
| 163 · 2026-11-05 — Regional currency and outside-app purchase requests (build 75) | 2026-11-05 | 2026-11-05 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1a889-00b3-7aa0-a00d-a671d8d952b0 |
| 164 · 2026-11-05 — Country settings and streamlined Pro footer (build 76) | 2026-11-05 | 2026-11-05 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1a8be-214f-7c50-a9f8-4dda63b6195e |
| 165 · 2026-11-05 — Advert screen capture | 2026-11-05 | 2026-11-05 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1aa3b-b240-7403-96d9-f53195d24cad |
| 166 · 2026-11-06 — Home order, welcome Pro pop-up and follow actions | 2026-11-06 | 2026-11-06 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1aee9-41e3-7e41-9676-9557e4ab8429 |
| 167 · 2026-11-06 — TestFlight build 77 delivered | 2026-11-06 | 2026-11-06 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1aef1-f668-76a0-ad64-9b96aaa857b6 |
| 168 · Security hardening — 7 November 2026 (build 78) | 2026-11-07 | 2026-11-07 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1b54d-5260-78a3-a412-385920dd42c5 |
| 169 · System Blue theme — 7 November 2026 (build 79) | 2026-11-07 | 2026-11-07 | Timestamp corroborated | Prepare Reps for TestFlight / 01a1b55f-ab19-7390-ae1a-334c4af94a45; Prepare Reps for TestFlight / 01a1b7ec-a58e-73f3-adbb-bcf8e5f6d3df |
| 170 · 2026-11-08 — Grey anatomy base for System Blue (build 80) | 2026-11-08 | 2026-11-08 | Timestamp corroborated | Find Reps project updates / 01a1b7f7-bfcf-7c90-93ef-c70714d57582 |
| 171 · 2026-11-08 — Auto-fill additional workout sets (build 81) | 2026-11-08 | 2026-11-08 | Timestamp corroborated | Find Reps project updates / 01a1b9da-8aa2-7cd0-baf3-221f1dbe6b04 |

The added 13 October milestone is a timestamped baseline, separate from the 171 original patch-note entries. Raw private chat transcripts, operational workspace data and credentials are not included in this public audit.
