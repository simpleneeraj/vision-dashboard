import { cn } from "@heroui/theme"
import { IBM_Plex_Mono, Silkscreen } from "next/font/google"

const stylish = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  weight: ["400", "700"]
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex"
})

export const fonts = cn(mono.variable, stylish.variable)
