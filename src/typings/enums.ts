// --------------------
// Storage Enums
// --------------------

/**
 * Available browser storage areas.
 */
export enum StorageArea {
  SYNC = "sync",
  LOCAL = "local",
  MANAGED = "managed",
  SESSION = "session"
}

/**
 * Keys used when saving or retrieving data from storage.
 */
export enum StorageKeys {
  APP = "APP",
  MENU_ITEMS = "MENU_ITEMS",
  ENVIRNOMENT = "ENVIRNOMENT",
  MINDFULNESS = "MINDFULNESS",
  CLOCK_WIDGET = "CLOCK_WIDGET"
}

// --------------------
// UI / Navigation Enums
// --------------------

/**
 * Screens available in the app menu.
 */
export enum MenuScreenEnums {
  APPS = "APPS",
  CLOCK = "CLOCK",
  MINDFULNESS = "MINDFULNESS",
  ENVIRONMENTS = "ENVIRONMENTS"
}

/**
 * Tabs shown in the app settings panel.
 */
export enum AppTab {
  HOME = "home",
  APPEARANCE = "appearance",
  LAYOUT = "layout",
  INTEGRATIONS = "integrations",
  ADVANCED = "advanced",
  ABOUT = "about"
}

/**
 * Tabs for the environments section.
 */
export enum EnvironmentTabs {
  ENVIRONMENTS = "environments",
  EFFECTS = "effects"
}

/**
 * Tabs for clock section
 */
export enum ClockTabs {
  CLOCK = "clock",
  TIMER = "timer",
  CALENDAR = "calendar",
  SETTINGS = "settings"
}

// --------------------
// Theming & Modes
// --------------------

/**
 * UI theme selection.
 */
export enum Theme {
  DARK = "dark",
  LIGHT = "light"
}

/**
 * Day/Night mode selection.
 */
export enum Mode {
  DAY = "day",
  NIGHT = "night"
}

// --------------------
// Content & Categories
// --------------------

/**
 * Categories for grouping features, apps, or content.
 */
export enum CategoryKey {
  /** General / personal use */
  HOME = "home",

  /** Productivity and professional tools */
  WORK = "work",

  /** Entertainment, music, and videos */
  MEDIA = "media",

  /** Social networking and communication */
  SOCIAL = "social",

  /** AI and automation tools */
  AI = "ai",

  /** User customization / personalization */
  CUSTOMIZATION = "custom",

  /** Brand-specific categories */
  GOOGLE = "google",
  APPLE = "apple",
  MICROSOFT = "microsoft",

  /** Role-based categories */
  DEVELOPER = "developer",
  TEACHER = "teacher"
}

/**
 * Centralized formats
 */
export enum TimeFormat {
  TWELVE_HOUR = "12_HOUR",
  TWENTY_FOUR_HOUR = "24_HOUR"
}

export enum DateTimeFormat {
  TIME_24H = "HH:mm",
  TIME_12H = "hh:mm A",
  DATE_SHORT = "ddd, D MMM",
  DATE_LONG = "dddd, D MMMM YYYY"
}

export enum ClockWidgets {
  PrimaryDigitalClock = "PrimaryDigitalClock",
  SecondaryDigitalClock = "SecondaryDigitalClock",
  WeatherClock = "WeatherClock",
  CalendarView = "CalendarView"
}

export enum NavigationDirection {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NONE = "NONE"
}
