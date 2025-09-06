import { SimpleIconsAppstore } from "~components/icons/SimpleIconsAppstore"
import { SolarBoxMinimalisticBold } from "~components/icons/SolarBoxMinimalisticBold"
import { SolarGalleryCircleBold } from "~components/icons/SolarGalleryCircleBold"
import { SolarMoonStarsBold } from "~components/icons/SolarMoonStarsBold"
import { MenuScreenEnums } from "~typings/enums"

export default [
  {
    title: MenuScreenEnums.APPS,
    icon: SimpleIconsAppstore
  },
  {
    title: MenuScreenEnums.CLOCK,
    icon: SolarBoxMinimalisticBold
  },
  {
    title: MenuScreenEnums.MINDFULNESS,
    icon: SolarMoonStarsBold
  },
  {
    title: MenuScreenEnums.ENVIRONMENTS,
    icon: SolarGalleryCircleBold
  }
]
