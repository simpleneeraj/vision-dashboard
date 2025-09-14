export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Vision Dashboard",
  email: "support@visiondashboard.com",
  description:
    "Supercharge your focus with a new tab designed to eliminate distractions and amplify your productivity potential.",

  navigations: [
    { label: "Privacy", href: "/legal/privacy-policy" },
    { label: "Terms", href: "/legal/terms-of-service" },
    { label: "Support", href: "/legal/support" },
    { label: "Credits", href: "/legal/credits" },
    {
      label: "GitHub",
      href: "https://github.com/simpleneeraj/vision-dashboard"
    }
  ],
  links: {
    twitter: "https://twitter.com/visiondashboard",
    sponsor: "https://patreon.com/visiondashboard",
    github: "https://github.com/simpleneeraj/vision-dashboard"
  }
}
