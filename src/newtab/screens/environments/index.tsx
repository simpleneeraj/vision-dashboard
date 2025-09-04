import { Button, CardBody, CardFooter, CardHeader, Image } from "@heroui/react"
import { forOwn, has, isObject, startCase } from "lodash"
import React from "react"
import useSWR from "swr"

import { IonChevronBack } from "~components/icons/IonChevronBack"
import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { cn } from "~lib/cn"
import useAppStore from "~store/slice/app"
import { Mode, Theme } from "~typings/enums"

type EnvironmentsProps = {}

const EnvironmentsScreen: React.FC<EnvironmentsProps> = () => {
  const { state, updateState } = useAppStore()

  const query = useSWR(process.env.PLASMO_PUBLIC_ENVIRNOMENTS_CDN)

  const cdn = query.data || {}

  const items = React.useMemo(() => {
    const day: any[] = []
    const night: any[] = []
    function flattenImages(obj: any, parentKey?: string) {
      forOwn(obj, (value, key) => {
        if (has(value, "sources") && isObject(value.sources)) {
          const entry = { name: key, sources: value.sources }

          // Use parent folder key to detect environment
          if (parentKey?.toLowerCase() === Mode.DAY) day.push(entry)
          else if (parentKey?.toLowerCase() === Mode.NIGHT) night.push(entry)
        } else if (isObject(value)) {
          flattenImages(value, key) // pass current key as parent
        }
      })
    }
    flattenImages(cdn)
    return state.display.appearance.colorScheme === Theme.DARK ? night : day
  }, [cdn, state.display.appearance.colorScheme])

  return (
    <BlurView className="min-w-160 min-h-144 flex flex-col rounded-4xl">
      {/* ── Header Section ── */}
      <CardHeader className="text-base font-medium flex items-center justify-between border-b border-white/10 p-4">
        <View className="flex items-center gap-1 text-default-foreground/50">
          <Button
            size="sm"
            radius="full"
            isIconOnly
            variant="light"
            // onPress={clearState}
            className="hover:bg-white/10 text-default-foreground">
            <IonChevronBack className="size-4 text-default-foreground/50" />
          </Button>
          <p className="">Environments </p>
        </View>

        {/* <View className="flex items-center gap-2">
          <ColorSchemeSegment />
          <Button radius="full" size="sm">
            <SolarPenBold className="size-4 opacity-75" />
          </Button>
        </View> */}
      </CardHeader>

      {/* ── Main Content / Grid ── */}
      <CardBody className="grid grid-cols-3 gap-4 h-144 overflow-auto bg-transparent">
        {items.map((item) => {
          const active =
            state?.display?.wallpaper?.picture === item?.sources?.lg
          return (
            <View
              key={item?.sources?.sm}
              onClick={() =>
                updateState("display.wallpaper.picture", item?.sources?.lg)
              }
              className={cn(
                "flex flex-col items-center justify-center rounded-2xl p-2 gap-2"
              )}
              title={startCase(item.name)}>
              {/* Preview image */}
              <View
                className={cn(
                  "flex items-center justify-center rounded-full cursor-pointer h-28 w-28 overflow-hidden",
                  "border border-white/10",
                  "shadow-sm",
                  "hover:border-white/20 focus:border-white/30 focus:ring-2 focus:ring-white/20",
                  "transition-all duration-300 ease-in-out",
                  active
                    ? "bg-white/10 border-white/40 ring-2 ring-white/40 shadow-md"
                    : "bg-black/5"
                )}>
                <Image
                  src={item?.sources?.sm}
                  alt={item.name}
                  removeWrapper
                  className="h-full w-full object-cover"
                />
              </View>

              {/* Room name */}
              {/* <View className="flex items-center justify-center">
                <p className="text-xs font-medium text-default-foreground/50 max-w-52 line-clamp-1 text-center">
                  {startCase(item.name)}
                </p>
              </View> */}
            </View>
          )
        })}
      </CardBody>

      {/* ── Footer Section ── */}
      <CardFooter className="flex items-center justify-center border-t border-white/10 p-4">
        <Text size="sm" variant="footnote" tone="muted">
          Choose between Night and Day modes to match your current mood or
          environment. ✨
        </Text>
      </CardFooter>
    </BlurView>
  )
}

export default EnvironmentsScreen
