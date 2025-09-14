import { Image, Link } from "@heroui/react"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { useHotkeys } from "react-hotkeys-hook"

import View from "~components/view"
import { appVariants, containerVariants } from "~constants/animation"
import WidgetIndicator from "~newtab/elements/widget-indicator"
import type { AppCarouselProps } from "~typings/environments"

const ITEMS_PER_PAGE = 12

const MotionLink = motion.create(Link)

const AppCarousel: React.FC<AppCarouselProps> = ({ apps }) => {
  const [page, setPage] = React.useState(0)
  const totalPages = Math.ceil(apps.length / ITEMS_PER_PAGE)
  const currentApps = apps.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  )

  useHotkeys("ArrowLeft", () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  })

  useHotkeys("ArrowRight", () => {
    setPage((prev) => (prev + 1) % totalPages)
  })

  return (
    <View className="flex flex-col min-w-192 h-144 p-4">
      <View className="flex h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid grid-cols-4 grid-rows-3 gap-16 flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            {currentApps.map((app) => (
              <MotionLink
                key={app.href}
                href={app.href}
                // target="_blank"
                // rel="noopener noreferrer"
                role="button"
                className="flex flex-col items-center outline-default-foreground/50 p-1 rounded-3xl"
                variants={appVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}>
                <Image
                  src={app.source}
                  radius="none"
                  className="size-24"
                  alt={app.title}
                  loading="lazy"
                  removeWrapper
                />
                <span className="text-default-foreground/70 text-xs font-medium line-clamp-3 max-w-24 text-center">
                  {app.title}
                </span>
              </MotionLink>
            ))}
          </motion.div>
        </AnimatePresence>
      </View>
      <WidgetIndicator
        value={page}
        onSelect={(i) => setPage(i)}
        items={Array.from({ length: totalPages }).map((_, i) => i)}
      />
    </View>
  )
}

export default AppCarousel
