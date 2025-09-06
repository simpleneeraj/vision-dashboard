import React from "react"

import View from "~components/view"
import BaseLayer from "~newtab/layers/base"
import AppMenus from "~newtab/screens/apps/menus"
import Onboarding from "~newtab/screens/onboarding"
import { main } from "~newtab/style/layout"
import useAppStore from "~store/slice/app"

import NavigationScreen from "../screens"
import Content from "./content"

type MainSectionProps = {}

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
