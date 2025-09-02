/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer"
import { set as lodashSet } from "lodash"
import { create } from "zustand"
import type { StateStorage } from "zustand/middleware"
import { createJSONStorage, persist } from "zustand/middleware"

import { Storage } from "@plasmohq/storage"

import type { StorageKeys } from "~typings/enums"

interface StateTypes<State> {
  state: State
  clearState: () => void
  updateState: (path: string, value: any) => void
}

const createBaseStore = <State>(initialState: State) => {
  return (set) => ({
    state: initialState,
    updateState: (path: string, value: any) => {
      set((state) => ({
        state: produce(state.state, (draft) => {
          lodashSet(draft, path, value)
        })
      }))
    },
    clearState: () => {
      set(() => ({ state: initialState }))
    }
  })
}

export const StoreCreator = <State>(initialState: State) => {
  return create(createBaseStore<State>(initialState))
}

export const ChromeStorageCreator = <State>(
  initialState: State,
  storageName: StorageKeys,
  area: "sync" | "local" | "managed" | "session" = "session"
) => {
  const localStorage = new Storage({ area })
  return create<StateTypes<State>>()(
    persist(createBaseStore(initialState), {
      name: storageName,
      storage: createJSONStorage(() => localStorage as StateStorage)
    })
  )
}
