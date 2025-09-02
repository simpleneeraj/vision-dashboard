import { Card, cn, type CardProps } from "@heroui/react"
import React from "react"

type BlurViewProps = {} & CardProps

const BlurView: React.FC<BlurViewProps> = ({ children, ...rest }) => {
  return (
    <Card
      {...rest}
      radius="lg"
      className={cn(
        rest?.className,
        "relative backdrop-blur-2xl bg-black/5 overflow-hidden"
      )}>
      {/* VisionOS Style Border */}
      <div className="absolute inset-0 rounded-[inherit] border-small border-white/15 shadow-inner" />

      {/* Subtle inner highlight */}
      <div className="absolute inset-[1px] rounded-[inherit] border-small border-white/5" />

      {/* Top light reflection */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      {children}
    </Card>
  )
}

export default BlurView
