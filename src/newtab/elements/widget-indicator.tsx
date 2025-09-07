import { cn } from "@heroui/react"
import { motion } from "framer-motion"
import { isEqual } from "lodash"
import React from "react"

import View from "~components/view"

type WidgetIndicatorProps<T> = {
  items: T[]
  value: T
  onSelect: (value: T) => void
}

const WidgetIndicator = <T extends unknown>({
  items,
  value,
  onSelect
}: WidgetIndicatorProps<T>) => {
  return (
    <View className="flex justify-center">
      <View className="flex space-x-2">
        {items.map((item, index) => {
          const active = isEqual(value, item)
          return (
            <motion.button
              key={index}
              onClick={() => onSelect(item)}
              initial={false}
              animate={{
                width: active ? 24 : 6,
                opacity: active ? 1 : 0.6
              }}
              whileHover={value !== item ? { scale: 1.2, opacity: 1 } : {}}
              whileTap={value !== item ? { scale: 0.9 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "rounded-full h-1.5 backdrop-blur-md transition-colors focus:outline-none",
                active ? "bg-white/50" : "bg-white/40 hover:bg-white/50"
              )}
            />
          )
        })}
      </View>
    </View>
  )
}

export default WidgetIndicator
