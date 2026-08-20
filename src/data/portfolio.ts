type SkillGroup = {
  name: string;
  skills: readonly string[];
};

type EngineeringHighlight = {
  title: string;
  summary: string;
  technologies: readonly string[];
};

export const skillGroups = [
  {
    name: "Languages and runtime",
    skills: ["TypeScript", "JavaScript", "Node.js"],
  },
  {
    name: "Frontend",
    skills: ["React", "React Router", "Remix", "HTML", "CSS"],
  },
  {
    name: "Testing and observability",
    skills: ["Playwright", "End-to-end testing", "Sentry"],
  },
  {
    name: "CI/CD and developer tools",
    skills: ["GitHub Actions", "Git"],
  },
  {
    name: "Cloud and infrastructure",
    skills: ["AWS Lambda", "ECS", "ECR", "S3", "Terraform"],
  },
] satisfies readonly SkillGroup[];

export const engineeringHighlights = [
  {
    title: "Workspace product experience",
    summary:
      "Implemented the frontend for a large workspace-based product experience, including workspace creation, invitations, listings, dedicated pages, and workspace-scoped project flows. Refactored the existing homepage architecture and delivered the feature behind a feature flag.",
    technologies: ["React", "TypeScript", "Feature flags"],
  },
  {
    title: "Campaign landing experience",
    summary:
      "Built a responsive campaign landing page with animations, CTA and terms-of-use flows, and tailored behavior for authenticated and unauthenticated visitors.",
    technologies: ["React", "Responsive UI", "Product flows"],
  },
  {
    title: "Product quality and observability",
    summary:
      "Integrated Sentry with source maps and a custom plugin that worked around dependency limitations. Expanded Playwright end-to-end coverage and nightly environment validation to surface release-blocking regressions earlier.",
    technologies: ["Sentry", "Playwright", "Source maps"],
  },
  {
    title: "Release and deployment automation",
    summary:
      "Designed reusable GitHub Actions automation that reduced release preparation from hours or days to minutes, with clear deployment-stage visibility. Built supporting AWS Lambda functions and Terraform infrastructure for deployment validation, test dispatching, approval, and rollback flows.",
    technologies: ["GitHub Actions", "Node.js", "AWS", "Terraform", "ECS"],
  },
] satisfies readonly EngineeringHighlight[];
