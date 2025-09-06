import { tv } from "@heroui/react"

// text-black/80
export const textStyle = tv({
  base: "text-white/90",
  variants: {
    variant: {
      largeTitle: "text-2xl font-bold",
      title: "text-xl font-semibold",
      headline: "text-lg font-medium",
      body: "text-base font-normal",
      callout: "text-base font-medium",
      subhead: "text-sm font-medium",
      footnote: "text-xs font-normal",
      caption: "text-xs font-normal tracking-wide"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl"
    },
    tone: {
      strong: "opacity-100",
      subtle: "opacity-70",
      muted: "opacity-50",
      placeholder: "opacity-40 italic",
      danger: "text-red-500 dark:text-red-400",
      success: "text-green-600 dark:text-green-400",
      info: "text-blue-600 dark:text-blue-400"
    }
  },
  defaultVariants: {
    variant: "body",
    size: "md",
    tone: "strong"
  }
})
