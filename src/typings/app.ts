import type {
  CategoryKey,
  ClockWidgets,
  MenuScreenEnums,
  NavigationDirection
} from "./enums"

export type NavigationState = {
  screen: MenuScreenEnums
  launchpad: {
    category: CategoryKey
  }
}

export type DisplayState = {
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

export type OnboardingState = {
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

export type AppStateTypes = {
  navigation: NavigationState
  display: DisplayState
  onboarding: OnboardingState
}

export type MindfulnessStateType = {
  timer: number
  isRunning: boolean
  timeLeft: number
}
export type WidgetStateType = {
  widget: ClockWidgets
  navigation: {
    direction: NavigationDirection
  }
}
