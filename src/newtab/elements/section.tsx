import { Divider } from "@heroui/react"
import React from "react"

import View from "~components/view"
import { Text } from "~components/view/text"
import { cn } from "~lib/cn"

type SectionWrapperProps = {
  title: string
  children: React.ReactNode
}

type SectionItemProps = {
  showDivider?: boolean
  startContent: React.ReactNode
  endContent: React.ReactNode
} & React.ComponentPropsWithRef<"div">

const Wrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <View className="flex flex-col gap-2">
      <Text variant="subhead" tone="muted" size="sm" className="px-2 py-1">
        {title}
      </Text>
      <View className="flex flex-col bg-black/20 dark:bg-white/10 rounded-2xl overflow-hidden">
        {children}
      </View>
    </View>
  )
}

const Item: React.FC<SectionItemProps> = ({
  startContent,
  endContent,
  showDivider = false,
  ...rest
}) => {
  return (
    <>
      <View
        {...rest}
        className={cn(
          rest.className,
          "px-4 py-3 flex items-center justify-between"
        )}>
        {startContent}
        {endContent}
      </View>
      {showDivider && <Divider />}
    </>
  )
}

export const Section = {
  Wrapper,
  Item
}
