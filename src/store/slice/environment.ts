import rooms from "~constants/room"
import { StorageKeys } from "~typings/enums"

import { ChromeStorageCreator } from "../lib/creator"

const initialState = {
  dim: false,
  environment: rooms.night[0].source
}

export type EnvironmentStateTypes = typeof initialState

const useEnvironmentStore = ChromeStorageCreator<EnvironmentStateTypes>(
  initialState,
  StorageKeys.ENVIRNOMENT
)

export default useEnvironmentStore
