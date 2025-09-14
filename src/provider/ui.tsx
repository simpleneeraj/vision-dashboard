"use client"

import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import React from "react"

import useAppStore from "~store/slice/app"

function AppUIProvider({ children }: React.PropsWithChildren) {
  const { state } = useAppStore()
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme={state?.display?.appearance?.colorScheme}>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

export default AppUIProvider
