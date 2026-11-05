---
name: recruiter-qa
description: Answer recruiter questions, screening questions or application-form fields about Deena's background, in Deena's voice.
argument-hint: "<question(s)>"
---

Delegate this to the `job-marketing` subagent (Agent tool, subagent_type: `job-marketing`) using **Recruiter Q&A** mode.

Pass it the user's input verbatim:

$ARGUMENTS



When the agent finishes, relay the saved file path(s), the key highlights, and any gaps or `[[FILL IN]]` placeholders it flagged.
