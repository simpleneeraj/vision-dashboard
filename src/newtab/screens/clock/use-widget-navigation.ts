import { useMemo } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import useWidgetsStore from "~store/slice/widgets"
import { ClockWidgets, NavigationDirection } from "~typings/enums"

export function useWidgetNavigation() {
  const { state, updateState } = useWidgetsStore()

  const [widgetList, currentIndex] = useMemo(() => {
    const list = Object.values(ClockWidgets)
    const index = list.indexOf(state?.widget)
    return [list, index] as const
  }, [state?.widget])

  useHotkeys(
    "ArrowLeft",
    () => {
      const prevIndex =
        (currentIndex - 1 + widgetList.length) % widgetList.length
      updateState("widget", widgetList[prevIndex])
      updateState("navigation.direction", NavigationDirection.LEFT)
    },
    [currentIndex, widgetList, state]
  )

  useHotkeys(
    "ArrowRight",
    () => {
      const nextIndex = (currentIndex + 1) % widgetList.length
      updateState("widget", widgetList[nextIndex])
      updateState("navigation.direction", NavigationDirection.RIGHT)
    },
    [currentIndex, widgetList, state]
  )
}
