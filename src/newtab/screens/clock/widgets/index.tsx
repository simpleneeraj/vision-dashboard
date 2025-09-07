import { AnimatePresence, motion } from "framer-motion"
import React, { lazy } from "react"

import Fallback from "~newtab/screens/fallback"
import useWidgetsStore from "~store/slice/widgets"
import { ClockWidgets, NavigationDirection } from "~typings/enums"

const CalendarWidget = lazy(() => import("./calendar"))
const PrimaryDigitalClockWidget = lazy(() => import("./primary-digital-clock"))
const SecondaryDigitalClockWidget = lazy(
  () => import("./secondary-digital-clock")
)
const TimeDateWeatherWidget = lazy(() => import("./time-date-weather"))

const ClockDisplay: React.FC = () => {
  const { state, updateState } = useWidgetsStore()

  const widgets = {
    [ClockWidgets.PrimaryDigitalClock]: <PrimaryDigitalClockWidget />,
    [ClockWidgets.SecondaryDigitalClock]: <SecondaryDigitalClockWidget />,
    [ClockWidgets.CalendarView]: <CalendarWidget />,
    [ClockWidgets.WeatherClock]: <TimeDateWeatherWidget />
  }

  // Animation variants based on navigation direction
  const variants = {
    enter: (direction: NavigationDirection) => ({
      x: direction === NavigationDirection.RIGHT ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: NavigationDirection) => ({
      x: direction === NavigationDirection.RIGHT ? -50 : 50,
      opacity: 0,
      scale: 0.95
    })
  }

  const [widgetList, currentIndex] = React.useMemo(() => {
    const list = Object.values(ClockWidgets)
    const index = list.indexOf(state?.widget)
    return [list, index] as const
  }, [state?.widget])

  const onDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 80 // pixels before it counts as a swipe
    if (info.offset.x > threshold) {
      // swipe right → go to previous
      const prevIndex =
        (currentIndex - 1 + widgetList.length) % widgetList.length
      updateState("widget", widgetList[prevIndex])
      updateState("navigation.direction", NavigationDirection.LEFT)
    } else if (info.offset.x < -threshold) {
      // swipe left → go to next
      const nextIndex = (currentIndex + 1) % widgetList.length
      updateState("widget", widgetList[nextIndex])
      updateState("navigation.direction", NavigationDirection.RIGHT)
    }
  }

  return (
    <AnimatePresence mode="wait" custom={state.navigation.direction}>
      <motion.div
        drag="x"
        key={state.widget}
        variants={variants}
        exit="exit"
        initial="enter"
        animate="center"
        onDragEnd={onDragEnd}
        custom={state.navigation.direction}
        dragConstraints={{ left: 0, right: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full">
        {widgets[state.widget] ?? <Fallback />}
      </motion.div>
    </AnimatePresence>
  )
}

export default ClockDisplay
