---
name: job-search
description: Find job postings that match Deena's profile, or review and update the application tracker (career/applications.md).
argument-hint: "[search terms | 'review' | status update, e.g. 'Applied to Acme Data Analyst']"
---

Delegate this to the `job-marketing` subagent (Agent tool, subagent_type: `job-marketing`) using **Job search and tracking** mode.

Pass it the user's input verbatim:

$ARGUMENTS

With no arguments, search for new matching roles using the target roles and locations in career/profile.md and add the best leads as Saved.

When the agent finishes, relay the saved file path(s), the key highlights, and any gaps or `[[FILL IN]]` placeholders it flagged.
