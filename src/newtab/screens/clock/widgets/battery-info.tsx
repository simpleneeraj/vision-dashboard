import { CircularProgress } from "@heroui/react"
import React from "react"

import { SolarBatteryChargeMinimalisticBold } from "~components/icons/SolarBatteryChargeMinimalisticBold"
import { SolarBatteryHalfMinimalisticBold } from "~components/icons/SolarBatteryHalfMinimalisticBold"
import { SolarBatteryLowMinimalisticBold } from "~components/icons/SolarBatteryLowMinimalisticBold"
import View from "~components/view"
import { Text } from "~components/view/text"

type BatteryInfoProps = {}

const BatteryInfo: React.FC<BatteryInfoProps> = () => {
  const [batteryLevel, setBatteryLevel] = React.useState(1)
  const [charging, setCharging] = React.useState(false)

  React.useLayoutEffect(() => {
    const fetchBattery = async () => {
      const battery = await (navigator as any).getBattery()
      const update = () => {
        setBatteryLevel(battery.level)
        setCharging(battery.charging)
      }

      update()

      battery.addEventListener("levelchange", update)
      battery.addEventListener("chargingchange", update)
    }

    fetchBattery()
  }, [])

  // Pick icon based on battery level
  const getBatteryIcon = (): React.FC<React.SVGProps<SVGSVGElement>> => {
    if (charging) return SolarBatteryChargeMinimalisticBold
    if (batteryLevel > 0.6) return SolarBatteryChargeMinimalisticBold
    if (batteryLevel > 0.3) return SolarBatteryHalfMinimalisticBold
    return SolarBatteryLowMinimalisticBold
  }

  const Icon = getBatteryIcon()

  return (
    <View className="flex-1 flex items-center gap-2">
      <CircularProgress
        size="lg"
        showValueLabel={true}
        value={Math.round(batteryLevel * 100)}
        valueLabel={<Icon className="size-4 opacity-75" />}
        color={charging ? "success" : batteryLevel > 0.3 ? "warning" : "danger"}
        classNames={{
          track: "stroke-white/10"
          // indicator: "stroke-white/60"
        }}
      />
      <View className="flex flex-col">
        <Text size="sm" className="font-semibold" tone="subtle">
          {Math.round(batteryLevel * 100)}%
        </Text>
        <Text size="sm" tone="subtle">
          {charging ? "Charging" : "Discharging"}
        </Text>
      </View>
    </View>
  )
}

export default BatteryInfo
