import { Calendar, Card, useDisclosure } from "@heroui/react"
import { parseDate } from "@internationalized/date"
import dayjs from "dayjs"
import { motion } from "motion/react"
import React from "react"
import x from "url:assets/meshface-avatar-pack/meshface-avatar-4.png"

import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { useInterval } from "~hooks/use-interval"

import { avatars } from "../data"
import IconPicker from "./icon-picker"

type TimeDateWidgetProps = {}

const CalendarWidget: React.FC<TimeDateWidgetProps> = () => {
  const [selected, setSelected] = React.useState(avatars?.[2])
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
          onSelect={(icon) => setSelected(icon)}
          icons={avatars}>
          <Card
            shadow="none"
            className="bg-transparent h-20 w-20 flex items-center justify-center   
             hover:bg-white/10 z-10 "
            isPressable
            onPress={onOpen}>
            <motion.img
              src={selected?.src!}
              alt={selected?.alt}
              className="h-full w-full object-cover"
              style={{
                clipPath: `polygon(
        10% 0%, 20% 5%, 30% 0%, 40% 5%, 50% 0%, 
        60% 5%, 70% 0%, 80% 5%, 90% 0%, 100% 10%, 
        95% 20%, 100% 30%, 95% 40%, 100% 50%, 
        95% 60%, 100% 70%, 95% 80%, 100% 90%, 
        90% 100%, 80% 95%, 70% 100%, 60% 95%, 
        50% 100%, 40% 95%, 30% 100%, 20% 95%, 
        10% 100%, 0% 90%, 5% 80%, 0% 70%, 
        5% 60%, 0% 50%, 5% 40%, 0% 30%, 
        5% 20%, 0% 10%
      )`
              }}
              animate={{
                y: [0, -4, 0], // floating
                rotate: [6, 8, 6], // tiny wobble
                scale: [1, 1.02, 1] // subtle pulse
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity
              }}
              whileHover={{
                scale: 1.05,
                rotate: 10,
                transition: { type: "spring", stiffness: 200 }
              }}
              whileTap={{
                scale: 0.95,
                rotate: -5
              }}
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
          defaultValue={parseDate(dayjs(now).format("YYYY-MM-DD"))}
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
