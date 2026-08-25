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

### PR 6A — CSS architecture

**Purpose:** Give styles clear ownership before changing the visual design.

**Scope:**

- Move component and section styles into CSS Modules.
- Keep global CSS limited to document-level reset and base styles.
- Add small shared layout and section modules for genuinely repeated rules.
- Replace active inline styles with equivalent module classes.

**Guardrails:**

- Preserve the current appearance, responsive behavior, and theme behavior as closely as practical.
- Do not introduce the visual redesign, new breakpoints, or persistent theme state.
- Do not introduce a styling framework, component library, or new dependency.

**Dependencies:** PR 5.

### PR 6B — Responsive visual design

**Purpose:** Create a restrained professional visual foundation that works across modern viewport sizes.

**Scope:**

- Establish the light-theme typography, spacing, color, width, and elevation decisions.
- Implement the professional-first visual design using the CSS Module boundaries from PR 6A.
- Replace arbitrary fixed sizing with a mobile-first responsive layout.
- Add content-driven breakpoints and eliminate horizontal page scrolling.
- Add deliberate focus, hover, active, and reduced-motion styles.
- Verify representative mobile, tablet, and desktop layouts.

**Guardrails:**

- Keep this PR light-theme only; do not add theme state or persistence.
- Build a focused portfolio design foundation, not an elaborate design system.
- Do not add decorative complexity at the expense of clarity or performance.
- Do not change quiz behavior.

**Dependencies:** PR 6A.

### PR 6C — Dark mode

**Purpose:** Add predictable, accessible theming independently of the responsive redesign.

**Scope:**

- Follow the visitor's system color preference by default.
- Provide an explicit light/dark theme control and persist the user's choice.
- Add dark-theme values to the semantic design tokens established in PR 6B.
- Synchronize the browser theme-color metadata.
- Verify contrast, system preference, persisted preference, and keyboard operation.
- Add focused tests for theme behavior and persistence.

**Guardrails:**

- Do not redesign components beyond adjustments required for dark-theme contrast.
- Do not change quiz behavior or add unrelated interaction work.
- Keep theme state local and do not add a state-management dependency.

**Dependencies:** PR 6B.

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

**Dependencies:** PR 6C.

### PR 8 — Targeted content boundaries and project links

**Purpose:** Make repeated portfolio content easier to maintain without turning every piece of copy into configuration.

**Scope:**

- Move repeated navigation, background, and contact-link data into typed portfolio data.
- Keep unique narrative copy colocated with the semantic markup that gives it context.
- Add a clear link to this portfolio's source repository.
- Apply early destructuring in touched collection-rendering code where it improves readability.
- Keep external links as standard links so visitors control whether they open a new tab.

**Guardrails:**

- Do not extract every string or build a generic content-rendering system.
- Do not import production copy into tests solely to share expected text.
- Do not convert the single experience entry into a collection without a second entry or another concrete need.
- Do not add routes, reorganize component folders, rename files, or perform function-style churn.
- Do not include visual redesign or unrelated cleanup.

**Dependencies:** PR 7.

### PR 9 — Lint policy hardening

**Purpose:** Strengthen automated feedback after the application structure and interactions are stable.

**Scope:**

- Promote the React Hooks exhaustive-dependencies rule from a warning to an error.
- Review the effective ESLint rules against the current source and add only rules that catch concrete defects or accessibility problems.
- Keep local and continuous-integration validation behavior aligned.
- Resolve newly surfaced findings explicitly rather than suppressing them.

**Guardrails:**

- Do not add stylistic lint rules already owned by Prettier.
- Do not add plugins or dependencies without a demonstrated gap in the existing tooling.
- Do not hide warnings, disable rules broadly, or change source code without understanding the finding.
- Do not combine lint policy changes with unrelated product or architecture work.

**Dependencies:** PR 8.

### PR 10 — Final polish and project narrative

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

**Dependencies:** All selected preceding PRs, including PR 9.

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
