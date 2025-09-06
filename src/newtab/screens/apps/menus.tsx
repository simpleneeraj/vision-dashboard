import { Button } from "@heroui/react"
import { capitalize } from "lodash"
import React from "react"

import BlurView from "~components/view/blur-view"
import menus from "~constants/menus"
import { cn } from "~lib/cn"
import useAppStore from "~store/slice/app"

type AppMenusProps = {}

const AppMenus: React.FC<AppMenusProps> = ({}) => {
  const { state, updateState } = useAppStore()

  return (
    <div className="fixed top-1/2 left-[16%] z-20 flex items-center justify-center -translate-y-1/2">
      <BlurView className="rounded-full p-2">
        <div className="flex flex-col gap-2">
          {menus.map((item, index) => {
            const active = state?.navigation.screen === item?.title
            return (
              <Button
                key={index}
                isIconOnly
                radius="full"
                className={cn(
                  "w-full bg-transparent hover:bg-white/20 text-white font-medium transition-all duration-200",
                  active && "bg-white/20 backdrop-blur-sm"
                )}
                title={capitalize(item.title)}
                onPress={() => updateState("navigation.screen", item?.title)}>
                <item.icon
                  className={cn(
                    active ? "opacity-75" : "opacity-50",
                    "w-5 h-5"
                  )}
                />
              </Button>
            )
          })}
        </div>
      </BlurView>
    </div>
  )
}

export default AppMenus
