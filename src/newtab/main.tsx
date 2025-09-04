import { Spinner } from "@heroui/react"
import { AnimatePresence, motion } from "motion/react"
import React, { lazy, Suspense } from "react"

import { fadeInVariants, screenVariants } from "~constants/animation"
import useAppStore from "~store/slice/app"
import { MenuScreenEnums } from "~typings/enums"

import BackgroundLayer from "./layer"

const MenuBar = lazy(() => import("./screens/apps/menus"))
const AppsScreen = lazy(() => import("~newtab/screens/apps"))
const MindfulnessCard = lazy(() => import("~newtab/screens/mindfulness"))
const EnvironmentsScreen = lazy(() => import("~newtab/screens/environments"))

type TestProps = {
  // Add props here if needed in future
}

const MainSection: React.FC<TestProps> = () => {
  const { state } = useAppStore()

  // Decide which screen to render based on current menu state
  const Screens = React.useMemo(() => {
    switch (state.navigation.screen) {
      case MenuScreenEnums.Apps:
        return (
          <motion.div
            key={state.navigation.screen}
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center">
            <AppsScreen />
          </motion.div>
        )
      case MenuScreenEnums.Mindfulness:
        return (
          <motion.div
            key={state.navigation.screen}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center">
            <MindfulnessCard />
          </motion.div>
        )
      case MenuScreenEnums.Environments:
        return (
          <motion.div
            key={state.navigation.screen}
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
            <Spinner variant="gradient" color="current" />
          </div>
        )
    }
  }, [state.navigation.screen])

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* ── Top Menu Bar ── */}
      <MenuBar />
      {/* ── Background / Decorative Layer ── */}
      <BackgroundLayer />
      {/* ── Main Content Section ── */}
      <div className="relative z-10 flex h-full flex-1 items-center justify-center gap-8 p-6">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="text-sm text-default-foreground/50">
                <Spinner variant="gradient" color="current" />
              </div>
            }>
            {Screens}
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MainSection
