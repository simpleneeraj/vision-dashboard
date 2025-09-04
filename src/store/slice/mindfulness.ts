import { StorageKeys } from "~typings/enums"

import { createExtensionStore } from "../lib/creator"

const initialState = {
  timer: 5,
  isRunning: false,
  timeLeft: 5 * 60
}

export type MindfulnessStateType = typeof initialState

const useMindfulnessStore = createExtensionStore<MindfulnessStateType>(
  initialState,
  StorageKeys.MINDFULNESS
)

export default useMindfulnessStore
