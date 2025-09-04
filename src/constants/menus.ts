import { SimpleIconsAppstore } from "~components/icons/SimpleIconsAppstore"
import { SolarGalleryWideBold } from "~components/icons/SolarGalleryWideBold"
import { SolarMoonSleepBold } from "~components/icons/SolarMoonSleepBold"
import { SolarWidget3Bold } from "~components/icons/SolarWidget3Bold"
import { MenuScreenEnums } from "~typings/enums"

export default [
  {
    title: MenuScreenEnums.Apps,
    icon: SimpleIconsAppstore
  },
  {
    title: MenuScreenEnums.Mindfulness,
    icon: SolarMoonSleepBold
  },
  {
    title: MenuScreenEnums.Environments,
    icon: SolarGalleryWideBold
  }
]
