# Refactor plan

## Purpose

Modernize the original 2023 personal website into a professional-first frontend portfolio while preserving its personality and making the original version available as part of the project's story.

This work is an incremental refactor, not a rewrite. Implement only the PR currently requested by the project owner. Do not pull work forward from later PRs or include unrelated cleanup.

## PR sequence

### PR 1 — Preserve and sanitize the legacy version

**Purpose:** Preserve the original site before changing the active application.

**Scope:**

- Create an annotated tag for the original version.
- Produce a frozen, independent static snapshot at `/legacy/`.
- Make the snapshot self-contained where reasonably possible.
- Replace broken, privacy-sensitive, or unsafe external assets with approved archival alternatives where needed.
- Verify image metadata and sanitize deployed asset copies.
- Document the source commit, build process, and any intentional differences from the original.
- Exclude compiled legacy files from future formatting and linting.

**Guardrails:**

- Do not refactor the active React application.
- Do not modernize, format, or share code between the legacy snapshot and the new application.
- Preserve the original faithfully except where privacy, security, reliability, or asset ownership requires a documented change.
- Do not rewrite Git history without separate explicit approval.

**Dependencies:** PR 0 documentation must be present.

### PR 2 — Modernize the foundation

**Purpose:** Replace deprecated build tooling without redesigning the application.

**Scope:**

- Migrate Create React App to Vite.
- Keep React as the UI library and retain the existing React major version during this migration.
- Remove unused CRA starter files, obsolete starter styles, and unused Web Vitals code.
- Add a supported Node version and appropriate package engine configuration.
- Correct the viewport configuration and add basic site metadata.
- Configure Vite for the GitHub Pages repository base path.
- Keep deployment functional with Vite's output directory.
- Verify the migrated application against the preserved legacy baseline.

**Guardrails:**

- Do not convert the application to TypeScript in this PR.
- Do not redesign components, alter content, or intentionally change behavior.
- Do not upgrade React merely because the toolchain changes.

**Dependencies:** PR 1.

### PR 3 — TypeScript and quality tooling

**Purpose:** Establish explicit contracts and trustworthy automated quality gates.

**Scope:**

- Convert the active application to strict TypeScript.
- Add useful types for portfolio content, quiz data and state, and component props.
- Remove incidental patterns, such as context used only to distribute a constant, when the TypeScript migration makes the simpler boundary clear.
- Add standalone ESLint with React, Hooks, and accessibility rules.
- Add Prettier and EditorConfig.
- Add Vitest and Testing Library with a small, trustworthy smoke baseline.
- Add `lint`, `format:check`, `typecheck`, `test`, and `build` scripts.
- Add continuous integration for the available validation commands.
- Add GitHub Pages deployment through GitHub Actions and remove the local deployment dependency if fully replaced.

**Guardrails:**

- Keep the conversion mechanical and avoid product or visual changes.
- Do not conceal existing accessibility findings. Record any temporary warning baseline clearly; PR 5 must remove it and enforce the final rules.
- Do not weaken TypeScript or lint configuration merely to make CI pass.
- Exclude `/legacy/` from active-source checks.

**Dependencies:** PR 2.

### PR 3A — React 19 upgrade

**Purpose:** Upgrade React independently after the project has type safety and automated quality checks.

**Scope:**

- Upgrade to React 18.3 first and review its React 19 migration warnings.
- Upgrade React, React DOM, and their TypeScript types to the latest stable React 19 release available at implementation time.
- Review the official React 19 upgrade guidance and address applicable runtime, JSX, and type changes.
- Verify dependency compatibility and preserve existing application behavior.
- Run the PR 3 typecheck, lint, test, build, and browser validation against the upgraded application.

**Guardrails:**

- Keep the React major upgrade separate from the TypeScript conversion and product restructuring.
- Do not adopt new React 19 features, React Compiler, Server Components, or architectural patterns without a demonstrated project need.
- Do not apply codemods without reviewing their changes.
- Do not include content, styling, or unrelated component refactors.

**Dependencies:** PR 3.

### PR 4 — Product and content architecture

**Purpose:** Make the new site communicate Noam's professional identity clearly within seconds.

**Scope:**

- Establish the content hierarchy:
  1. Short introduction.
  2. Professional experience.
  3. Skills.
  4. Selected work and projects.
  5. A small personal section.
  6. Contact, LinkedIn, GitHub, and resume.
  7. A link to the original 2023 version.
- Add the professional content supplied by the project owner.
- Retain dark mode and the quiz as the approved playful features.
- Remove the old signup, visitor counter, voting, blinking message, and similar learning-demo features from the new site.
- Move genuinely repeated structured content into typed data where useful.
- Keep unique narrative content readable rather than creating a generic content engine.

**Guardrails:**

- Use only minimal structural styling.
- Do not begin the visual redesign.
- Do not invent professional history, project details, links, or assets; wait for owner-provided content.
- Removal applies only to the new site. The archived legacy snapshot remains unchanged.

**Dependencies:** PR 3A and the required content from the project owner.

### PR 5 — Semantic and accessible UI

**Purpose:** Build the new structure on semantic HTML and accessible interaction patterns before visual polish.

**Scope:**

- Establish appropriate `header`, navigation, `main`, `section`, and footer landmarks.
- Add one clear primary heading and a logical heading hierarchy.
- Replace layout-oriented line breaks with semantic paragraphs and lists.
- Use native links, buttons, and form controls appropriately.
- Make disclosures expose their state and relationships correctly.
- Support keyboard navigation and visible focus.
- Add skip navigation and meaningful link and image names where relevant.
- Respect reduced-motion preferences.
- Resolve the temporary accessibility lint baseline and enforce the agreed rules in CI.

**Guardrails:**

- Prioritize semantics and behavior over appearance.
- Avoid cosmetic redesign beyond what is needed to expose usable focus and state.
- Leave quiz-specific state and interaction refinement for PR 7.

**Dependencies:** PR 4.

### PR 6 — Responsive design and dark mode

**Purpose:** Create the visual foundation and make the portfolio work across modern viewport sizes.

**Scope:**

- Use CSS Modules for component and section styles.
- Keep global CSS limited to shared custom properties, design tokens, reset rules, and document-level base styles.
- Establish typography, spacing, color, width, and elevation decisions.
- Remove active inline styling and arbitrary fixed viewport heights.
- Implement a mobile-first responsive layout.
- Add content-driven breakpoints and eliminate horizontal page scrolling.
- Implement accessible dark mode using system preference, an explicit user control, persistence, and verified contrast.
- Add deliberate focus, hover, active, and reduced-motion styles.
- Verify representative mobile, tablet, and desktop layouts.

**Guardrails:**

- Do not introduce a heavyweight styling framework or component library without separate approval and a concrete need.
- Build a restrained portfolio design foundation, not an elaborate design system.
- Do not add decorative complexity at the expense of clarity or performance.

**Dependencies:** PR 5.

### PR 7 — Interactive components and tests

**Purpose:** Rebuild the retained playful interaction as a robust, tested component.

**Scope:**

- Rework the quiz with semantic answer controls.
- Define clear unanswered, answered, correct, incorrect, completed, and reset states.
- Prevent duplicate scoring and invalid progression.
- Ensure feedback does not rely on color alone.
- Clean up remaining local state and derived state where appropriate.
- Add focused interaction tests for the quiz, disclosures, theme behavior, persistence, and keyboard use.
- Add a small application-level interaction smoke test.

**Guardrails:**

- Do not add a global state library; keep state local unless a demonstrated need emerges.
- Do not restore removed learning-demo features.
- Do not include unrelated content or visual changes.

**Dependencies:** PR 6.

### PR 8 — Final polish and project narrative

**Purpose:** Verify the finished portfolio and document the refactoring story.

**Scope:**

- Run keyboard, accessibility, responsive-browser, and production-build checks.
- Verify both the new site and `/legacy/` on GitHub Pages.
- Finalize the placement and copy for the original-version link.
- Review asset compression, image dimensions, loading behavior, and production bundle output.
- Add current screenshots of the original and refactored versions.
- Rewrite the README with the project purpose, before-and-after story, architecture, legacy strategy, commands, tests, deployment, and important decisions.
- Perform final metadata, link, and browser checks.

**Guardrails:**

- Fix verified polish issues only.
- Do not introduce late architectural changes or new product scope.
- Any material concern discovered during final validation should be reported rather than hidden or patched with an unexplained workaround.

**Dependencies:** All selected preceding PRs.

## Working agreement

For every PR:

1. Confirm the requested scope before editing.
2. Explain significant architectural decisions before implementing them.
3. Preserve behavior unless the PR explicitly authorizes a change.
4. Keep unrelated changes out of the diff.
5. Run the validation available at that stage and report failures honestly.
6. Summarize changes, validation, and remaining concerns after implementation.
7. Suggest a concise kebab-case branch name that reflects the PR's purpose. Use an appropriate prefix such as `chore/`, `refactor/`, or `feat/` when useful.
8. Create or switch to the proposed branch once the previous PR is merged and the working tree is clean. Never switch branches with uncommitted changes.
9. Do not generate a PR description when implementation is initially completed. Allow the project owner to review the changes and request revisions first.
10. Generate a PR description only when explicitly requested, using the final reviewed diff rather than the original plan. Also suggest an appropriate PR title.
11. Keep a requested PR description concise while covering what changed, why it changed, important implementation or engineering decisions, validation, and relevant limitations or follow-up work.
12. Return a requested PR description as raw Markdown in a fenced `markdown` block so it can be copied directly into GitHub while preserving headings, lists, emphasis, and inline code.
13. Do not commit, push, deploy, or create a pull request unless explicitly requested.
