import { CategoryKey } from "~typings/enums"

import { aiApps } from "./ai"
import { appleApps } from "./apple"
import { developerApps } from "./developer"
import { googleApps } from "./google"
import { microsoftApps } from "./microsoft"
import { socialApps } from "./social"

export const tabs = [
  {
    key: CategoryKey.HOME,
    title: "Google"
  },
  {
    key: CategoryKey.APPLE,
    title: "Apple"
  },
  {
    key: CategoryKey.MICROSOFT,
    title: "Microsoft"
  },
  {
    key: CategoryKey.DEVELOPER,
    title: "Developer"
  },
  {
    key: CategoryKey.AI,
    title: "AI"
  },
  {
    key: CategoryKey.SOCIAL,
    title: "Social & Entertainment"
  }
]

export const tabsWithApps = [
  {
    key: CategoryKey.HOME,
    title: "Google",
    links: googleApps
  },
  {
    key: CategoryKey.APPLE,
    title: "Apple",
    links: appleApps
  },
  {
    key: CategoryKey.MICROSOFT,
    title: "Microsoft",
    links: microsoftApps
  },
  {
    key: CategoryKey.DEVELOPER,
    title: "Developer",
    links: developerApps
  },
  {
    key: CategoryKey.AI,
    title: "AI",
    links: aiApps
  },
  {
    key: CategoryKey.SOCIAL,
    title: "Social & Entertainment",
    links: socialApps
  }
]
