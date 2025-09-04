/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"
import type { StateStorage } from "zustand/middleware"
import { createJSONStorage, persist } from "zustand/middleware"

import { Storage } from "@plasmohq/storage"

import type { DotNestedKeys } from "~typings"
import type { StorageKeys } from "~typings/enums"

import { createBaseStore } from "./base"

interface StateTypes<State> {
  state: State
  clearState: () => void
  updateState: <P extends DotNestedKeys<State>>(path: P, value: any) => void
}

/**
 * Creates a **local (in-memory) Zustand store**.
 *
 * - State is not persisted anywhere.
 * - Store resets whenever the extension/page reloads.
 *
 * @param initialState Initial state object for the store.
 * @returns A Zustand store hook scoped to the provided state.
 */
export const createLocalStore = <State>(initialState: State) => {
  return create(createBaseStore<State>(initialState))
}

/**
 * Creates a **persistent Zustand store** backed by Chrome extension storage.
 *
 * - Uses `@plasmohq/storage` under the hood.
 * - Supports `"sync" | "local" | "managed" | "session"` storage areas.
 * - State automatically hydrates from storage and stays in sync.
 *
 * @param initialState Initial state object for the store.
 * @param storageName  Unique key for identifying this store in extension storage.
 * @param area         Storage area to use (default: `"session"`).
 * @returns A Zustand store hook with persistent state.
 */
export const createExtensionStore = <State>(
  initialState: State,
  storageName: StorageKeys,
  area: "sync" | "local" | "managed" | "session" = "session"
) => {
  const storage = new Storage({ area })

  return create<StateTypes<State>>()(
    persist(createBaseStore(initialState), {
      name: storageName,
      storage: createJSONStorage(() => storage as StateStorage)
    })
  )
}
