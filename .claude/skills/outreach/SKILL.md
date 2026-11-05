---
name: outreach
description: Draft LinkedIn and email outreach (connection note, DM, cold email, follow-up) to a recruiter or hiring manager for Deena's job search.
argument-hint: "<company> <role> [contact name/title or profile text]"
---

Delegate this to the `job-marketing` subagent (Agent tool, subagent_type: `job-marketing`) using **Outreach** mode.

Pass it the user's input verbatim:

$ARGUMENTS

If the company or role is missing, ask for it before delegating.

When the agent finishes, relay the saved file path(s), the key highlights, and any gaps or `[[FILL IN]]` placeholders it flagged.
