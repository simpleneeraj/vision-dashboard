import { Spinner } from "@heroui/react"
import { motion } from "motion/react"
import React, { lazy } from "react"

import { fadeInVariants, screenVariants } from "~constants/animation"
import { MenuScreenEnums } from "~typings/enums"

import ClockScreen from "./clock"

const AppsScreen = lazy(() => import("~newtab/screens/apps"))
const MindfulnessCard = lazy(() => import("~newtab/screens/mindfulness"))
const EnvironmentsScreen = lazy(() => import("~newtab/screens/environments"))

type NavigationScreenProps = {
  screen: MenuScreenEnums
}

const NavigationScreen: React.FC<NavigationScreenProps> = ({ screen }) => {
  switch (screen) {
    case MenuScreenEnums.APPS:
      return (
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center">
          <AppsScreen />
        </motion.div>
      )
    case MenuScreenEnums.CLOCK:
      return (
        <motion.div
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center">
          <ClockScreen />
        </motion.div>
      )
    case MenuScreenEnums.MINDFULNESS:
      return (
        <motion.div
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center">
          <MindfulnessCard />
        </motion.div>
      )
    case MenuScreenEnums.ENVIRONMENTS:
      return (
        <motion.div
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center">
          <EnvironmentsScreen />
        </motion.div>
      )
    default:
      return (
        <div className="text-sm text-default-foreground/50">
          <Spinner size="lg" variant="gradient" color="current" />
        </div>
      )
  }
}

export default NavigationScreen
