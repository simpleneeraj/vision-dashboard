import { CategoryKey } from "~typings/enums"

import { aiApps } from "./ai"
import { appleApps } from "./apple"
import { developerApps } from "./developer"
import { featuredApps } from "./featured"
import { googleApps } from "./google"
import { microsoftApps } from "./microsoft"
import { socialApps } from "./social"

export const tabs = [
  {
    key: CategoryKey.HOME,
    title: "Featured"
  },
  {
    key: CategoryKey.APPLE,
    title: "Apple Apps"
  },
  {
    key: CategoryKey.MICROSOFT,
    title: "Microsoft Apps"
  },
  {
    key: CategoryKey.DEVELOPER,
    title: "Developer Tools"
  },
  {
    key: CategoryKey.AI,
    title: "AI Tools"
  },
  {
    key: CategoryKey.SOCIAL,
    title: "Social Media"
  }
]

export const tabsWithApps = [
  {
    key: CategoryKey.HOME,
    title: "Featured",
    links: featuredApps
  },
  {
    key: CategoryKey.GOOGLE,
    title: "Google Apps",
    links: googleApps
  },
  ...(process.env.PLASMO_BROWSER === "safari"
    ? [
        {
          key: CategoryKey.APPLE,
          title: "Apple Apps",
          links: appleApps
        }
      ]
    : []),

  {
    key: CategoryKey.MICROSOFT,
    title: "Microsoft Apps",
    links: microsoftApps
  },
  {
    key: CategoryKey.DEVELOPER,
    title: "Developer Tools",
    links: developerApps
  },
  {
    key: CategoryKey.AI,
    title: "AI Tools",
    links: aiApps
  },
  {
    key: CategoryKey.SOCIAL,
    title: "Social Media",
    links: socialApps
  }
]
