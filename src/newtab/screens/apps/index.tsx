import React, { type Key } from "react"

import { SegmentedGroup, SegmentedItem } from "~app-kit/segmented"
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
  const selectedKey = state?.navigation?.launchpad?.category

  const onSelectionChange = (key: Key) => {
    updateState("navigation.launchpad.category", key)
  }
  return (
    <View className="flex flex-col items-center justify-center">
      <SegmentedGroup
        keyboardActivation="manual"
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        aria-label="Tabs colors">
        {tabsWithApps.map((tab) => (
          <SegmentedItem
            key={tab.key}
            title={tab.title}
            className="flex flex-col">
            <AppCarousel
              // apps={orderBy(tab?.links || [], ["title"], ["asc"])}
              apps={tab?.links || []}
            />
          </SegmentedItem>
        ))}
        <SegmentedItem
          key={CategoryKey.CUSTOMIZATION}
          title={<SolarPenBold className="size-4 opacity-75" />}>
          <AppCustomization />
        </SegmentedItem>
      </SegmentedGroup>
    </View>
  )
}

export default AppsScreen
