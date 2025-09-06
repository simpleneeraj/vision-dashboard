import { tv } from "@heroui/react"

const main = tv({
  base: "relative flex min-h-screen w-full flex-col"
})

const content = tv({
  base: "relative z-10 flex h-full flex-1 items-center justify-center gap-8 p-6"
})

const tabs = tv({
  base: "",
  slots: {
    tab: "h-full",
    tabContent: "text-xs",
    tabList: "dark:bg-white/5 backdrop-blur-lg",
    cursor: "bg-black/10 dark:bg-white/10",
    panel: "flex flex-col"
  }
})
const slider = tv({
  base: "",
  slots: {
    track: "dark:bg-white/5 backdrop-blur-lg"
  }
})
const switchStyle = tv({
  base: "",
  slots: {
    wrapper: "dark:bg-white/5 backdrop-blur-lg"
  }
})

export { main, content, tabs, slider, switchStyle }
