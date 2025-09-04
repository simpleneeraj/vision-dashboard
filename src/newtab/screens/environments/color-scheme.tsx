import { Tab, Tabs } from "@heroui/react"
import React from "react"

import View from "~components/view"
import { modes } from "~constants/environments"
import useAppStore from "~store/slice/app"

type ColorSchemeSegmentProps = {}

const ColorSchemeSegment: React.FC<ColorSchemeSegmentProps> = ({}) => {
  const { state, updateState } = useAppStore()

  return (
    <View className="flex items-center gap-2">
      <Tabs
        selectedKey={state.display.appearance.colorScheme}
        onSelectionChange={(key) =>
          updateState("display.appearance.colorScheme", key)
        }
        aria-label="Tabs colors"
        radius="full"
        variant="light"
        className="shadow-none"
        classNames={{
          tab: "h-full",
          tabContent: "text-xs",
          tabList: "dark:bg-white/5 shadow-none",
          cursor: "bg-default-50 dark:bg-black/10 dark:bg-white/10 shadow-none"
        }}>
        {modes.map((tab) => (
          <Tab
            key={tab.title}
            title={<tab.icon className="size-4 opacity-75" />}
          />
        ))}
      </Tabs>
    </View>
  )
}

export default ColorSchemeSegment
