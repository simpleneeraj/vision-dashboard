import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@heroui/react"
import { animate } from "motion"
import { motion, useMotionValue, useTransform } from "motion/react"
import React from "react"

import { IonChevronForward } from "~components/icons/IonChevronForward"
import { SolarAlarmPlayBold } from "~components/icons/SolarAlarmPlayBold"

type Props = {
  value: number
  onSelect: (value: number) => void
}

function TimerDropdown({ value, onSelect }: Props) {
  const times = [1, 3, 5, 10, 15, 20, 30]

  // 🔹 Motion value for animated number
  const count = useMotionValue(value)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  // 🔹 Animate whenever prop `value` changes
  React.useEffect(() => {
    animate(count, value, { duration: 0.5, ease: "easeOut" })
  }, [value, count])

  return (
    <Dropdown
      classNames={{
        content: "bg-white/10 backdrop-blur-xl"
      }}>
      <DropdownTrigger>
        <Button
          fullWidth
          className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition px-3 py-2">
          <SolarAlarmPlayBold className="size-4" />
          <motion.span>{rounded}</motion.span>
          <IonChevronForward className="size-4" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        selectionMode="single"
        disallowEmptySelection
        selectedKeys={new Set([value.toString()])} // controlled from props
        onSelectionChange={(keys) => {
          const key = Array.from(keys)[0]
          if (key) onSelect(Number(key))
        }}
        aria-label="Timer Options">
        {times.map((time) => (
          <DropdownItem
            key={time.toString()}
            classNames={{
              base: "data-[hover=true]:transition-colors data-[hover=true]:bg-white/20 data-[selectable=true]:focus:bg-white/20"
            }}>
            {time} min
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default TimerDropdown
