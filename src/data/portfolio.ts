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

type LatelyItem = {
  label: string;
  description: string;
  icon: string;
};

type SideQuestAction = {
  label: string;
  href: string;
};

type SideQuestChips = {
  label: string;
  items: readonly string[];
};

export type SideQuestItem = {
  label: string;
  title: string;
  description: string;
  action?: SideQuestAction;
  chips?: SideQuestChips;
  updates?: readonly LatelyItem[];
};

export const navigationItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  {
    label: "Engineering highlights",
    href: "#engineering-highlights",
  },
  { label: "Background", href: "#background" },
  { label: "Side quests", href: "#side-quests" },
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

const latelyItems = [
  {
    label: "Gaming",
    description: "Aska and Slay the Spire 2",
    icon: "🎮",
  },
  {
    label: "Watching",
    description:
      "Anime for the win! Just finished Hell's Paradise, any recommendations?😉",
    icon: "📺",
  },
  {
    label: "Training",
    description: "Full-body workout and running, yes on purpose",
    icon: "💪",
  },
  {
    label: "Learning",
    description: "Getting the guitar solos right",
    icon: "🎸",
  },
] satisfies readonly LatelyItem[];

export const sideQuestItems = [
  {
    label: "Archive",
    title: "The Original Site",
    description:
      "Before the refactor, this was the portfolio I built while learning frontend development. It’s rough, playful, and a pretty good snapshot of where I started.",
    action: {
      label: "See where this started →",
      href: `${import.meta.env.BASE_URL}legacy/`,
    },
  },
  {
    label: "A tiny challenge",
    title: "How well do you know me?",
    description:
      "A tiny quiz about the person behind the code. No technical interview questions, promise.",
    action: {
      label: "Take the quiz →",
      href: "#quiz",
    },
  },
  {
    label: "Music",
    title: "Off the Clock",
    description:
      "When I’m not coding, there’s a good chance I’m playing guitar, listening to metal, or trying to get a solo to sound slightly less terrible.🤘🏽",
    chips: {
      label: "Music interests",
      items: ["Guitar", "Metal", "Rock"],
    },
  },
  {
    label: "Currently",
    title: "Lately",
    description:
      "Things I’m currently spending an unreasonable amount of free time on.",
    updates: latelyItems,
  },
] satisfies readonly SideQuestItem[];
