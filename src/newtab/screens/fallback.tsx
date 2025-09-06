import { Spinner } from "@heroui/react"
import React from "react"

import View from "~components/view"
import { cn } from "~lib/cn"

type FallbackProps = {} & React.ComponentPropsWithRef<"div">

const Fallback: React.FC<FallbackProps> = (props) => {
  return (
    <View className={cn("text-sm text-default-foreground/50", props.className)}>
      <Spinner variant="gradient" color="current" />
    </View>
  )
}

export default Fallback
