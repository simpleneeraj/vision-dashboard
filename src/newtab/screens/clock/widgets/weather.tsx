import { CircularProgress } from "@heroui/react"
import React from "react"

import { SolarCloudBold } from "~components/icons/SolarCloudBold"
import View from "~components/view"
import { Text } from "~components/view/text"

type WeatherInfoProps = {
  city?: string
  temperature?: number
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  city = "New York",
  temperature = 25
}) => {
  return (
    <View className="flex-1 flex items-center gap-2">
      <CircularProgress
        color="success"
        showValueLabel={true}
        size="lg"
        value={0}
        valueLabel={<SolarCloudBold className="size-4 opacity-75" />}
        classNames={{
          track: "stroke-white/10",
          indicator: "stroke-white/60"
        }}
      />
      <View className="flex flex-col">
        <Text size="sm" tone="subtle" className="font-semibold">
          {temperature}°C
        </Text>
        <Text size="sm" tone="subtle">
          {city}
        </Text>
      </View>
    </View>
  )
}

export default WeatherInfo
