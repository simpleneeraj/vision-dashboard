import React from "react"

import DraggableView from "~components/view/draggable"
import WidgetIndicator from "~newtab/elements/widget-indicator"
import useWidgetsStore from "~store/slice/widgets"
import { ClockWidgets, NavigationDirection } from "~typings/enums"

import Fallback from "../fallback"
import { useWidgetNavigation } from "./use-widget-navigation"

const ClockDisplay = React.lazy(() => import("./widgets"))

const ClockScreen: React.FC = () => {
  const { state, updateState } = useWidgetsStore()

  // Now the arrow keys automatically navigate widgets
  useWidgetNavigation()

  return (
    <DraggableView
      draggable
      className="flex flex-col items-center justify-between h-80 p-4 gap-2 cursor-default">
      <React.Suspense
        fallback={<Fallback className="flex items-center justify-center" />}>
        <ClockDisplay />
      </React.Suspense>

      <WidgetIndicator
        value={state?.widget}
        items={Object.values(ClockWidgets)}
        onSelect={(nextWidget) => {
          const list = Object.values(ClockWidgets)
          const cur = list.indexOf(state?.widget)
          const next = list.indexOf(nextWidget)
          const direction =
            next > cur ? NavigationDirection.RIGHT : NavigationDirection.LEFT
          updateState("widget", nextWidget)
          updateState("navigation.direction", direction)
        }}
      />
    </DraggableView>
  )
}

export default ClockScreen
