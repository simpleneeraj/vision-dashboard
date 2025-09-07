import type { WidgetStateType } from "~typings/app"
import {
  ClockWidgets,
  NavigationDirection,
  StorageArea,
  StorageKeys
} from "~typings/enums"

import { createExtensionStore } from "../lib/creator"

const initialState = {
  widget: ClockWidgets.PrimaryDigitalClock,
  navigation: {
    direction: NavigationDirection.NONE
  }
}

const useWidgetsStore = createExtensionStore<WidgetStateType>(
  initialState,
  StorageKeys.CLOCK_WIDGET,
  StorageArea.SESSION
)

export default useWidgetsStore
