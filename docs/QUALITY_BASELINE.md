# Quality baseline

## Purpose

PR 3 introduces strict TypeScript, typed linting, accessibility linting, formatting checks, and a smoke test without pulling semantic UI work forward from later PRs.

Lint warnings in this document are intentionally visible. They are not disabled or suppressed, and new lint errors continue to fail validation.

## Temporary accessibility warnings

The active application currently has two accessibility warnings:

- `src/components/Quiz.tsx` reports `jsx-a11y/click-events-have-key-events` because quiz answers are clickable non-interactive elements without keyboard handling.
- `src/components/Quiz.tsx` reports `jsx-a11y/no-static-element-interactions` for the same answer controls.

These findings reflect existing quiz behavior rather than a TypeScript migration regression. PR 5 will establish the semantic control baseline, while the quiz's complete interaction model remains PR 7 scope.

Until PR 5, `npm run lint` succeeds with these warnings visible. Do not add warning suppressions or weaken the rules to make the output quiet.
