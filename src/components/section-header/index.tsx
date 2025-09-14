import React from "react"
import { tv } from "tailwind-variants"

import { Highlighter } from "../highlighter"
import type { HighlighterProps } from "../highlighter/types"

interface SectionHeaderProps {
  title: string
  tagline?: string
  align?: "left" | "center"
  size?: "sm" | "md" | "lg"
  highlight: Omit<HighlighterProps, "children">
}

const sectionHeader = tv({
  base: "py-8 sm:py-12 px-4 flex flex-col justify-center gap-2",
  variants: {
    align: {
      center: "items-center text-center",
      left: "items-start text-left"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  compoundVariants: [
    {
      align: "center",
      size: "sm",
      class: "gap-1"
    },
    {
      align: "center",
      size: "lg",
      class: "gap-4"
    },
    {
      align: "left",
      size: "sm",
      class: "gap-1"
    },
    {
      align: "left",
      size: "lg",
      class: "gap-4"
    }
  ],
  defaultVariants: {
    align: "center",
    size: "md"
  }
})

// Tailwind variants for title and tagline text sizes
const titleTv = tv({
  base: "font-silkscreen tracking-tight text-default-900",
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-2xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

const taglineTv = tv({
  base: "font-silkscreen font-medium text-orange-500",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  tagline,
  align,
  highlight,
  size
}) => {
  return (
    <div className={sectionHeader({ align, size })}>
      {tagline && (
        <Highlighter {...highlight}>
          <h2 className={taglineTv({ size })}>{tagline}</h2>
        </Highlighter>
      )}
      <p className={titleTv({ size })}>{title}</p>
    </div>
  )
}
