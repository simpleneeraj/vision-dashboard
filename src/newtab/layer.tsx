import { AnimatePresence, motion } from "framer-motion"
import React from "react"

import useEnvironmentStore from "~store/slice/environment"

type BackgroundLayerProps = {}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({}) => {
  const { state } = useEnvironmentStore()
  const environment = state.environment

  return (
    <div className="fixed inset-0 z-0 select-none overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={environment}
          src={environment}
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
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: state.dim ? 0.4 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  )
}

export default BackgroundLayer
