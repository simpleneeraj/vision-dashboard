import { AnimatePresence } from "motion/react"
import React from "react"

import View from "~components/view"
import Fallback from "~newtab/screens/fallback"
import { content } from "~newtab/style/layout"

type ContentProps = {} & React.PropsWithChildren

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <View className={content()}>
      <React.Suspense fallback={<Fallback />}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </React.Suspense>
    </View>
  )
}

export default Content
