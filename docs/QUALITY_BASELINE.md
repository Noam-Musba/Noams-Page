# Quality baseline

## Purpose

PR 3 introduces strict TypeScript, typed linting, accessibility linting, formatting checks, and a smoke test without pulling semantic UI work forward from later PRs.

Lint warnings in this document are intentionally visible. They are not disabled or suppressed, and new lint errors continue to fail validation.

## Temporary accessibility warnings

The active application currently has five accessibility warnings:

- `src/components/Quiz.tsx` reports `jsx-a11y/click-events-have-key-events` because quiz answers are clickable non-interactive elements without keyboard handling.
- `src/components/Quiz.tsx` reports `jsx-a11y/no-static-element-interactions` for the same answer controls.
- `src/components/SignIn.tsx` reports three `jsx-a11y/label-has-associated-control` warnings because its labels are not programmatically associated with their inputs.

These findings reflect existing behavior rather than TypeScript migration regressions. PR 5 will replace or repair the affected controls as part of the semantic and accessible UI work. The quiz's complete interaction model remains PR 7 scope.

Until PR 5, `npm run lint` succeeds with these warnings visible. Do not add warning suppressions or weaken the rules to make the output quiet.
