import { Button } from "@heroui/react"
import { capitalize, startCase } from "lodash"
import React from "react"

import { IonChevronBack } from "~components/icons/IonChevronBack"
import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { cn } from "~lib/cn"
import { AppTab } from "~typings/enums"

import { items } from "./items"
import { AboutScreen } from "./screens/about"
import { AdvancedScreen } from "./screens/advanced"
import { AppearanceScreen } from "./screens/appearance"
import { HomeScreen } from "./screens/home"
import { IntegrationsScreen } from "./screens/integration"
import { LayoutScreen } from "./screens/layout"

type AppCustomizationProps = {}

const AppCustomization: React.FC<AppCustomizationProps> = ({}) => {
  const [activeTab, setActiveTab] = React.useState<AppTab>(AppTab.HOME)

  const screens: Record<AppTab, React.ReactNode> = {
    [AppTab.HOME]: <HomeScreen />,
    [AppTab.APPEARANCE]: <AppearanceScreen />,
    [AppTab.LAYOUT]: <LayoutScreen />,
    [AppTab.INTEGRATIONS]: <IntegrationsScreen />,
    [AppTab.ADVANCED]: <AdvancedScreen />,
    [AppTab.ABOUT]: <AboutScreen />
  }
  return (
    <BlurView className="flex min-w-192 h-144 rounded-3xl">
      <View className="flex-1 flex gap-2">
        {/* Sidebar */}
        <View className="flex flex-col gap-2 w-56 pl-2">
          <View className="px-4 py-4 pb-2">
            <Text variant="title">Customization</Text>
          </View>
          {items.map((item) => (
            <Button
              key={item.key}
              size="sm"
              onPress={() => setActiveTab(item.key)}
              className={cn(
                "justify-start w-full bg-transparent hover:bg-white/20 font-medium rounded-xl text-white/75",
                activeTab === item.key && "bg-white/15 text-white"
              )}>
              <item.icon className="size-4" />
              {capitalize(item.key)}
            </Button>
          ))}
        </View>
        {/* Content */}
        <View className="flex-1 flex flex-col gap-2 bg-white/5 p-2">
          <View className="flex flex-col px-2 gap-2">
            {/* Header */}
            <View className="flex items-center justify-between py-2">
              <Button
                size="sm"
                radius="full"
                isIconOnly
                className="bg-white/5 hover:bg-white/10 text-default-foreground">
                <IonChevronBack className="size-4 text-default-foreground/50" />
              </Button>
              <Text variant="title" tone="subtle">
                {startCase(activeTab)}
              </Text>
              <span /> {/* Spacer for alignment */}
            </View>
            {screens[activeTab]}
          </View>
        </View>
      </View>
    </BlurView>
  )
}

export default AppCustomization
