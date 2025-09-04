export interface ImageEntry {
  name: string
  size: "sm" | "md" | "lg"
  url: string
}
export type AppCarouselTypes = {
  title: string
  source: string
  href?: string
}

export type AppCarouselProps = {
  apps: AppCarouselTypes[]
}
