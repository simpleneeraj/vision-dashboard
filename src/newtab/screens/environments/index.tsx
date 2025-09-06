import { capitalize } from "lodash"
import React, { type Key } from "react"

import { SegmentedGroup, SegmentedItem } from "~app-kit/segmented"
import { SolarGalleryCircleBold } from "~components/icons/SolarGalleryCircleBold"
import { SolarPaletteRoundBold } from "~components/icons/SolarPaletteRoundBold"
import View from "~components/view"
import { EnvironmentTabs } from "~typings/enums"

import Fallback from "../fallback"

const BackgroundsGrid = React.lazy(() => import("./backgrounds"))
const BackgroundsCustomization = React.lazy(() => import("./effects"))

type EnvironmentsProps = {}

const EnvironmentsScreen: React.FC<EnvironmentsProps> = () => {
  const [selectedKey, setState] = React.useState<EnvironmentTabs>(
    EnvironmentTabs.ENVIRONMENTS
  )
  const onSelectionChange = (key: Key) => {
    setState(key as EnvironmentTabs)
  }
  const tabs = [
    {
      key: EnvironmentTabs.ENVIRONMENTS,
      icon: SolarGalleryCircleBold,
      screen: BackgroundsGrid
    },
    {
      key: EnvironmentTabs.EFFECTS,
      icon: SolarPaletteRoundBold,
      screen: BackgroundsCustomization
    }
  ]
  return (
    <View className="flex flex-col items-center justify-center">
      <SegmentedGroup
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        aria-label="Environments Screen">
        {tabs.map((item) => (
          <SegmentedItem
            key={item.key}
            title={
              <View className="flex items-center gap-2">
                <item.icon className="size-4 opacity-75" />
                {capitalize(item.key)}
              </View>
            }>
            <React.Suspense
              fallback={
                <Fallback className="flex items-center justify-center min-w-80 h-144" />
              }>
              <item.screen />
            </React.Suspense>
          </SegmentedItem>
        ))}
      </SegmentedGroup>
    </View>
  )
}

export default EnvironmentsScreen
