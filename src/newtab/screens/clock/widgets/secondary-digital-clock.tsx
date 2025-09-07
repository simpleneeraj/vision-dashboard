import dayjs from "dayjs"
import React from "react"

import View from "~components/view"
import BlurView from "~components/view/blur-view"
import { Text } from "~components/view/text"
import { useInterval } from "~hooks/use-interval"
import { DateTimeFormat, TimeFormat } from "~typings/enums"

type SecondaryDigitalClockWidgetProps = {
  format?: TimeFormat
}

const SecondaryDigitalClockWidget: React.FC<
  SecondaryDigitalClockWidgetProps
> = ({ format = TimeFormat.TWENTY_FOUR_HOUR }) => {
  const [now, setNow] = React.useState(new Date())

  useInterval(() => {
    setNow(new Date())
  }, 1000)

  return (
    <BlurView className="flex flex-col rounded-4xl p-8">
      <View className="flex flex-col items-center justify-center gap-2">
        <Text size="md" tone="subtle">
          {dayjs(now).format("dddd, MMMM DD")}
        </Text>
        <Text tone="strong" className="text-7xl font-semibold">
          {dayjs(now).format(
            format === TimeFormat.TWELVE_HOUR
              ? DateTimeFormat.TIME_12H
              : DateTimeFormat.TIME_24H
          )}
        </Text>
      </View>
    </BlurView>
  )
}

export default SecondaryDigitalClockWidget
