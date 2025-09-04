import React from "react"
import { SWRConfig } from "swr"

import { fetcher } from "~services"

function SWRProvider({ children }: React.PropsWithChildren) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
}

export default SWRProvider
