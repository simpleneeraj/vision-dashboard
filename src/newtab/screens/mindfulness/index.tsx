import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress
} from "@heroui/react"
import { animate } from "motion"
import { motion, useMotionValue, useTransform } from "motion/react"
import React from "react"

import { SolarPauseBold } from "~components/icons/SolarPauseBold"
import { SolarPlayBold } from "~components/icons/SolarPlayBold"
import View from "~components/view"
import BlurView from "~components/view/blur-view"
import {
  introMindfulnessTexts,
  mindfulnessMessages
} from "~constants/mindfulness"
import { useInterval } from "~hooks/use-interval"
import MindfulnessMessage from "~newtab/screens/mindfulness/message"
import TimerDropdown from "~newtab/screens/mindfulness/timer"
import useMindfulnessStore from "~store/slice/mindfulness"

export default function MindfulnessCard() {
  const { state, updateState } = useMindfulnessStore()

  // ⏱ Reset timeLeft whenever timer changes and not running
  React.useEffect(() => {
    if (!state.isRunning) {
      updateState("timeLeft", state.timer * 60)
    }
  }, [state.timer, state.isRunning])

  // ⏳ Countdown logic
  useInterval(
    () => {
      if (state.timeLeft <= 1) {
        // stop when finished
        updateState("isRunning", false)
        updateState("timeLeft", 0)
      } else {
        // decrement
        updateState("timeLeft", state.timeLeft - 1)
      }
    },
    state.isRunning ? 1000 : null
  )

  // Percentage from 100 → 0
  const progressValue = (state.timeLeft / (state.timer * 60)) * 100

  // Minutes + seconds
  const minutes = Math.floor(state.timeLeft / 60)
  const seconds = state.timeLeft % 60

  // --- Motion values for minutes + seconds ---
  const minuteMotion = useMotionValue(minutes)
  const secondMotion = useMotionValue(seconds)

  const roundedMinutes = useTransform(minuteMotion, (latest) =>
    Math.floor(latest)
  )
  const roundedSeconds = useTransform(secondMotion, (latest) =>
    Math.floor(latest).toString().padStart(2, "0")
  )

  // Animate when values change
  React.useEffect(() => {
    animate(minuteMotion, minutes, { duration: 0.4, ease: "easeOut" })
  }, [minutes])

  React.useEffect(() => {
    animate(secondMotion, seconds, { duration: 0.4, ease: "easeOut" })
  }, [seconds])

  return (
    <BlurView className="relative z-10 rounded-4xl p-2 w-80 flex flex-col items-center">
      <CardHeader className="text-center flex-col pb-0">
        <h2 className="text-2xl font-semibold text-default-foreground">
          Mindfulness
        </h2>
      </CardHeader>

      <CardBody>
        <motion.div
          className="flex items-center justify-center p-2 gap-2"
          initial={false}
          animate={{ height: state.isRunning ? 240 : 64 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          {state.isRunning ? (
            <motion.div
              key="progress"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-4">
              <View className="flex items-center justify-center">
                <CircularProgress
                  aria-label="Timer"
                  valueLabel={
                    <span className="absolute text-3xl font-medium text-default-foreground/75 flex gap-1">
                      <motion.span>{roundedMinutes}</motion.span>:
                      <motion.span>{roundedSeconds}</motion.span>
                    </span>
                  }
                  showValueLabel={true}
                  value={progressValue}
                  classNames={{
                    svg: "w-36 h-36",
                    indicator: "stroke-white/60",
                    track: "stroke-white/10"
                  }}
                  strokeWidth={1.5}
                />
              </View>
              <MindfulnessMessage messages={mindfulnessMessages} />
            </motion.div>
          ) : (
            <MindfulnessMessage messages={introMindfulnessTexts} />
          )}
        </motion.div>
      </CardBody>

      <CardFooter className="flex items-center justify-between w-full gap-4">
        <TimerDropdown
          value={state.timer}
          onSelect={(minutes) => {
            updateState("timer", minutes)
            updateState("timeLeft", minutes * 60)
            updateState("isRunning", false)
          }}
        />

        <Button
          fullWidth
          onPress={() => {
            if (state.isRunning) {
              updateState("isRunning", false)
            } else {
              updateState("timeLeft", state.timer * 60)
              updateState("isRunning", true)
            }
          }}
          className="flex items-center rounded-full bg-white/10 hover:bg-white/20 transition text-default-foreground/75">
          <motion.div
            key={state.isRunning ? "pause" : "play"}
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}>
            {state.isRunning ? (
              <SolarPauseBold className="size-4" />
            ) : (
              <SolarPlayBold className="size-4" />
            )}
          </motion.div>

          {state.isRunning ? "Pause" : "Start"}
        </Button>
      </CardFooter>
    </BlurView>
  )
}
