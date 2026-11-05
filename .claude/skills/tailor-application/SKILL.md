---
name: tailor-application
description: Tailor Deena's resume bullets and cover letter to a job description and score the fit. Use when the user pastes a job description or job URL and wants application materials.
argument-hint: "<job description text or URL>"
---

Delegate this to the `job-marketing` subagent (Agent tool, subagent_type: `job-marketing`) using **Tailor** mode.

Pass it the user's input verbatim:

$ARGUMENTS

If no job description or URL was given, ask the user for one before delegating.

When the agent finishes, relay the saved file path(s), the key highlights, and any gaps or `[[FILL IN]]` placeholders it flagged.
