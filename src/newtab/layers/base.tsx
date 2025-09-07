import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion"
import React, { useEffect } from "react"

import View from "~components/view"
import useAppStore from "~store/slice/app"

type BackgroundLayerProps = {}

const BaseLayer: React.FC<BackgroundLayerProps> = ({}) => {
  const { state } = useAppStore()
  const picture = state?.display?.wallpaper?.picture
  const effects = state?.display?.wallpaper?.effects

  // motion value for blur
  const blurValue = useMotionValue(0)

  // spring for smooth transition
  const blurSpring = useSpring(blurValue, {
    stiffness: 120,
    damping: 20
  })

  // map numeric to CSS string
  const blurFilter = useTransform(blurSpring, (v) => `blur(${v}px)`)

  // update blur target when state changes
  useEffect(() => {
    if (effects?.blur?.enabled) {
      blurValue.set(effects.blur.intensity)
    } else {
      blurValue.set(0)
    }
  }, [effects?.blur?.enabled, effects?.blur?.intensity, blurValue])

  return (
    <View className="fixed inset-0 z-0 select-none overflow-hidden pointer-events-none">
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={picture}
          src={picture}
          alt="Background"
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </AnimatePresence>

      {/* Blur layer with smooth transition */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: blurFilter,
          WebkitBackdropFilter: blurFilter // safari support
        }}
      />

      {/* Transparency overlay */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: effects?.transparency?.enabled
            ? effects.transparency.value
            : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </View>
  )
}

export default BaseLayer
