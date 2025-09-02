import { MenuScreenEnums, StorageKeys } from "~typings/enums"

import { ChromeStorageCreator } from "../lib/creator"

const initialState = {
  screen: MenuScreenEnums.Apps
}

export type ScreenStateType = typeof initialState

const useScreenStore = ChromeStorageCreator<ScreenStateType>(
  initialState,
  StorageKeys.MENU_ITEMS
)

export default useScreenStore
