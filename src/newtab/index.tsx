import "~styles/globals.css"

import SWRProvider from "~provider/swr"
import AppUIProvider from "~provider/ui"

import MainSection from "./main"

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
