# Job Marketing Agent

A Claude Code agent that helps market Deena for jobs. It uses the facts in
`profile.md`, so its drafts never invent experience.

## Files
| Path | Purpose |
|---|---|
| `.claude/agents/job-marketing.md` | The agent: rules and four work modes |
| `.claude/skills/*/SKILL.md` | Slash commands that hand tasks to the agent |
| `career/profile.md` | Candidate facts. **Keep updated; fill in the TODOs** |
| `career/applications.md` | Application tracker (pipeline table) |
| `career/output/` | Generated resumes, cover letters and outreach drafts |

## Usage (in Claude Code, from this repo)
```
/tailor-application <paste job description or URL>
/outreach Acme Corp "Senior Data Analyst" Jane Doe, Analytics Recruiter
/recruiter-qa Why are you interested in demand planning roles?
/job-search                     # find new matching roles
/job-search review              # pipeline summary + overdue follow-ups
/job-search Applied to Acme Data Analyst today
```
You can also just ask in plain English, e.g. "use the job-marketing agent to
write a cover letter for this posting…".

## First-time setup
Open `career/profile.md` and replace the **TODO** items (work authorization,
remote/relocation, salary, start date). The agent asks about these until
they're filled in.
