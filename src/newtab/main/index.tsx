import React from "react"
import { preload } from "swr"

import View from "~components/view"
import BaseLayer from "~newtab/layers/base"
import AppMenus from "~newtab/screens/apps/menus"
import Onboarding from "~newtab/screens/onboarding"
import { main } from "~newtab/style/layout"
import { fetcher } from "~services"
import useAppStore from "~store/slice/app"

import NavigationScreen from "../screens"
import Content from "./content"

type MainSectionProps = {}
/**
 * Preload APIs for faster, smoother performance.
 */
preload(
  process.env.PLASMO_PUBLIC_ENVIRONMENTS_CDN ||
    process.env.NEXT_PUBLIC_ENVIRONMENTS_CDN,
  fetcher
)

const MainSection: React.FC<MainSectionProps> = () => {
  const { state } = useAppStore()

  const isOnboarded = Boolean(
    state?.onboarding?.name && state?.onboarding?.email
  )

  return (
    <View className={main()}>
      <BaseLayer />
      {isOnboarded && <AppMenus />}
      <Content>
        {isOnboarded ? (
          <NavigationScreen screen={state.navigation.screen} />
        ) : (
          <Onboarding />
        )}
      </Content>
    </View>
  )
}

export default MainSection
