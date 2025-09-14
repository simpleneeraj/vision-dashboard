import "~styles/globals.css"

import React from "react"

import { fonts } from "~config/fonts"
import { cn } from "~lib/cn"
import SWRProvider from "~provider/swr"
import AppUIProvider from "~provider/ui"

type RootLayoutProps = {} & React.PropsWithChildren

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const className = cn(
    "min-h-screen text-foreground bg-background antialiased",
    fonts
  )
  return (
    <html suppressHydrationWarning>
      <body className={className}>
        <main>
          <SWRProvider>
            <AppUIProvider>{children}</AppUIProvider>
          </SWRProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
