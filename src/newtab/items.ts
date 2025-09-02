import { SolarGalleryWideBold } from "~components/icons/SolarGalleryWideBold"
import { SolarMoonBold } from "~components/icons/SolarMoonBold"
import { SolarMoonSleepBold } from "~components/icons/SolarMoonSleepBold"
import { SolarSunBold } from "~components/icons/SolarSunBold"
import { SolarWidget3Bold } from "~components/icons/SolarWidget3Bold"
import { MenuScreenEnums, Mode } from "~typings/enums"

export const modes = [
  {
    title: Mode.Day,
    icon: SolarSunBold
  },
  {
    title: Mode.Night,
    icon: SolarMoonBold
  }
]
export const menuItems = [
  {
    title: MenuScreenEnums.Apps,
    icon: SolarWidget3Bold
  },
  {
    title: MenuScreenEnums.Mindfulness,
    icon: SolarMoonSleepBold
  },
  {
    title: MenuScreenEnums.Environments,
    icon: SolarGalleryWideBold
  }
]

export const tabs = [
  {
    key: "home",
    title: "Home",
    links: [
      { name: "Google", url: "https://www.google.com" },
      { name: "Gmail", url: "https://mail.google.com" },
      { name: "Drive", url: "https://drive.google.com" },
      { name: "Calendar", url: "https://calendar.google.com" },
      { name: "YouTube", url: "https://youtube.com" },
      { name: "Notion", url: "https://notion.so" },
      { name: "Clock", url: "https://time.is" },
      { name: "Weather", url: "https://weather.com" },
      { name: "Calculator", url: "https://www.google.com/search?q=calculator" },
      { name: "Downloads", url: "chrome://downloads" },
      { name: "Settings", url: "chrome://settings" },
      { name: "History", url: "chrome://history" },
      { name: "Extensions", url: "chrome://extensions" }
    ]
  },
  {
    key: "work",
    title: "Work",
    links: [
      { name: "Docs", url: "https://docs.google.com" },
      { name: "Sheets", url: "https://sheets.google.com" },
      { name: "Slides", url: "https://slides.google.com" },
      { name: "Word", url: "https://office.com/launch/word" },
      { name: "Excel", url: "https://office.com/launch/excel" },
      { name: "PowerPoint", url: "https://office.com/launch/powerpoint" },
      { name: "Outlook", url: "https://outlook.office.com" },
      { name: "Teams", url: "https://teams.microsoft.com" },
      { name: "Slack", url: "https://slack.com" },
      { name: "Zoom", url: "https://zoom.us" },
      { name: "GitHub", url: "https://github.com" },
      { name: "Trello", url: "https://trello.com" },
      { name: "LinkedIn", url: "https://linkedin.com" }
    ]
  },
  {
    key: "media",
    title: "Media",
    links: [
      { name: "Photos", url: "https://photos.google.com" },
      { name: "iCloud Photos", url: "https://www.icloud.com/photos" },
      { name: "Spotify", url: "https://spotify.com" },
      { name: "Apple Music", url: "https://music.apple.com" },
      { name: "YouTube Music", url: "https://music.youtube.com" },
      { name: "SoundCloud", url: "https://soundcloud.com" },
      { name: "Netflix", url: "https://netflix.com" },
      { name: "Disney+", url: "https://disneyplus.com" },
      { name: "Prime Video", url: "https://primevideo.com" },
      { name: "Apple TV+", url: "https://tv.apple.com" },
      { name: "Podcasts", url: "https://podcasts.apple.com" },
      { name: "Plex", url: "https://plex.tv" },
      { name: "Screenshots", url: "#" }
    ]
  },
  {
    key: "social",
    title: "Social",
    links: [
      { name: "WhatsApp", url: "https://web.whatsapp.com" },
      { name: "Messenger", url: "https://www.messenger.com" },
      { name: "Telegram", url: "https://web.telegram.org" },
      { name: "Discord", url: "https://discord.com" },
      { name: "Twitter (X)", url: "https://x.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Reddit", url: "https://reddit.com" },
      { name: "Threads", url: "https://threads.net" },
      { name: "Signal", url: "https://signal.org" },
      { name: "Snapchat", url: "https://web.snapchat.com" },
      { name: "TikTok", url: "https://tiktok.com" },
      { name: "LinkedIn", url: "https://linkedin.com" }
    ]
  },
  {
    key: "ai",
    title: "AI",
    links: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Gemini", url: "https://gemini.google.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Copilot", url: "https://github.com/features/copilot" },
      { name: "MidJourney", url: "https://midjourney.com" },
      { name: "Leonardo", url: "https://leonardo.ai" },
      { name: "Figma", url: "https://figma.com" },
      { name: "Canva", url: "https://canva.com" },
      { name: "Grammarly", url: "https://grammarly.com" },
      { name: "DeepL", url: "https://deepl.com" },
      { name: "Zapier", url: "https://zapier.com" },
      { name: "Notion AI", url: "https://notion.so" }
    ]
  }
]
