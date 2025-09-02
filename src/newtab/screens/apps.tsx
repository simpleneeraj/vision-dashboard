import { Card, Image, Link, Tab, Tabs } from "@heroui/react"
import { sum } from "lodash"
import { AnimatePresence, motion } from "motion/react"
import React from "react"

import { SolarPenBold } from "~components/icons/SolarPenBold"
import View from "~components/view"
import { indicatorVariants } from "~constants/animation"
import { apps } from "~constants/apps"
import { tabs } from "~newtab/items"

type AppsScreenProps = {
  // Define your props here
}

const AppsScreen: React.FC<AppsScreenProps> = ({}) => {
  return (
    <View className="flex flex-col gap-2">
      <View className="flex items-center justify-center ">
        <Tabs
          aria-label="Tabs colors"
          radius="full"
          variant="light"
          className="shadow-none"
          classNames={{
            tab: "h-full",
            tabContent: "text-xs",
            tabList: "dark:bg-white/5 shadow-none backdrop-blur-sm",
            cursor: "bg-black/10 dark:bg-white/10 shadow-none"
          }}>
          {tabs.map((tab) => (
            <Tab key={tab.key} title={tab.title} />
          ))}
          <Tab
            key={"edit"}
            title={<SolarPenBold className="size-4 opacity-75" />}
          />
        </Tabs>
      </View>
      <AppCarousel apps={[...apps, ...apps, ...apps]} />
    </View>
  )
}

export default AppsScreen

type App = {
  title: string
  source: string
  href?: string
}

type Props = {
  apps: App[]
}

const ITEMS_PER_PAGE = 13

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
}

const appVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 }
}

const AppCarousel: React.FC<Props> = ({ apps }) => {
  const rowConfig = [4, 5, 4]
  const [page, setPage] = React.useState(0)
  const totalPages = Math.ceil(apps.length / ITEMS_PER_PAGE)
  const currentApps = apps.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  )

  return (
    <View className="flex flex-col">
      <Card
        shadow="none"
        className="min-w-192 min-h-144 bg-transparent flex items-center p-2">
        <AnimatePresence mode="wait">
          {rowConfig.map((cols, rowIndex) => {
            const start = sum(rowConfig.slice(0, rowIndex))
            const end = start + cols
            const rowItems = currentApps.slice(start, end)

            return (
              <motion.div
                key={rowIndex}
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
                }}
                className={`flex-1 grid gap-16 items-center`}
                variants={containerVariants}>
                {rowItems.map((app, index) => (
                  <Link
                    key={index}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer">
                    <motion.div
                      role="button"
                      className="flex flex-col items-center cursor-pointer outline-default-foreground/50 p-1 rounded-3xl"
                      variants={appVariants}
                      whileHover="hover"
                      custom={index}
                      whileTap={{ scale: 0.95 }}>
                      <Image
                        src={app.source}
                        radius="none"
                        className="size-24"
                        alt={app.title}
                      />
                      <span className="text-default-foreground text-sm font-medium mt-2">
                        {app.title}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </Card>
      {/* Page Indicators */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.div
            variants={indicatorVariants}
            key={i}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === page ? "bg-default-foreground" : "bg-default-foreground/40"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </View>
  )
}
