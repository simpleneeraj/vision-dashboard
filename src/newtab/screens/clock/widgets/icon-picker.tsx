import {
  Card,
  Popover,
  PopoverContent,
  PopoverTrigger,
  type PopoverProps
} from "@heroui/react"
import React from "react"

import BlurView from "~components/view/blur-view"

type IconPickerProps = {
  children: React.ReactNode
  icons?: { src: string; alt: string }[]
  onSelect?: (icon: { src: string; alt: string }) => void
} & Omit<PopoverProps, "children">

export default function IconPicker({
  children,
  icons = [],
  onSelect,
  ...props
}: IconPickerProps) {
  return (
    <Popover placement="top" shadow="none" offset={40} {...props}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="bg-transparent">
        <BlurView className="grid grid-cols-4 gap-2 p-2 w-60 max-h-56 overflow-auto">
          {icons.map((icon) => (
            <Card
              shadow="none"
              isPressable
              key={icon.src}
              className="p-2 bg-transparent hover:bg-white/10"
              onPress={() => onSelect?.(icon)}>
              <img src={icon.src} alt={icon.alt} width={48} height={48} />
            </Card>
          ))}
        </BlurView>
      </PopoverContent>
    </Popover>
  )
}
