import { forOwn, has, isObject } from "lodash"
import React from "react"
import useSWR from "swr"

import { Mode, Theme } from "~typings/enums"

type Types = {
  colorScheme: string
}
const useBackgrounds = ({ colorScheme }: Types) => {
  const query = useSWR(process.env.PLASMO_PUBLIC_ENVIRNOMENTS_CDN)

  const cdn = query.data || {}

  const items = React.useMemo(() => {
    const day: any[] = []
    const night: any[] = []
    function flattenImages(obj: any, parentKey?: string) {
      forOwn(obj, (value, key) => {
        if (has(value, "sources") && isObject(value.sources)) {
          const entry = { name: key, sources: value.sources }

          // Use parent folder key to detect environment
          if (parentKey?.toLowerCase() === Mode.DAY) day.push(entry)
          else if (parentKey?.toLowerCase() === Mode.NIGHT) night.push(entry)
        } else if (isObject(value)) {
          flattenImages(value, key) // pass current key as parent
        }
      })
    }
    flattenImages(cdn)
    return colorScheme === Theme.DARK ? night : day
  }, [cdn, colorScheme])

  return { items }
}

export default useBackgrounds
