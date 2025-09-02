import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Switch,
  Tab,
  Tabs
} from "@heroui/react"
import React from "react"

import BlurView from "~components/blur-view"
import { IonChevronBack } from "~components/icons/IonChevronBack"
import View from "~components/view"
import { nightRooms } from "~constants/room"
import { cn } from "~lib/cn"
import { modes } from "~newtab/items"
import useEnvironmentStore from "~store/slice/environment"
import useScreenStore from "~store/slice/menu-bar"

type EnvironmentsProps = {}

const EnvironmentsScreen: React.FC<EnvironmentsProps> = () => {
  const { clearState } = useScreenStore()
  const { state, updateState } = useEnvironmentStore()
  return (
    <BlurView className="min-w-160 min-h-128 flex flex-col rounded-4xl">
      {/* ── Header Section ── */}
      <CardHeader className="text-base font-medium flex items-center justify-between border-b border-white/10 p-4">
        <View className="flex items-center gap-1 text-default-foreground/50">
          <Button
            size="sm"
            radius="full"
            isIconOnly
            variant="light"
            onPress={clearState}
            className="hover:bg-white/10 text-default-foreground">
            <IonChevronBack className="size-4 text-default-foreground/50" />
          </Button>
          <p className="">Environments</p>
        </View>
        <View className="flex items-center gap-2">
          <Tabs
            aria-label="Tabs colors"
            radius="full"
            variant="light"
            className="shadow-none"
            classNames={{
              tab: "h-full",
              tabContent: "text-xs",
              tabList: "dark:bg-white/5 shadow-none",
              cursor: "bg-black/10 dark:bg-white/10 shadow-none"
            }}>
            {modes.map((tab) => (
              <Tab
                key={tab.title}
                title={<tab.icon className="size-4 opacity-75" />}
              />
            ))}
          </Tabs>
        </View>
      </CardHeader>

      {/* ── Main Content / Grid ── */}
      <CardBody className="grid grid-cols-3 gap-4 p-6 max-h-96 overflow-auto">
        {nightRooms.map((item) => {
          return (
            <View
              key={item.name}
              onClick={() => updateState("environment", item.source)}
              className={cn(
                // Base
                "flex flex-col items-center justify-center rounded-2xl p-2 cursor-pointer",
                "hover:bg-white/15",
                "transition-shadow duration-300 ease-in-out",
                state.environment === item.source ? "bg-white/20" : ""
              )}>
              {/* Preview image */}
              <Image
                src={item.source}
                alt={item.name}
                className="h-28 w-full object-cover rounded-lg shadow-md"
              />

              {/* Room name */}
              <p className="mt-3 text-sm font-medium text-default-foreground/75">
                {item.name}
              </p>
            </View>
          )
        })}
      </CardBody>

      {/* ── Footer Section ── */}
      <CardFooter className="flex items-center justify-between border-t border-white/10 p-4">
        <span className="text-center text-sm text-default-foreground/50">
          Choose between Night and Day modes to match your current mood or
          environment. ✨
        </span>
        <Switch
          size="sm"
          color="success"
          classNames={{
            wrapper: "bg-white/20"
          }}
          isSelected={state.dim}
          onValueChange={(v) => updateState("dim", v)}
          title={state.dim ? "Background is dimmed" : "Background is normal"}>
          Dimmed
        </Switch>
      </CardFooter>
    </BlurView>
  )
}

export default EnvironmentsScreen
