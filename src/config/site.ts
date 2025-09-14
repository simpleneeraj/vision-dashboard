export type SiteConfig = typeof siteConfig

export const siteConfig = {
  // Core Info
  name: "Vision Dashboard",
  displayName: "Vision Dashboard - Mindful Productivity Hub",
  tagline: "Focus. Flow. Finish.",
  version: "1.0.0",
  license: "MIT",
  author: "simpleneeraj",
  email: "support@avatarly.app",
  description:
    "Supercharge your focus with a new tab designed to eliminate distractions and amplify your productivity potential.",

  // SEO
  baseUrl: "https://vision.avatarly.app",
  keywords: [
    "Vision Dashboard",
    "Mindful Productivity",
    "Focus",
    "Distraction-free",
    "Chrome Extension",
    "New Tab",
    "Minimal Dashboard"
  ],
  twitterHandle: "@visiondashboard",

  // Navigation (for header/footer)
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

  // External Links
  links: {
    website: "https://vision.avatarly.app/",
    github: "https://github.com/simpleneeraj/vision-dashboard",
    twitter: "https://twitter.com/visiondashboard",
    sponsor: "https://patreon.com/visiondashboard"
  },

  legal: {
    privacy: "/legal/privacy-policy",
    terms: "/legal/terms-of-service",
    support: "/legal/support",
    credits: "/legal/credits"
  },

  stores: {
    chrome:
      "https://chrome.google.com/webstore/detail/vision-dashboard/ajdgnlbfgccplnjeeimeamdemhlkflno",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/vision-dashboard/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/vision-dashboard/<id>"
  }
}
