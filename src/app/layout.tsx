import "~styles/globals.css"

import type { Metadata } from "next"
import React from "react"

import { fonts } from "~config/fonts"
import { siteConfig } from "~config/site"
import { cn } from "~lib/cn"
import SWRProvider from "~provider/swr"
import AppUIProvider from "~provider/ui"

type RootLayoutProps = {} & React.PropsWithChildren

export const metadata: Metadata = {
  title: {
    default: siteConfig.displayName ?? siteConfig.name,
    template: `%s | ${siteConfig.displayName ?? siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.displayName ?? siteConfig.name,
  authors: [{ name: siteConfig.author }],
  keywords: siteConfig.keywords,
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL(siteConfig.links.website),
  openGraph: {
    title: siteConfig.displayName ?? siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.links.website,
    siteName: siteConfig.displayName ?? siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 800,
        alt: "Vision Dashboard - Main Preview"
      },
      {
        url: "/og-alt-1.png",
        width: 1200,
        height: 800,
        alt: "Vision Dashboard - Alternative Preview 1"
      },
      {
        url: "/og-alt-2.png",
        width: 1200,
        height: 800,
        alt: "Vision Dashboard - Alternative Preview 2"
      },
      {
        url: "/og-focus.png",
        width: 1200,
        height: 800,
        alt: "Vision Dashboard - Focus Mode"
      },
      {
        url: "/og-minimal.png",
        width: 1200,
        height: 800,
        alt: "Vision Dashboard - Minimal Layout"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.displayName ?? siteConfig.name,
    description: siteConfig.description,
    creator: "@iamsimpleneeraj",
    images: [
      "/og-main.png",
      "/og-alt-1.png",
      "/og-alt-2.png",
      "/og-focus.png",
      "/og-minimal.png"
    ]
  },
  category: "productivity"
}

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
