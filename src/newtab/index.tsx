import "~styles/globals.css"

import AppUIProvider from "~provider/ui"

import MainSection from "./main"

function NewTab() {
  return (
    <AppUIProvider>
      <div className="dark text-foreground bg-background">
        <MainSection />
      </div>
    </AppUIProvider>
  )
}

export default NewTab
