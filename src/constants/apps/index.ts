import { CategoryKey } from "~typings/enums"

import { aiApps } from "./ai"
import { appleApps } from "./apple"
import { developerApps } from "./developer"
import { googleApps } from "./google"
import { microsoftApps } from "./microsoft"
import { socialApps } from "./social"
import { teachersDay } from "./teacher"

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
    title: "Social"
  }
]

export const tabsWithApps = [
  {
    key: CategoryKey.TEACHER,
    title: "🎉 Happy Teachers' Day!",
    links: teachersDay
  },
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
  }
  // {
  //   key: CategoryKey.AI,
  //   title: "AI",
  //   links: aiApps
  // },
  // {
  //   key: CategoryKey.SOCIAL,
  //   title: "Social",
  //   links: socialApps
  // }
]
