import { animate, useDragControls, useMotionValue } from "framer-motion"
import { useHotkeys } from "react-hotkeys-hook"

export function useDraggableCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const dragControls = useDragControls()

  useHotkeys(
    "r, escape",
    () => {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 25 })
      animate(y, 0, { type: "spring", stiffness: 300, damping: 25 })
    },
    [x, y]
  )

  return { x, y, dragControls }
}
