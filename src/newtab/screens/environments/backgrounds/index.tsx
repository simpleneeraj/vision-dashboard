import { CardBody, CardFooter, CardHeader, Image } from "@heroui/react"
import { startCase } from "lodash"
import React from "react"

import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { cn } from "~lib/cn"
import useBackgrounds from "~newtab/hooks/use-backgrounds"
import useAppStore from "~store/slice/app"

type BackgroundGridProps = {}

const BackgroundsGrid: React.FC<BackgroundGridProps> = () => {
  const { state, updateState } = useAppStore()

  const { items } = useBackgrounds({
    colorScheme: state?.display?.appearance?.colorScheme
  })

  return (
    <BlurView className="flex min-w-192 h-144 rounded-3xl">
      {/* ── Header Section ── */}
      <CardHeader className="text-base font-medium flex items-center justify-center border-b border-white/10 p-4">
        <Text tone="subtle">Environments</Text>
      </CardHeader>

      {/* ── Main Content / Grid ── */}
      <CardBody className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-auto bg-transparent">
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

export default BackgroundsGrid
