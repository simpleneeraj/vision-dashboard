import { Button } from "@heroui/react"
import { capitalize } from "lodash"
import React from "react"

import BlurView from "~components/blur-view"
import { cn } from "~lib/cn"
import { menuItems } from "~newtab/items"
import useScreenStore from "~store/slice/menu-bar"

type MenuBarProps = {
  // Define your props here
}

const MenuBar: React.FC<MenuBarProps> = ({}) => {
  const { state, updateState } = useScreenStore()
  return (
    <div className="fixed top-1/2 left-[16%] z-20 flex items-center justify-center -translate-y-1/2">
      <BlurView className="rounded-full p-2">
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const active = state?.screen === item?.title
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
                onPress={() => updateState("screen", item?.title)}>
                <item.icon
                  className={cn(
                    active ? "opacity-75" : "opacity-40",
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

export default MenuBar
