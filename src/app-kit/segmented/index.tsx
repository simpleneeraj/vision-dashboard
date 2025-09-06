import { Tab, Tabs, type TabsProps } from "@heroui/react"
import { merge } from "lodash"
import React from "react"

import { cn } from "~lib/cn"
import { tabs } from "~newtab/style/layout"

type SegmentedGroupProps = {} & TabsProps

export const SegmentedItem = Tab

export const SegmentedGroup: React.FC<SegmentedGroupProps> = (props) => {
  const { base, cursor, panel, tab, tabContent, tabList } = tabs()
  return (
    <Tabs
      radius="full"
      variant="light"
      className={cn(props.className, "shadow-none")}
      classNames={merge(
        {},
        {
          tab: tab(),
          base: base(),
          panel: panel(),
          cursor: cursor(),
          tabList: tabList(),
          tabContent: tabContent()
        },
        props.classNames
      )}
      {...props}
    />
  )
}
