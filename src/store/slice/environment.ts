import rooms from "~constants/room"
import { StorageKeys } from "~typings/enums"

import { ChromeStorageCreator } from "../lib/creator"

const initialState = {
  dim: false,
  environment:
    "https://cdn.jsdelivr.net/gh/simpleneeraj/vision-dashboard@main/assets/rooms/night/time%3Dnight-room%3Dmodern-apartment.png"
}

export type EnvironmentStateTypes = typeof initialState

const useEnvironmentStore = ChromeStorageCreator<EnvironmentStateTypes>(
  initialState,
  StorageKeys.ENVIRNOMENT
)

export default useEnvironmentStore
