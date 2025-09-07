import { Card, cn, type CardProps } from "@heroui/react"
import React from "react"

type BlurViewProps = {} & CardProps

const BlurView: React.FC<BlurViewProps> = ({ children, ...rest }) => {
  return (
    <Card
      {...rest}
      className={cn(
        "rounded-3xl relative backdrop-blur-2xl bg-black/5 dark:bg-white/5 overflow-hidden",
        rest?.className
      )}>
      {/* Frosted background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-white/10 dark:via-black/20 dark:to-black/5" />

      {/* Global faint rounded border */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/10 dark:border-white/5" />

      {/* Corner accent border (masked) */}
      <div
        className="absolute inset-0 rounded-[inherit] border border-white/40 dark:border-white/20 pointer-events-none 
                      [mask-image:linear-gradient(to_top_left,black_30%,transparent_70%),linear-gradient(to_bottom_right,black_30%,transparent_70%)]
                      [mask-composite:intersect] [--webkit-mask-composite:destination-in]"
      />

      {/* Top light reflection */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />

      {/* Content */}
      {children}
    </Card>
  )
}

export default BlurView
