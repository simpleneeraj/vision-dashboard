import { Button } from "@heroui/react"
import { motion, type MotionProps } from "framer-motion"
import React from "react"

import { SolarWidget3Bold } from "~components/icons/SolarWidget3Bold"
import { cn } from "~lib/cn"
import { useDraggableCard } from "~newtab/hooks/use-draggable"

type DraggableViewProps = {
  draggable?: boolean
} & React.ComponentPropsWithRef<"div"> &
  MotionProps

const DraggableView: React.FC<DraggableViewProps> = ({
  draggable,
  ...props
}) => {
  const { x, y, dragControls } = useDraggableCard()

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragElastic={0.3}
      dragMomentum={true}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.6
      }}
      className={cn("cursor-default", props.className)}
      style={{ x, y }}
      {...props}>
      {draggable && (
        <Button
          size="sm"
          isIconOnly
          radius="full"
          className="bg-white/10 cursor-grab active:cursor-grabbing backdrop-blur-lg"
          onPointerDown={(e) => {
            e.stopPropagation()
            dragControls.start(e)
          }}>
          <SolarWidget3Bold className="size-3.5 opacity-50" />
        </Button>
      )}
      {props.children}
    </motion.div>
  )
}

export default DraggableView
