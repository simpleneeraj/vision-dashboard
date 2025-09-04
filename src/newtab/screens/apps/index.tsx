import { Tab, Tabs } from "@heroui/react"
import React from "react"

import { SolarPenBold } from "~components/icons/SolarPenBold"
import View from "~components/view"
import { tabsWithApps } from "~constants/apps"
import AppCarousel from "~newtab/screens/apps/carousel"
import useAppStore from "~store/slice/app"
import { CategoryKey } from "~typings/enums"

import AppCustomization from "./customization"

type AppsScreenProps = {}

const AppsScreen: React.FC<AppsScreenProps> = ({}) => {
  const { state, updateState } = useAppStore()

  return (
    <View className="flex flex-col gap-2">
      <View className="flex flex-col items-center justify-center ">
        <Tabs
          selectedKey={state?.navigation?.launchpad?.category}
          onSelectionChange={(key) =>
            updateState("navigation.launchpad.category", key)
          }
          aria-label="Tabs colors"
          radius="full"
          variant="light"
          className="shadow-none"
          classNames={{
            tab: "h-full",
            tabContent: "text-xs",
            tabList: "dark:bg-white/5 shadow-none backdrop-blur-lg",
            cursor: "bg-black/10 dark:bg-white/10 shadow-none",
            panel: "flex flex-col"
          }}>
          {tabsWithApps.map((tab) => (
            <Tab key={tab.key} title={tab.title} className="flex flex-col">
              <AppCarousel apps={tab.links || []} />
            </Tab>
          ))}
          <Tab
            key={CategoryKey.CUSTOMIZATION}
            title={<SolarPenBold className="size-4 opacity-75" />}>
            <AppCustomization />
          </Tab>
        </Tabs>
      </View>
    </View>
  )
}

export default AppsScreen
