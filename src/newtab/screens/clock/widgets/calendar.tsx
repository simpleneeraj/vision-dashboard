import { Calendar, Card, useDisclosure } from "@heroui/react"
import { parseDate } from "@internationalized/date"
import dayjs from "dayjs"
import React from "react"

import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { useInterval } from "~hooks/use-interval"

import IconPicker from "./icon-picker"

type TimeDateWidgetProps = {}

const CalendarWidget: React.FC<TimeDateWidgetProps> = () => {
  const [now, setNow] = React.useState(new Date())

  useInterval(() => {
    setNow(new Date())
  }, 1000)

  const fullDateString = dayjs(now).format("dddd of MMMM DD, YYYY")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <BlurView className="flex flex-row rounded-4xl py-2">
      {/* Left Section */}
      <View className="flex flex-col gap-3 p-4 justify-end pr-0">
        <IconPicker
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onSelect={(icon) => console.log("Selected:", icon.alt)}
          icons={[
            {
              src: "https://img.icons8.com/emoji/48/couple-with-heart.png",
              alt: "couple-with-heart"
            },
            {
              src: "https://img.icons8.com/dusk/64/pixel-cat.png",
              alt: "smiling-face"
            },
            {
              src: "https://img.icons8.com/color/48/minecraft-golden-apple.png",
              alt: "heart"
            },
            {
              src: "https://img.icons8.com/pulsar-gradient/48/pixel-heart.png",
              alt: "star"
            },
            {
              src: "https://img.icons8.com/emoji/48/couple-with-heart.png",
              alt: "couple-with-heart"
            },
            {
              src: "https://img.icons8.com/dusk/64/pixel-cat.png",
              alt: "smiling-face"
            },
            {
              src: "https://img.icons8.com/color/48/minecraft-golden-apple.png",
              alt: "heart"
            },
            {
              src: "https://img.icons8.com/pulsar-gradient/48/pixel-heart.png",
              alt: "star"
            },
            {
              src: "https://img.icons8.com/emoji/48/couple-with-heart.png",
              alt: "couple-with-heart"
            },
            {
              src: "https://img.icons8.com/dusk/64/pixel-cat.png",
              alt: "smiling-face"
            },
            {
              src: "https://img.icons8.com/color/48/minecraft-golden-apple.png",
              alt: "heart"
            },
            {
              src: "https://img.icons8.com/pulsar-gradient/48/pixel-heart.png",
              alt: "star"
            }
          ]}>
          <Card
            shadow="none"
            className="bg-transparent h-20 w-20 flex items-center justify-center rounded-xl hover:bg-white/10 z-10 p-2"
            isPressable
            onPress={onOpen}>
            <img
              width="72"
              height="72"
              src="https://img.icons8.com/pulsar-color/48/pixel-heart.png"
              alt="pixel-cat"
              className="h-full w-full"
            />
          </Card>
        </IconPicker>
        <Text tone="subtle" className="font-semibold max-w-52">
          Today is {fullDateString}.
          <br />
          Make the most of it! 🌟
        </Text>
      </View>

      <View className="flex flex-col items-center justify-center gap-2">
        <Calendar
          calendarWidth={"100%"}
          value={parseDate(dayjs(now).format("YYYY-MM-DD"))}
          showShadow={false}
          color="foreground"
          classNames={{
            gridHeaderRow: "pt-2 ",
            headerWrapper: "hidden",
            gridHeader: "bg-transparent shadow-none",
            gridHeaderCell: "text-default-600/50 text-xs h-6 w-6",
            base: "bg-transparent dark:bg-transparent shadow-none",
            cellButton:
              "h-6 w-6 data-[disabled=true]:text-default-600/50 data-[unavailable=true]:text-default-600/50"
          }}
        />
      </View>
    </BlurView>
  )
}

export default CalendarWidget
