type SkillGroup = {
  name: string;
  skills: readonly string[];
};

type EngineeringHighlight = {
  title: string;
  summary: string;
  technologies: readonly string[];
};

type NavigationItem = {
  label: string;
  href: string;
};

type BackgroundItem = {
  heading: string;
  description: string;
};

type ContactLink = {
  label: string;
  href: string;
};

export const navigationItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  {
    label: "Engineering highlights",
    href: "#engineering-highlights",
  },
  { label: "Background", href: "#background" },
  { label: "About me", href: "#about" },
  { label: "Quiz", href: "#quiz" },
  { label: "Contact", href: "#contact" },
] satisfies readonly NavigationItem[];

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

export const backgroundItems = [
  {
    heading: "Education",
    description:
      "B.Sc. in Computer Science, Technion – Israel Institute of Technology · 2018–2022",
  },
  {
    heading: "Leadership",
    description:
      "Commander Course Instructor, Israeli Air Defense · 2014–2017. Leadership, training, and operational responsibility.",
  },
  {
    heading: "Languages",
    description: "Hebrew (native) · English (fluent)",
  },
] satisfies readonly BackgroundItem[];

export const contactLinks = [
  {
    label: "Email Noam",
    href: "mailto:noammusbajobs@gmail.com",
  },
  {
    label: "Noam on LinkedIn",
    href: "https://www.linkedin.com/in/noam-musba",
  },
  {
    label: "Noam on GitHub",
    href: "https://github.com/Noam-Musba",
  },
] satisfies readonly ContactLink[];
