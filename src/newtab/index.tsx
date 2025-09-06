import "~styles/globals.css"

import { preload } from "swr"

import SWRProvider from "~provider/swr"
import AppUIProvider from "~provider/ui"
import { fetcher } from "~services"

import MainSection from "./main"

/**
 * Preload APIs for faster, smoother performance.
 */
preload(process.env.PLASMO_PUBLIC_ENVIRNOMENTS_CDN, fetcher)

function NewTab() {
  return (
    <SWRProvider>
      <AppUIProvider>
        <MainSection />
      </AppUIProvider>
    </SWRProvider>
  )
}

export default NewTab
