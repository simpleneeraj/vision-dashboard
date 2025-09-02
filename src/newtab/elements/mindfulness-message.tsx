import { AnimatePresence, motion } from "motion/react"
import React from "react"

import { useInterval } from "~hooks/use-interval"

type Props = {
  animate?: boolean
  messages: string[]
  duration?: number
}
function MindfulnessMessage({
  animate = true,
  messages,
  duration = 5000
}: Props) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const currentMindfulnessText = messages[currentTextIndex]

  useInterval(
    () => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % messages.length)
    },
    animate ? duration : null
  )

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentTextIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-sm text-default-600">
          {currentMindfulnessText}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export default MindfulnessMessage
