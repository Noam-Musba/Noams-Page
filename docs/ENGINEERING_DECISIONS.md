# Engineering decisions

This document records decisions already agreed for the portfolio refactor. Change a locked decision only after discussing the reason and receiving approval from the project owner.

## Product direction

- The new site is a professional-first portfolio that retains some personality.
- Within a few seconds, a visitor should understand: Noam → Software Engineer → Frontend → React and TypeScript → Professional experience.
- The planned content hierarchy is:
  1. A short introduction to who Noam is.
  2. Professional experience.
  3. Skills.
  4. Selected work and projects.
  5. A small personal section.
  6. Contact, LinkedIn, GitHub, and resume.
  7. A link to the original 2023 version.
- Structure, semantics, content, and architecture come before visual polish.
- Dark mode and the quiz will remain as purposeful playful elements.
- The old signup, visitor counter, voting controls, blinking message, Pokémon link, and similar learning-demo features will not appear in the new site.
- Removed features remain visible in the archived original version.
- Professional history, project details, links, copy, and approved media will be supplied by the project owner when their PR is ready.

## Legacy preservation

- The original site dates from 2023.
- Preserve it as a frozen, independent static snapshot served at `/legacy/`.
- Preserve the original source state with an annotated Git tag.
- The active application must not import legacy components, styles, or dependencies.
- Do not refactor or automatically format the archived site.
- Preserve the snapshot as faithfully as reasonably possible.
- Privacy, security, broken external resources, and asset ownership are valid reasons for documented archival differences.
- A normal follow-up commit cannot remove sensitive data from existing Git history. Any history rewrite requires separate explicit approval.

## Technology and architecture

- React remains the UI library.
- TypeScript is the target application language and is part of the project's engineering-growth story.
- Vite will replace Create React App.
- GitHub Pages remains the host.
- Target modern evergreen browsers.
- Use CSS Modules for component and section styles.
- Keep global CSS limited to shared custom properties, design tokens, reset rules, and document-level base styles.
- Keep application state local by default.
- Do not add a router unless genuine first-class pages emerge.
- Do not add a global state library without a demonstrated need.
- Do not add a backend or authentication unless a later product requirement genuinely needs one.
- Do not add a heavyweight styling framework, component library, or application framework without a concrete reason and explicit approval.
- Prefer native platform behavior and semantic HTML over custom simulations of controls.
- Prefer simple, maintainable solutions over abstraction for its own sake.
- Do not add dependencies without explaining the concrete problem they solve.

## Quality requirements

- Accessibility is a first-class engineering requirement.
- Responsive behavior is a first-class engineering requirement.
- The layout should be mobile-first and must not depend on arbitrary fixed viewport heights or horizontal scrolling.
- Dark mode must respect user preference, expose an accessible control, persist explicit choices, and maintain sufficient contrast.
- Interactive feedback must not rely on color alone.
- Reduced-motion preferences must be respected.
- Tests should protect meaningful interactions and state transitions rather than static implementation details.
- Do not pursue abstractions, memoization, code splitting, or test coverage targets without evidence that they add value.
- Never hide, suppress, or misrepresent warnings and failures merely to make validation pass.

## Collaboration and change management

- Refactor incrementally in small, reviewable PR-sized changes.
- Work only within the scope of the currently requested PR.
- Avoid opportunistic unrelated refactors.
- Preserve behavior unless the current PR explicitly changes it.
- Explain significant architectural decisions before implementing them.
- Keep mechanical, behavioral, product, and visual changes separate when combining them would obscure review.
- After implementation, summarize what changed, what was validated, and any remaining concerns.
- For each PR-sized task, suggest a concise kebab-case branch name that reflects its purpose, using a prefix such as `chore/`, `refactor/`, or `feat/` when useful.
- Do not create or switch branches unless explicitly requested.
- Do not generate a PR description automatically when implementation is completed.
- Generate a PR description only when explicitly requested after review, and base it on the final reviewed diff rather than the original plan.
- When requested, suggest a PR title and concisely cover what changed, why it changed, important decisions, validation, and relevant limitations or follow-up work.
- Do not commit, push, create a pull request, or deploy unless explicitly requested.
- Do not start a later PR automatically after completing the requested PR.
