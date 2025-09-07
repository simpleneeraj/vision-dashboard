import type { MindfulnessStateType } from "~typings/app"
import { StorageArea, StorageKeys } from "~typings/enums"

import { createExtensionStore } from "../lib/creator"

const initialState = {
  timer: 5,
  isRunning: false,
  timeLeft: 5 * 60
}

const useMindfulnessStore = createExtensionStore<MindfulnessStateType>(
  initialState,
  StorageKeys.MINDFULNESS,
  StorageArea.SESSION
)

export default useMindfulnessStore
