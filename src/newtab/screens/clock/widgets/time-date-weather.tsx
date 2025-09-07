import { Divider } from "@heroui/react"
import dayjs from "dayjs"
import React from "react"

import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { useInterval } from "~hooks/use-interval"
import { DateTimeFormat, TimeFormat } from "~typings/enums"

import BatteryInfo from "./battery-info"
import WeatherInfo from "./weather"

type TimeDateWeatherWidgetProps = {
  timeFormat?: TimeFormat
}

const TimeDateWeatherWidget: React.FC<TimeDateWeatherWidgetProps> = ({
  timeFormat = TimeFormat.TWENTY_FOUR_HOUR
}) => {
  const [now, setNow] = React.useState(new Date())

  useInterval(() => {
    setNow(new Date())
  }, 1000)

  const timeString = dayjs(now).format(
    timeFormat === TimeFormat.TWELVE_HOUR
      ? DateTimeFormat.TIME_12H
      : DateTimeFormat.TIME_24H
  )
  const dayString = dayjs(now).format("ddd")
  const monthString = dayjs(now).format("MMMM")

  return (
    <BlurView className="flex flex-col rounded-4xl p-6 gap-3">
      <View className="flex items-center gap-8 justify-between">
        <View className="flex items-center gap-2">
          <Text className="text-4xl font-semibold">
            {dayjs(now).format("DD")}
          </Text>
          <View className="flex flex-col">
            <Text className="font-medium" size="sm" tone="subtle">
              {dayString}
            </Text>
            <Text className="font-medium" size="sm" tone="subtle">
              {monthString}
            </Text>
          </View>
        </View>
        <View className="py-1 px-2 rounded-2xl bg-white/10">
          <Text className="text-4xl font-semibold">{timeString}</Text>
        </View>
      </View>
      <Divider />
      <View className="flex items-center gap-2">
        <BatteryInfo />
        <WeatherInfo city="Noida" />
      </View>
    </BlurView>
  )
}

export default TimeDateWeatherWidget
