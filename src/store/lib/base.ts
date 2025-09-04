import { produce } from "immer"
import { set as lodashSet } from "lodash"

export const createBaseStore = <State>(initialState: State) => {
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
