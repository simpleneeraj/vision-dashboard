import { Image, Link } from "@heroui/react"
import { AnimatePresence, motion } from "motion/react"
import React from "react"

import View from "~components/view"
import {
  appVariants,
  containerVariants,
  indicatorVariants
} from "~constants/animation"
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
                target="_blank"
                rel="noopener noreferrer"
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
                <span className="text-default-foreground text-xs font-medium mt-2">
                  {app.title}
                </span>
              </MotionLink>
            ))}
          </motion.div>
        </AnimatePresence>
      </View>
      {/* Page Indicators */}
      {totalPages > 0 && (
        <View className="flex items-center justify-center">
          <View className="flex items-center bg-default-foreground/10 p-1 rounded-3xl gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.div
                key={i}
                variants={indicatorVariants}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                  i === page
                    ? "bg-default-foreground"
                    : "bg-default-foreground/40"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setPage(i)}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  )
}

export default AppCarousel
