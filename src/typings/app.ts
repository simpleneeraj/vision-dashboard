import type { CategoryKey, MenuScreenEnums } from "./enums"

export interface NavigationState {
  screen: MenuScreenEnums
  launchpad: {
    category: CategoryKey
  }
}

export interface DisplayState {
  appearance: {
    colorScheme: "auto" | "light" | "dark"
  }
  wallpaper: {
    picture: string
    effects: {
      blur: {
        enabled: boolean
        intensity: number
      }
      transparency: {
        enabled: boolean
        value: number
      }
    }
  }
}

export interface OnboardingState {
  id: string | null
  email: string | null
  name: string | null
  avatar: string | null
  preferences: {
    language: string
    permissions: boolean
    notifications: boolean
    timezone: string
  }
  metadata: {
    createdAt: Date | null
    lastLoginAt: Date | null
  }
}

export interface RootState {
  navigation: NavigationState
  display: DisplayState
  onboarding: OnboardingState
}
