import { forOwn, isObject } from "lodash"
import React from "react"
import useSWR from "swr"

import { fetcher } from "~services"
import { Mode, Theme } from "~typings/enums"

type UseBackgroundsProps = {
  colorScheme: string
}

type ImageEntry = {
  name: string
  sources: Record<string, string>
}

const useBackgrounds = ({ colorScheme }: UseBackgroundsProps) => {
  const { data: cdn = {} } = useSWR(
    process.env.PLASMO_PUBLIC_ENVIRONMENTS_CDN ||
      process.env.NEXT_PUBLIC_ENVIRONMENTS_CDN,
    fetcher
  )

  const items = React.useMemo<ImageEntry[]>(() => {
    const day: ImageEntry[] = []
    const night: ImageEntry[] = []

    const flattenImages = (obj: any, parentKey?: string) => {
      forOwn(obj, (value, key) => {
        if (isObject(value?.sources)) {
          const entry: ImageEntry = { name: key, sources: value.sources }

          if (parentKey?.toLowerCase() === Mode.DAY) {
            day.push(entry)
          } else if (parentKey?.toLowerCase() === Mode.NIGHT) {
            night.push(entry)
          }
        } else if (isObject(value)) {
          flattenImages(value, key) // recurse into nested folders
        }
      })
    }

    flattenImages(cdn)

    return colorScheme === Theme.DARK ? night : day
  }, [cdn, colorScheme])

  return { items }
}

export default useBackgrounds
