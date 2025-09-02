import { HeroUIProvider } from "@heroui/react"
import * as React from "react"

function AppUIProvider({ children }: React.PropsWithChildren) {
  return <HeroUIProvider>{children}</HeroUIProvider>
}

export default AppUIProvider
