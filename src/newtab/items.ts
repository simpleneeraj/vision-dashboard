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

export const apps = [
  {
    title: "X",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/1f920cde2d427cb5fd5aae7b63cd8a0c_low_res_X__Liquid_Glass_.png"
  },
  {
    title: "Whatsapp",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d33d084a67df039e37da5b7cd59d28e3_low_res_WhatsApp__Liquid_Glass_.png"
  },
  {
    title: "Claude",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/fcc2ba2ec535477df3f70b7e92bec8ea_low_res_Claude___Liquid_Glass__Dark_.png"
  },
  {
    title: "Chat GPT",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/85f964982633c5b3bd955e447cc77319_low_res_ChatGPT__OpenAI__Sora__Dark__Liquid_Glass_.png"
  },
  {
    title: "Framer Motion",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/836af198670b324bdb054e91be2cc133_low_res_Framer___Liquid_Glass__Dark_.png"
  },
  {
    title: "Grok",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/002ac8176df63681786f40c58e24c716_low_res_Grok__Liquid_Glass_.png"
  },
  {
    title: "Swift UI",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/98a942e5c02c50c4930dcc17983cf0d5_low_res_Swift__SwiftUI_.png"
  },
  {
    title: "Netflix",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7a0f19f5a5ed1063a64b7203956b49b8_low_res_Netflix.png"
  },
  {
    title: "Instagram",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7bd44107dc70470869cee9d1b49e36d7_low_res_Instagram__Liquid_Glass_.png"
  },
  {
    title: "Youtube",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/42711a44e5c74d383803a00a4e4ad25c_low_res_youtube.png"
  },
  {
    title: "Github",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/460189b267b8a37f8e0d3d4fcec75ca3_low_res_GitHub.png"
  },
  {
    title: "Apple Music",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/be8831c23924975cd43c9e49f9adb232_KgpPFGvULF.png"
  },
  {
    title: "Google Chat",
    source:
      "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/e5c1e7322f8d3935eeb352b94bbf9c53_low_res_Google_Chat_-_Dark.png"
  }
]
