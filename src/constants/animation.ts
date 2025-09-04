import type { Variants } from "motion"

export const fadeInVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 }
}

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // delay between each child
      delayChildren: 0.1 // initial delay
    }
  }
}

export const appVariants: Variants = {
  hidden: (i: number) => {
    // i = index, use it to offset direction
    const direction = i % 2 === 0 ? 1 : -1
    return {
      x: 100 * direction, // from left or right
      y: 100, // drop in from below
      scale: 0.5
    }
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.8
    }
  },
  hover: { scale: 1.1 }
}

export const indicatorVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.2,
      type: "spring",
      damping: 8,
      stiffness: 200
    }
  }
}

export const screenVariants: Variants = {
  initial: {
    y: 20,
    // rotateX: 15,
    scale: 0.95,
    transformPerspective: 600
  },
  animate: {
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 25 }
  },
  exit: {
    y: -20,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeInOut" }
  }
}
