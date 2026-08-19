# Repository guidance

This is a frontend portfolio refactor, not a rewrite. Work only on the currently requested PR and do not make opportunistic unrelated changes.

## Durable rules

- Preserve existing behavior unless the current PR explicitly changes it.
- Prefer simple, maintainable solutions over abstraction for its own sake.
- Do not introduce dependencies without explaining the concrete need.
- Do not add a router, global state library, backend, or application framework unless explicitly approved.
- The new site is professional-first while retaining some personality.
- TypeScript is the target language.
- Accessibility and responsive behavior are first-class requirements.
- `/legacy/` is an archival snapshot. Do not refactor or format it.
- Never hide, suppress, or misrepresent warnings and failures merely to make validation pass.
- Explain significant architectural decisions before implementing them.
- After implementation, summarize what changed, what was validated, and any remaining concerns.
- For each PR-sized task, suggest a concise kebab-case branch name, but do not create or switch branches unless explicitly requested.
- Do not draft a PR description unless explicitly requested after review; then base it on the final reviewed diff and include a suggested title.
- Do not commit, push, create a pull request, or deploy unless explicitly requested.

## Project context

- Read [docs/REFACTOR_PLAN.md](docs/REFACTOR_PLAN.md) for the agreed PR sequence, scope, and guardrails.
- Read [docs/ENGINEERING_DECISIONS.md](docs/ENGINEERING_DECISIONS.md) for locked product and engineering decisions.

When validation scripts are introduced, this file should be updated with the required completion commands.
