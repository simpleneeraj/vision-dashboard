import { BLUR_PRESETS, OPACITY_PRESETS } from "~constants/presets"
import type { AppStateTypes } from "~typings/app"
import {
  CategoryKey,
  MenuScreenEnums,
  StorageArea,
  StorageKeys,
  Theme
} from "~typings/enums"

import { createExtensionStore } from "../lib/creator"

const initialState: AppStateTypes = {
  /**
   * Navigation and screen management
   */
  navigation: {
    screen: MenuScreenEnums.APPS,
    launchpad: {
      category: CategoryKey.HOME
    }
  },
  /**
   * Display settings and visual appearance
   */
  display: {
    appearance: {
      colorScheme: Theme.DARK
    },
    wallpaper: {
      picture: process.env.PLASMO_PUBLIC_VISION_ASSET_URL || "",
      effects: {
        blur: {
          enabled: false,
          intensity: BLUR_PRESETS.subtle
        },
        transparency: {
          enabled: false,
          value: OPACITY_PRESETS.transparent
        }
      }
    }
  },
  /**
   * User onboarding and profile information
   */
  onboarding: {
    id: null,
    email: null,
    name: null,
    avatar: null,
    preferences: {
      language: "en",
      permissions: false,
      notifications: false,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    metadata: {
      createdAt: null,
      lastLoginAt: null
    }
  }
}

const useAppStore = createExtensionStore<AppStateTypes>(
  initialState,
  StorageKeys.APP,
  StorageArea.LOCAL
)

export default useAppStore
